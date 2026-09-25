/* ==========================================================================
   MAK RESIDENCY - build all detail pages
   --------------------------------------------------------------------------
       node tools/build-pages.mjs

   Reads the shared shell and the content modules, writes one folder per
   page, then writes robots.txt and sitemap.xml. The homepage is hand
   maintained in index.html and is listed in the sitemap but not generated.
   ========================================================================== */

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

import {
    header, footer, breadcrumbBlock, jsonLdBlock, breadcrumbLd,
    writePage, serviceLd, ORG_ID, SITE_ID, SITE, REVIEWED
} from './shell.mjs';
import { PROGRAMS } from './content-programs.mjs';
import { LEGAL } from './content-legal.mjs';

const OUT = process.cwd();
const P = '../';
const written = [];

/* -------------------------------------------------- legal page template */

function writeLegalPage(page) {
    const url = `${SITE}/${page.slug}/`;
    const trail = [
        { label: 'Home', href: `${P}index.html` },
        { label: page.h1, href: '' }
    ];

    const body = page.sections
        .map((s) => `<h2 id="${s.id}">${s.h}</h2>\n${s.p.map((para) => `<p>${para}</p>`).join('\n')}`)
        .join('\n\n');

    const nav = LEGAL.map(
        (l) => `<li><a href="${l.slug === page.slug ? '#' : '../' + l.slug + '/'}"${l.slug === page.slug ? ' aria-current="page"' : ''}>${l.nav}</a></li>`
    ).join('\n                    ');

    const html = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <title>${page.title}</title>
    <meta name="description" content="${page.description}">
    <meta name="author" content="MAK RESIDENCY">
    <meta name="theme-color" content="#0f1f36">
    <link rel="canonical" href="${url}">

    <meta property="og:type" content="article">
    <meta property="og:site_name" content="MAK RESIDENCY">
    <meta property="og:locale" content="en_GB">
    <meta property="og:title" content="${page.title}">
    <meta property="og:description" content="${page.description}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${SITE}/assets/og-image.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="MAK RESIDENCY - global immigration and residency consultants">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${page.title}">
    <meta name="twitter:description" content="${page.description}">
    <meta name="twitter:image" content="${SITE}/assets/og-image.png">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap">
    <link rel="stylesheet" href="${P}styles.css">
    <link rel="icon" type="image/svg+xml" href="${P}favicon.svg">
    <link rel="apple-touch-icon" href="${P}assets/apple-touch-icon.png">
    <link rel="me" href="https://www.instagram.com/makresidency12/">

    ${jsonLdBlock([
        {
            '@type': 'WebPage',
            '@id': `${SITE}/${page.slug}/#webpage`,
            url: `${SITE}/${page.slug}/`,
            name: page.title,
            description: page.description,
            isPartOf: { '@id': SITE_ID },
            about: { '@id': ORG_ID },
            dateModified: '2026-09-12',
            inLanguage: 'en'
        },
        breadcrumbLd(trail)
    ])}

    <script>document.documentElement.className += ' js';</script>
</head>
<body>
${header(P)}
${breadcrumbBlock(trail)}

<main id="main">
    <section class="page-hero page-hero--compact">
        <div class="container">
            <p class="eyebrow"><span class="eyebrow-rule" aria-hidden="true"></span>Policies</p>
            <h1 class="page-title">${page.h1}</h1>
            <p class="page-lede">${page.lede}</p>
            <div class="page-meta">
                <span>${page.updated}</span>
            </div>
        </div>
    </section>

    <div class="container legal-layout">
        <article class="prose">
${body}

<h2 id="more-policies">Other policies</h2>
<ul class="sources">
                    ${nav}
</ul>
        </article>
        <aside class="toc" aria-label="Policies">
            <h2>Policies</h2>
            <ol>
                ${LEGAL.map((l) => `<li><a href="../${l.slug}/">${l.nav}</a></li>`).join('\n                ')}
            </ol>
        </aside>
    </div>
</main>

${footer(P)}
</body>
</html>
`;

    const dir = join(OUT, page.slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html, 'utf8');
    written.push({ url: `/${page.slug}/`, bytes: Buffer.byteLength(html), words: countWords(html) });
}

const countWords = (html) =>
    html
        .replace(/<script[\s\S]*?<\/script>/g, ' ')
        .replace(/<style[\s\S]*?<\/style>/g, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&[a-z]+;/g, ' ')
        .split(/\s+/)
        .filter(Boolean).length;

/* ------------------------------------------------------ program pages */

const relatedMeta = PROGRAMS.map((p) => ({ slug: p.slug, short: p.short, blurb: p.blurb }));

for (const prog of PROGRAMS) {
    const trail = [
        { label: 'Home', href: `${P}index.html` },
        { label: prog.h1, href: '' }
    ];

    const res = writePage({
        slug: prog.slug,
        title: prog.seoTitle,
        description: prog.description,
        eyebrow: prog.eyebrow,
        h1: prog.h1,
        lede: prog.lede,
        meta: prog.meta,
        facts: prog.facts,
        toc: prog.toc,
        main: prog.main,
        related: relatedMeta,
        jsonLd: [
            {
                '@type': 'WebPage',
                '@id': `${SITE}/${prog.slug}/#webpage`,
                url: `${SITE}/${prog.slug}/`,
                name: prog.h1,
                description: prog.description,
                isPartOf: { '@id': SITE_ID },
                about: { '@id': ORG_ID },
                datePublished: '2026-09-12',
                dateModified: '2026-09-12',
                inLanguage: 'en'
            },
            serviceLd(prog.h1, prog.description, prog.slug),
            breadcrumbLd(trail)
        ]
    });

    written.push({ url: `/${prog.slug}/`, bytes: res.bytes, words: countWords(res.html) });
}

/* ------------------------------------------------------------ legal */

for (const page of LEGAL) writeLegalPage(page);

/* ------------------------------------------------- robots and sitemap */

const allPages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    ...PROGRAMS.map((p) => ({ loc: `/${p.slug}/`, priority: '0.9', changefreq: 'monthly' })),
    ...LEGAL.map((l) => ({ loc: `/${l.slug}/`, priority: '0.3', changefreq: 'yearly' }))
];

const robots = `# ${SITE}
User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;
writeFileSync(join(OUT, 'robots.txt'), robots, 'utf8');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
    .map(
        (p) => `  <url>
    <loc>${SITE}${p.loc}</loc>
    <lastmod>${REVIEWED}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join('\n')}
</urlset>
`;
writeFileSync(join(OUT, 'sitemap.xml'), sitemap, 'utf8');

/* ------------------------------------------------------------ report */

console.log(`MAK RESIDENCY - build complete (${REVIEWED})\n`);
for (const w of written.sort((a, b) => b.bytes - a.bytes)) {
    console.log(`  ${w.url.padEnd(26)} ${String(Math.round(w.bytes / 1024)).padStart(4)} KB`);
}
console.log(`\n  robots.txt                  ${new Blob([robots]).size} B`);
console.log(`  sitemap.xml                  ${allPages.length} URLs`);
console.log(`\n  ${PROGRAMS.length} programme guides, ${LEGAL.length} policy pages.`);
