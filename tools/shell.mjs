/* ==========================================================================
   MAK RESIDENCY - static page generator
   --------------------------------------------------------------------------
   Single source of truth for the shared shell (head, header, dock, footer)
   and for every detail page. Edit the data here and re-run:

       node tools/build-pages.mjs

   Outputs one folder per page so each gets a clean URL:
       /uk-global-talent/   ->  uk-global-talent/index.html

   House rules for this file:
     - ASCII only. Use HTML entities for any accented character or dash.
     - Government fees are quoted in the currency the authority charges,
       with an approximate Gulf conversion beside it. Never silently drop
       the source currency.
     - Immigration content is GENERAL INFORMATION only. MAK RESIDENCY is
       not IAA/OISC regulated, so no page may offer a case outcome promise
       or a licensing claim.
   ========================================================================== */

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.cwd();
const SITE = 'https://makresidency.com';
const REVIEWED = '12 September 2026';

/* Approximate FX for orientation only. Pegged/managed rates, rounded.
   Government fees are payable in the source currency shown. */
const FX = {
    GBP: { AED: 4.95, SAR: 5.05, BHD: 3.59 },
    USD: { AED: 3.67, SAR: 3.75, BHD: 2.66 },
    EUR: { AED: 4.2, SAR: 4.3, BHD: 3.05 }
};

const gbp = (n) => `${n.toLocaleString('en-GB')} GBP`;
const usd = (n) => `$${n.toLocaleString('en-US')}`;
const eur = (n) => `${n.toLocaleString('en-GB')} EUR`;

const fxCell = (amount, ccy) =>
    `approx. AED ${Math.round(amount * FX[ccy].AED).toLocaleString('en-US')}` +
    ` / SAR ${Math.round(amount * FX[ccy].SAR).toLocaleString('en-US')}` +
    ` / BHD ${Math.round(amount * FX[ccy].BHD).toLocaleString('en-US')}`;

/* ------------------------------------------------------------------ shell */

const NAV = [
    ['Business Migration', 'business-migration'],
    ['Skilled Immigration', 'skilled-immigration'],
    ['Other Programs', 'other-programs'],
    ['Countries', 'countries'],
    ['Why Us', 'why-us']
];

const BRAND_MARK = `<span class="brand-mark" aria-hidden="true">
                        <svg viewBox="0 0 40 40" focusable="false">
                            <circle cx="20" cy="20" r="18.2" fill="none" stroke="currentColor" stroke-width="1.1" opacity=".55"/>
                            <ellipse cx="20" cy="20" rx="7.7" ry="18.2" fill="none" stroke="currentColor" stroke-width="1.1"/>
                            <ellipse cx="20" cy="20" rx="14.4" ry="18.2" fill="none" stroke="currentColor" stroke-width="1.1" opacity=".8"/>
                            <path d="M1.8 20h36.4" stroke="currentColor" stroke-width="1.1"/>
                            <path d="M5.2 10.6a18.2 18.2 0 0 1 29.6 0" fill="none" stroke="currentColor" stroke-width="1.1" opacity=".8"/>
                            <path d="M5.2 29.4a18.2 18.2 0 0 0 29.6 0" fill="none" stroke="currentColor" stroke-width="1.1" opacity=".8"/>
                            <path d="M20 1.8A18.2 18.2 0 0 1 20 38.2" fill="none" stroke="currentColor" stroke-width="2.4" opacity=".95"/>
                        </svg>
                    </span>`;

const BRAND_TEXT = `<span class="brand-text">
                        <span class="brand-name">MAK RESIDENCY</span>
                        <span class="brand-sub">Global Immigration &amp; Residency Consultants</span>
                    </span>`;

const ICON = {
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4A4 4 0 1 1 12.6 8a4 4 0 0 1 3.4 3.4z"/><path d="M17.5 6.5h.01"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="2.6"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'
};

const svg = (path, cls = 'icon') =>
    `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${path}</svg>`;

function header(p) {
    const href = (id) => (p ? `${p}index.html#${id}` : `#${id}`);
    return `<a class="skip-link" href="#main">Skip to content</a>

<header class="site-header" id="siteHeader">
    <div class="utility-bar">
        <div class="container utility-inner">
            <div class="utility-group">
                <a class="utility-link" href="tel:+923268653443">${svg(ICON.phone)}<span>+92 326 8653443</span></a>
                <a class="utility-link" href="mailto:contact@makresidency.com">${svg(ICON.mail)}<span>contact@makresidency.com</span></a>
            </div>
            <div class="utility-group utility-group--end">
                <span class="utility-note">Office: Peniche, Portugal</span>
                <a class="utility-link" href="https://www.instagram.com/makresidency12/" target="_blank" rel="noopener noreferrer me">${svg(ICON.instagram)}<span>Instagram</span></a>
            </div>
        </div>
    </div>

    <div class="nav-bar">
        <div class="container nav-inner">
            <a class="brand" href="${p ? `${p}index.html` : '#top'}" aria-label="MAK RESIDENCY home">
                ${BRAND_MARK}
                ${BRAND_TEXT}
            </a>

            <nav class="primary-nav" id="primaryNav" aria-label="Primary">
                <ul class="nav-list">
                    ${NAV.map(([label, id]) => `<li><a href="${href(id)}">${label}</a></li>`).join('\n                    ')}
                    <li><a href="${href('contact')}" class="nav-cta">Contact</a></li>
                </ul>
            </nav>

            <button class="nav-toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="primaryNav">
                <span class="nav-toggle-box" aria-hidden="true"><i></i><i></i></span>
                <span class="nav-toggle-text">Menu</span>
            </button>
        </div>
    </div>
</header>`;
}

function footer(p) {
    const href = (id) => (p ? `${p}index.html#${id}` : `#${id}`);
    const pages = [
        ['UK Global Talent Visa', 'uk-global-talent'],
        ['UK Innovator Founder Visa', 'uk-innovator-founder'],
        ['UK Expansion Worker Visa', 'uk-expansion-worker'],
        ['EB-2 NIW', 'eb-2-niw'],
        ['Portugal D7 Visa', 'portugal-d7-visa']
    ];
    return `<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <a class="brand brand--footer" href="${p ? `${p}index.html` : '#top'}" aria-label="MAK RESIDENCY home">
                    ${BRAND_MARK}
                    ${BRAND_TEXT}
                </a>
                <p class="footer-blurb">Your trusted partner in global immigration. Making international mobility accessible, transparent, and successful.</p>
                <ul class="footer-social">
                    <li>
                        <a href="https://www.instagram.com/makresidency12/" target="_blank" rel="noopener noreferrer me" aria-label="Instagram">${svg(ICON.instagram)}</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/share/1LLcSivwy2/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">${svg(ICON.facebook)}</a>
                    </li>
                </ul>
            </div>

            <nav class="footer-col" aria-label="Detailed guides">
                <h2 class="footer-heading">Guides</h2>
                <ul>
                    ${pages.map(([label, slug]) => `<li><a href="${p ? p + slug + '/' : slug + '/'}">${label}</a></li>`).join('\n                    ')}
                </ul>
            </nav>

            <nav class="footer-col" aria-label="Firm">
                <h2 class="footer-heading">Firm</h2>
                <ul>
                    <li><a href="${href('why-us')}">About us</a></li>
                    <li><a href="${href('journey')}">How we work</a></li>
                    <li><a href="${href('countries')}">Countries we cover</a></li>
                    <li><a href="${href('faq')}">Common questions</a></li>
                    <li><a href="${p ? p + 'privacy/' : 'privacy/'}">Privacy</a></li>
                    <li><a href="${p ? p + 'terms/' : 'terms/'}">Terms</a></li>
                    <li><a href="${p ? p + 'disclaimer/' : 'disclaimer/'}">Disclaimer</a></li>
                </ul>
            </nav>

            <div class="footer-col">
                <h2 class="footer-heading">Office</h2>
                <address class="footer-address">
                    Rua Ant&oacute;nio Concei&ccedil;&atilde;o Bento 6D, 3D<br>
                    Peniche, Portugal
                </address>
                <ul class="footer-contact">
                    <li><a href="tel:+923268653443">+92 326 8653443</a></li>
                    <li><a href="mailto:contact@makresidency.com">contact@makresidency.com</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p class="copyright">&copy; 2026 MAK RESIDENCY. All rights reserved.</p>
                <p class="footer-credit">Crafted with <span aria-hidden="true">&#10084;</span> by <strong>Adeel Khan</strong> &middot; <a href="tel:+923038466827">+92 303 846 6827</a></p>
        </div>

        <p class="footer-legal">MAK RESIDENCY publishes general information about immigration and residency routes, not individual legal advice. We are not regulated by the UK Immigration Advice Authority, and no immigration outcome is guaranteed. Fees and requirements change, so check the official source before you act. Read our <a href="${p ? p : ''}disclaimer/">disclaimer</a> and <a href="${p ? p : ''}terms/">terms</a>.</p>
    </div>
</footer>

<!-- ========================= Floating actions ========================= -->
<a class="whatsapp-float" href="https://wa.me/923268653443" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6l.5-.5c.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.5-.4zM12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 0 1 7 3.9z"/></svg>
</a>

<div class="dock" id="dock">
    <div class="dock-panel" id="dockPanel">
        <div class="container dock-panel-inner">
            <p class="dock-panel-label">Our office</p>
            <address class="dock-panel-address">Rua Ant&oacute;nio Concei&ccedil;&atilde;o Bento 6D, 3D, Peniche, Portugal</address>
            <a class="dock-panel-map" href="https://maps.google.com/?q=Rua+Ant%C3%B3nio+Concei%C3%A7%C3%A3o+Bento+6D+Peniche+Portugal" target="_blank" rel="noopener noreferrer">View on map</a>
        </div>
    </div>
    <div class="dock-bar">
        <div class="container dock-inner">
            <span class="dock-office">${svg(ICON.pin)}<span>Rua Ant&oacute;nio Concei&ccedil;&atilde;o Bento 6D, 3D, Peniche, Portugal</span></span>
            <span class="dock-actions">
                <a class="dock-link" href="tel:+923268653443">${svg(ICON.phone)}<span>Call</span></a>
                <a class="dock-link" href="mailto:contact@makresidency.com">${svg(ICON.mail)}<span>Email</span></a>
                <button class="dock-toggle" id="dockToggle" type="button" aria-expanded="false" aria-controls="dockPanel">${svg(ICON.pin)}<span>Office</span></button>
            </span>
        </div>
    </div>
</div>

<script src="${p ? p : ''}script.js"${p ? '' : ''}></script>`;
}

/* ------------------------------------------------------------- fragments */

const breadcrumbBlock = (trail) => `<nav class="breadcrumbs" aria-label="Breadcrumb">
    <div class="container breadcrumbs-inner">
        <ol>
            ${trail.map((t, i) =>
                i === trail.length - 1
                    ? `<li><span aria-current="page">${t.label}</span></li>`
                    : `<li><a href="${t.href}">${t.label}</a></li>`
            ).join('\n            ')}
        </ol>
    </div>
</nav>`;

const keyFacts = (items) => `<ul class="keyfacts">
${items.map(([label, value, note]) => `    <li>
        <span class="kf-label">${label}</span>
        <span class="kf-value">${value}</span>
        ${note ? `<span class="kf-note">${note}</span>` : ''}
    </li>`).join('\n')}
</ul>`;

const table = (caption, head, rows) => `<div class="table-scroll">
    <table class="datatable">
        ${caption ? `<caption>${caption}</caption>` : ''}
        <thead>
            <tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
${rows.map((r) => `            <tr>
${r.map((c, i) => `                ${i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`}`).join('\n')}
            </tr>`).join('\n')}
        </tbody>
    </table>
</div>`;

const checklist = (items) => `<ul class="checklist">
${items.map((i) => `    <li>
        <span class="tick" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        <span>${i}</span>
    </li>`).join('\n')}
</ul>`;

const steps = (items) => `<ol class="steps">
${items.map(([h, p]) => `    <li>
        <h3>${h}</h3>
        <p>${p}</p>
    </li>`).join('\n')}
</ol>`;

const ctaBand = (heading, body) => `<section class="section">
    <div class="container">
        <div class="cta-band">
            <div>
                <h2>${heading}</h2>
                <p>${body}</p>
            </div>
            <div class="cta-band-actions">
                <a class="btn btn-primary" href="../index.html#contact">Request a consultation</a>
                <a class="btn btn-ghost" href="https://wa.me/923268653443" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
            </div>
        </div>
    </div>
</section>`;

const tocBlock = (items) => `<aside class="toc" aria-label="On this page">
    <h2>On this page</h2>
    <ol>
${items.map((i) => `        <li><a href="#${i.id}">${i.label}</a></li>`).join('\n')}
    </ol>
    <div class="toc-rule"></div>
    <a class="btn btn-primary toc-cta" href="../index.html#contact">Talk to us</a>
</aside>`;

const relatedBlock = (pages, current) => `<section class="related">
    <div class="container">
        <h2>More guides</h2>
        <ul class="related-grid">
${pages.filter((x) => x.slug !== current).map((x) => `            <li><a href="../${x.slug}/">${x.short}<span>${x.blurb}</span></a></li>`).join('\n')}
        </ul>
    </div>
</section>`;

const sourcesBlock = (list) => `<h2 id="sources">Official sources</h2>
<p>Every figure on this page comes from the authority that sets it. Check the source before you pay, because fees and thresholds change.</p>
<ul class="sources">
${list.map((s) => `    <li>${s}</li>`).join('\n')}
</ul>`;

/* FAQ accordion reuses the homepage markup + behaviour in script.js */
const faqBlock = (items) => `<h2 id="questions">Common questions</h2>
<div class="accordion" data-accordion>
${items.map(([q, a], i) => `    <div class="accordion-item accordion-item--plain">
        <h3 class="accordion-heading">
            <button class="accordion-trigger" type="button" aria-expanded="${i === 0 ? 'true' : 'false'}"${i === 0 ? '' : ''}>
                <span>${q}</span>
                <span class="accordion-icon" aria-hidden="true"></span>
            </button>
        </h3>
        <div class="accordion-panel"${i === 0 ? '' : ' hidden'}>
            <p>${a}</p>
        </div>
    </div>`).join('\n')}
</div>`;

/* ------------------------------------------------------------- json-ld */

const ORG_ID = `${SITE}/#organisation`;
const SITE_ID = `${SITE}/#website`;

const ORG = {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: 'MAK RESIDENCY',
    alternateName: 'MAK Residency Global Immigration and Residency Consultants',
    url: `${SITE}/`,
    description:
        'Immigration and residency consultancy with 15 years of experience advising business owners, skilled professionals, founders and investors on UK, US and Portuguese immigration routes.',
    slogan: 'Global Immigration & Residency Consultants',
    foundingDate: '2011',
    logo: { '@type': 'ImageObject', url: `${SITE}/favicon.svg` },
    image: { '@type': 'ImageObject', url: `${SITE}/assets/og-image.png`, width: 1200, height: 630 },
    telephone: '+92-326-8653443',
    email: 'contact@makresidency.com',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Antonio Conceicao Bento 6D, 3D',
        addressLocality: 'Peniche',
        addressRegion: 'Leiria',
        postalCode: '2560-392',
        addressCountry: 'PT'
    },
    areaServed: [
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'Bahrain' },
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Kuwait' },
        { '@type': 'Country', name: 'Oman' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Portugal' },
        { '@type': 'AdministrativeArea', name: 'Europe' },
        { '@type': 'AdministrativeArea', name: 'Middle East' },
        { '@type': 'AdministrativeArea', name: 'Americas' }
    ],
    knowsLanguage: ['en', 'ur', 'pa', 'hi', 'ar'],
    sameAs: ['https://www.instagram.com/makresidency12/'],
    contactPoint: [
        {
            '@type': 'ContactPoint',
            contactType: 'Enquiries',
            telephone: '+92-326-8653443',
            email: 'contact@makresidency.com',
            availableLanguage: ['en', 'ur', 'pa', 'hi', 'ar'],
            areaServed: ['AE', 'SA', 'BH', 'QA', 'KW', 'OM']
        }
    ]
};

const WEBSITE = {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: `${SITE}/`,
    name: 'MAK RESIDENCY',
    inLanguage: 'en',
    publisher: { '@id': ORG_ID }
};

const jsonLdBlock = (extra) =>
    `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': [ORG, WEBSITE, ...extra] }, null, 2)}</script>`;

const serviceLd = (name, description, slug) => ({
    '@type': 'Service',
    '@id': `${SITE}/${slug}/#service`,
    name,
    description,
    serviceType: name,
    url: `${SITE}/${slug}/`,
    provider: { '@id': ORG_ID },
    areaServed: [
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'Bahrain' }
    ]
});

const breadcrumbLd = (trail) => ({
    '@type': 'BreadcrumbList',
    '@id': `${SITE}/#breadcrumb`,
    itemListElement: trail.map((t, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: t.label,
        ...(t.href && !t.href.startsWith('#') ? { item: `${SITE}${t.href}` } : {})
    }))
});

/* ------------------------------------------------------------- page write */

function writePage({ slug, title, description, eyebrow, h1, lede, meta, facts, toc, main, jsonLd, related }) {
    const p = '../';
    const url = `${SITE}/${slug}/`;
    /* Breadcrumb is 2 levels: Home > this page. The eyebrow is decorative
       context, not a link level, so the visible trail and the BreadcrumbList
       markup stay identical - which is what the rich result requires. */
    const trail = [
        { label: 'Home', href: `${p}index.html` },
        { label: h1, href: '' }
    ];

    const html = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="author" content="MAK RESIDENCY">
    <meta name="theme-color" content="#0f1f36">
    <link rel="canonical" href="${url}">

    <meta property="og:type" content="article">
    <meta property="og:site_name" content="MAK RESIDENCY">
    <meta property="og:locale" content="en_GB">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${SITE}/assets/og-image.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="MAK RESIDENCY - global immigration and residency consultants">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${SITE}/assets/og-image.png">
    <meta name="twitter:image:alt" content="MAK RESIDENCY - global immigration and residency consultants">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap">
    <link rel="stylesheet" href="${p}styles.css">
    <link rel="icon" type="image/svg+xml" href="${p}favicon.svg">
    <link rel="apple-touch-icon" href="${p}assets/apple-touch-icon.png">
    <link rel="me" href="https://www.instagram.com/makresidency12/">

    ${jsonLdBlock(jsonLd)}

    <noscript><style>.accordion-panel[hidden]{display:block!important}.accordion-icon{display:none}</style></noscript>
    <script>document.documentElement.className += ' js';</script>
</head>
<body>
${header(p)}
${breadcrumbBlock(trail)}

<main id="main">
    <section class="page-hero">
        <div class="container">
            <p class="eyebrow"><span class="eyebrow-rule" aria-hidden="true"></span>${eyebrow}</p>
            <h1 class="page-title">${h1}</h1>
            <p class="page-lede">${lede}</p>
            <div class="page-meta">
${meta.map((m, i) => `                <span>${m}</span>${i < meta.length - 1 ? '\n                <span class="dot" aria-hidden="true">/</span>' : ''}`).join('')}
            </div>
            <div class="page-hero-actions">
                <a class="btn btn-primary" href="${p}index.html#contact">Speak to an adviser</a>
                <a class="btn btn-ghost" href="https://wa.me/923268653443" target="_blank" rel="noopener noreferrer">WhatsApp +92 326 8653443</a>
            </div>
        </div>
    </section>

    <div class="container">
        ${facts ? keyFacts(facts) : ''}
    </div>

    <div class="container detail-layout">
        <article class="prose">
${main}
        </article>
        ${toc ? tocBlock(toc) : ''}
    </div>

    ${ctaBand('Not sure this is your route?', 'Fifteen years of casework across the UK, US and Portugal. Tell us where you are now and where you want to be, and we will tell you honestly whether this visa is worth the paperwork.')}
    ${relatedBlock(related, slug)}
</main>

${footer(p)}
</body>
</html>
`;

    const dir = join(OUT, slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html, 'utf8');
    return { slug, html, bytes: Buffer.byteLength(html) };
}

/* ------------------------------------------------------------- exports */

export {
    writePage, header, footer, breadcrumbBlock, keyFacts, table, checklist,
    steps, ctaBand, tocBlock, relatedBlock, sourcesBlock, faqBlock,
    jsonLdBlock, serviceLd, breadcrumbLd, ORG, ORG_ID, WEBSITE, SITE_ID,
    FX, fxCell, REVIEWED, SITE
};