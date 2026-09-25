/* Structural + link + schema validation for the whole static site.
   Run: node tools/validate.mjs
   Checks every href/src actually resolves on disk, every canonical is
   absolute, every JSON-LD block parses, and tags balance. */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';

const ROOT = process.cwd();
const SITE = 'https://makresidency.com';
let errors = 0, warnings = 0, checked = 0;

const err = (f, m) => { errors++; console.log(`  ERROR  ${f}: ${m}`); };
const warn = (f, m) => { warnings++; console.log(`  warn   ${f}: ${m}`); };

/* every generated + hand-maintained page */
const pages = ['index.html'];
for (const d of readdirSync(ROOT, { withFileTypes: true })) {
    if (!d.isDirectory() || d.name.startsWith('.') || d.name === 'tools' || d.name === 'node_modules') continue;
    if (existsSync(join(ROOT, d.name, 'index.html'))) pages.push(join(d.name, 'index.html'));
}

const VOID = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);

for (const page of pages) {
    const html = readFileSync(join(ROOT, page), 'utf8');
    const dir = dirname(join(ROOT, page));
    const rel = relative(ROOT, join(ROOT, page)).replace(/\\/g, '/');

    /* ---- title / description / canonical ---- */
    /* decode entities so length checks reflect what a browser renders */
    const decode = (s) => s
        .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');

    const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
    const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
    const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || '';
    const h1s = html.match(/<h1[\s>]/g) || [];

    if (!title) err(rel, 'missing <title>');
    else if (title.length > 65) warn(rel, `title ${title.length} chars (>65, may truncate)`);
    if (!desc) err(rel, 'missing meta description');
    else if (desc.length > 160) warn(rel, `description ${desc.length} chars (>160)`);
    else if (desc.length < 70) warn(rel, `description only ${desc.length} chars`);
    if (!canon.startsWith(SITE)) err(rel, `canonical not absolute on ${SITE}: ${canon}`);
    if (h1s.length !== 1) err(rel, `expected exactly 1 <h1>, found ${h1s.length}`);

    /* ---- lang / viewport / robots ---- */
    if (!/<html lang="en">/.test(html)) err(rel, 'missing lang="en"');
    if (!/name="viewport"/.test(html)) err(rel, 'missing viewport');
    if (!/name="robots"/.test(html)) err(rel, 'missing meta robots');

    /* ---- JSON-LD ---- */
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    if (!blocks.length) err(rel, 'no JSON-LD');
    const ids = new Set();
    for (const [, raw] of blocks) {
        let data;
        try { data = JSON.parse(raw); }
        catch (e) { err(rel, `JSON-LD parse error: ${e.message}`); continue; }
        for (const node of data['@graph'] || []) {
            if (node['@id']) {
                if (ids.has(node['@id'])) err(rel, `duplicate @id: ${node['@id']}`);
                ids.add(node['@id']);
            }
            for (const ref of [node.publisher, node.isPartOf, node.about, node.provider]) {
                const r = typeof ref === 'object' && ref ? ref['@id'] : null;
                if (r && r.startsWith(`${SITE}/#`) && !ids.has(r) && ref !== node) {
                    /* resolved below once all ids collected */
                }
            }
        }
        for (const node of data['@graph'] || []) {
            for (const [k, v] of Object.entries(node)) {
                if (k === '@id') continue;
                if (v && typeof v === 'object' && v['@id'] && v['@id'].startsWith(`${SITE}/#`) && !ids.has(v['@id'])) {
                    err(rel, `dangling @id ref ${v['@id']} (in ${k})`);
                }
            }
        }
    }

    /* ---- internal links resolve ---- */
    const links = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
    for (const href of new Set(links)) {
        if (/^(https?:|mailto:|tel:|data:|#|javascript:)/.test(href)) continue;
        const [path, hash] = href.split('#');
        if (!path) continue;
        const target = resolve(dir, path);
        checked++;
        if (!existsSync(target)) { err(rel, `broken link -> ${href}`); continue; }
        /* directory link should have an index.html */
        if (statSync(target).isDirectory() && !existsSync(join(target, 'index.html'))) {
            err(rel, `directory has no index.html -> ${href}`);
        }
        if (hash && target.endsWith('.html')) {
            const t = readFileSync(target, 'utf8');
            if (!t.includes(`id="${hash}"`)) warn(rel, `anchor #${hash} not found in ${path}`);
        }
    }

    /* ---- in-page anchors ---- */
    for (const [href] of links) {
        if (!href.startsWith('#') || href === '#') continue;
        const id = href.slice(1);
        if (!html.includes(`id="${id}"`)) err(rel, `dead in-page anchor ${href}`);
    }

    /* ---- tag balance ---- */
    const stack = [];
    for (const m of html.matchAll(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b[^>]*?(\/?)>/g)) {
        const [, close, tag, self] = m;
        if (VOID.has(tag.toLowerCase()) || self === '/') continue;
        if (close) {
            const top = stack.pop();
            if (top !== tag) { err(rel, `tag mismatch: </${tag}> closed <${top}>`); break; }
        } else stack.push(tag);
    }
    if (stack.length) err(rel, `unclosed tags: ${stack.join(', ')}`);
}

console.log(`\n${pages.length} pages, ${checked} internal links checked`);
console.log(`errors: ${errors}   warnings: ${warnings}`);
process.exit(errors ? 1 : 0);
