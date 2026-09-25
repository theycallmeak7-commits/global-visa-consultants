/* ==========================================================================
   MAK RESIDENCY - programme guide content
   --------------------------------------------------------------------------
   Every fee is quoted in the currency the authority charges, with an
   approximate AED / SAR / BHD conversion beside it for the Gulf audience.
   Converted amounts are rounded and move with the exchange rate: the source
   currency is the only figure that binds.

   All five routes are GENERAL INFORMATION. No page may promise an outcome.
   ========================================================================== */

import { table, checklist, steps, faqBlock, sourcesBlock, fxCell, REVIEWED } from './shell.mjs';

/* currency helpers - ASCII source, HTML entities in the output */
const P = (n) => `&pound;${n.toLocaleString('en-GB')}`;
const E = (n) => `&euro;${n.toLocaleString('en-GB')}`;
const U = (n) => `$${n.toLocaleString('en-US')}`;

const GULF_DOCS = `Every document issued outside the UK must be in English or Welsh, or come with a certified translation. The UAE, Saudi Arabia and Bahrain are all members of the Hague Apostille Convention, so a document is normally apostilled in-country: notarised first, then stamped by the competent authority for that emirate or province. The competent authority is not the same body in every emirate, so confirm yours before you pay a notary. You do not need full embassy legalisation on top of an apostille.`;

const meta = (mins) => [`Last reviewed ${REVIEWED}`, 'General information, not case advice', `${mins} min read`];

export const PROGRAMS = [
    /* ================================================================ */
    /* 1. UK GLOBAL TALENT                                            */
    /* ================================================================ */
    {
        slug: 'uk-global-talent',
        short: 'UK Global Talent',
        blurb: 'Move to the UK on your own credentials, with no sponsor and no job offer.',
        eyebrow: 'United Kingdom <span class="eyebrow-dot" aria-hidden="true">/</span> Digital, academic &amp; creative routes',
        h1: 'UK Global Talent visa',
        lede: 'A points-free route to the UK for people whose work is already recognised internationally. No sponsor, no job offer, and no employer to sponsor you &mdash; but a formal endorsement from a specialist body is required before you can apply.',
        seoTitle: 'UK Global Talent visa: fees &amp; requirements | MAK RESIDENCY',
        description:
            'UK Global Talent visa: who qualifies, 2026 fees with Gulf conversions, the endorsement process, and how to apply from the UAE, Saudi Arabia or Bahrain.',
        meta: meta(9),
        facts: [
            ['Route type', 'Visa, up to 5 years', 'then extension to settlement'],
            ['Sponsor needed', 'No', 'that is the point of this route'],
            ['Extra step', 'Endorsement', 'from a Home Office approved body'],
            ['Settlement', 'After 5 years', 'continuous residence, good conduct']
        ],
        toc: [
            { id: 'what', label: 'What this visa is' },
            { id: 'who', label: 'Who can qualify' },
            { id: 'costs', label: 'What it costs' },
            { id: 'process', label: 'How it works' },
            { id: 'documents', label: 'Documents' },
            { id: 'gulf', label: 'Applying from the Gulf' },
            { id: 'questions', label: 'Common questions' },
            { id: 'sources', label: 'Official sources' }
        ],
        main: `<h2 id="what">What the UK Global Talent visa is</h2>
<p>The Global Talent visa is a <strong>sponsor-free</strong> UK entry route for people who have already proved, on paper, that they are at the top of their field. It is not a points system. There is no cap, no Expression of Interest pool, and no job advert you have to match first. Instead, an independent endorsing body reviews your evidence and either endorses you or does not.</p>
<p>That design is why it suits independent people: software engineers and data specialists, researchers and academics, and artists, musicians and writers. If your CV shows that other people, outside your family, already pay you for what you do, this is often the cleanest UK route available to you.</p>

<h2 id="who">Who can qualify</h2>
<p>There are four endorsing streams. You apply to whichever one matches your work, and only to that one.</p>

<h3>Digital technology</h3>
<p>For technical roles such as software engineering, data science, AI, cybersecurity and network engineering. You generally need to show that you are actively engaged in the field, and evidence of engagement: published work, open-source contributions, technical talks, or a track record of commercial or professional technical work. Pure management roles do not qualify; the work has to be hands-on technical.</p>

<h3>Academia and research</h3>
<p>For researchers, academics, scientists and research fellows. The evidence here is stronger and more formal than in most other streams: a published body of work, a defined contribution to your field, references, and often an institutional affiliation or research history that reviewers can verify.</p>

<h3>Arts and creative industries</h3>
<p>For musicians, actors, artists, writers, producers, directors and performers. You need evidence of recognition, performance history, media coverage, and recommendation. Some bodies are selective and look for evidence that you are actively earning from your craft rather than only hoping to.</p>

<h3>Your engagement has to be current</h3>
<p>A common reason for a refused endorsement is evidence that is impressive but out of date. The bodies look for activity in the last few years, not a portfolio from a decade ago. If your most recent evidence is thin, build it deliberately before you apply, rather than paying an endorsement fee for a rejection.</p>

<h2 id="costs">What it costs</h2>
${table(
    'UK Global Talent visa: 2026 fee schedule',
    ['Stage', 'Fee payable to the UK government', 'Approximate Gulf equivalent'],
    [
        ['Endorsement application (Stage 1)', P(561), fxCell(561, 'GBP')],
        ['Visa application (Stage 2)', P(205), fxCell(205, 'GBP')],
        ['<strong>Home Office total</strong>', `<strong>${P(766)}</strong>`, fxCell(766, 'GBP')],
        ['Immigration Health Surcharge, per adult, per year', P(1035), fxCell(1035, 'GBP')],
        ['<strong>Single adult, full 5 years, all of the above</strong>', `<strong>${P(5941)}</strong>`, fxCell(5941, 'GBP')]
    ]
)}
<p>Add the Immigration Health Surcharge for every adult on the application, for the full length of the visa. It is a real cost and it is the line most applicants forget. It is also normally <strong>not refundable</strong> if the visa is refused.</p>
<p>The Gulf column is a planning conversion only, because you pay the UK in pounds. Your bank will apply its own rate, and the rate moves. Use the pound figure as the true cost.</p>

<h2 id="process">How the process works</h2>
${steps([
    ['Choose your endorsing body', 'Pick the single stream that fits your evidence. Applying to the wrong body is the most common reason for a wasted fee. Read the published evidence criteria and test your own record against them.'],
    ['Apply for endorsement', 'You apply to the endorsing body directly. Some charge their own fee on top of the Home Office endorsement fee. They assess the evidence and may ask for interviews, references or further material.'],
    ['Receive the endorsement certificate', 'If you are successful, the body issues a certificate confirming your endorsement. This is what unlocks Stage 2. Without it the visa application cannot proceed.'],
    ['Apply for the visa', 'Using the endorsement certificate, apply through the UK immigration system. You pay the visa fee, complete biometrics, and submit your documents.'],
    ['Decision and move', 'The Home Office assesses the application. If granted, the visa is issued for up to five years, after which you apply to extend and then to settle.']
])}

<h2 id="documents">Documents to have ready</h2>
<p>Assemble these before you start, because the endorsement body and the Home Office will both want the underlying evidence, not just summaries.</p>
${checklist([
    'Passport valid well beyond the intended visa period',
    'Certified evidence of your recent activity in your field: published work, project records, contracts, invoices, press coverage, or performance history',
    'Statement of your contributions, written so a non-specialist reviewer can follow it',
    'References, letters of recommendation, and institutional confirmations where relevant to your stream',
    'Evidence of earnings and professional engagement, so you can show your work is not aspirational',
    'English translations of anything not already in English or Welsh',
    'Evidence of any dependants who will travel with you, and their relationship to you',
    'Proof of funds, and a card ready to pay the Immigration Health Surcharge'
])}

<h2 id="gulf">Applying from the UAE, Saudi Arabia or Bahrain</h2>
<p>This route works well from the Gulf, and the mechanics are specific enough to be worth setting out.</p>
<h3>You can apply without coming to the UK</h3>
<p>Non-UK nationals can apply for this visa from anywhere in the world, including from the Gulf. You do not need to be in the UK, and you do not need a UK address, at any stage of the application. This is a genuine advantage of the route over some UK alternatives.</p>
<h3>Apostille your documents once, not twice</h3>
<p>${GULF_DOCS}</p>
<h3>Where you apply from decides which office handles you</h3>
<p>The UK operates Visa Application Centres in Gulf cities, and your appointment will be at the centre that covers where you live. Centres and their coverage change, so confirm the correct location for your city at the point of booking rather than assuming a centre near you will take your application.</p>
<h3>Budget the surcharge once, properly</h3>
<p>Most Gulf-based applicants underestimate the Immigration Health Surcharge, because it is separate from the endorsement and visa fees. For a family applying for the full five years it becomes the single largest line in the budget. Model the full family total before you commit to the endorsement fee.</p>

${faqBlock([
    ['Do I need a job offer to get a Global Talent visa?', 'No. A job offer is not required and there is no sponsor requirement. That is what distinguishes this route from a Skilled Worker visa. What is required is evidence that you are already recognised in your field, evidenced through an endorsing body.'],
    ['Is the Global Talent visa a points-based route?', 'No. It is not a points system and there is no cap on the number of people entering under it. Endorsement is a judgement about the strength and recency of your evidence, not a score you can build up over time.'],
    ['Can I include my family?', 'Yes. Dependants can be included on the application and are granted the same length of visa. Each adult dependant pays their own Immigration Health Surcharge, which is why the total rises quickly for families.'],
    ['How long is the visa granted for?', 'Up to five years at a time. After five years of continuous residence you can apply to extend, and once you have the required continuous period and good conduct you can apply for settlement.'],
    ['What happens if my endorsement is refused?', 'You can address the refusal reasons and apply to a different endorsing body where the evidence genuinely fits that stream. Refusal is not a lifetime bar, but the Home Office fee is not refundable, so it pays to be well prepared before you first apply.'],
    ['How much does the Global Talent visa cost in total?', `The Home Office fees alone are ${P(766)} for the endorsement and the visa, plus the Immigration Health Surcharge of ${P(1035)} per adult per year. A single adult applying for the full five years should budget ${P(5941)} before any endorsement body fees, translation, apostille or dependant costs.`]
])}

${sourcesBlock([
    'UK Government, <a href="https://www.gov.uk/global-talent-visa" target="_blank" rel="noopener noreferrer">Global Talent visa: eligibility and how to apply</a> &mdash; the primary authority for this route',
    'UK Government, <a href="https://www.gov.uk/fees" target="_blank" rel="noopener noreferrer">Visa fees</a> &mdash; the published fee table. Always check the current figures before paying',
    'UK Government, <a href="https://www.gov.uk/immigration-health-surcharge" target="_blank" rel="noopener noreferrer">Immigration Health Surcharge</a> &mdash; current rate, exemptions and refund position',
    'UK Government, <a href="https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers" target="_blank" rel="noopener noreferrer">licensed sponsors and endorsement bodies</a> &mdash; confirm an endorsing body is currently approved'
])}`
    },

    /* ================================================================ */
    /* 2. UK INNOVATOR FOUNDER                                         */
    /* ================================================================ */
    {
        slug: 'uk-innovator-founder',
        short: 'UK Innovator Founder',
        blurb: 'Build a genuine business in Britain, with a fast decision and an early settlement window.',
        eyebrow: 'United Kingdom <span class="eyebrow-dot" aria-hidden="true">/</span> Founder &amp; business builder route',
        h1: 'UK Innovator Founder visa',
        lede: 'For founders and business builders with a track record, working on a business idea that is different enough to be worth endorsing. One of the few UK routes where you can be granted settlement in three years instead of five, provided the business is judged active and viable at the end of it.',
        seoTitle: 'UK Innovator Founder visa: fees &amp; requirements | MAK RESIDENCY',
        description:
            'UK Innovator Founder visa: endorsement criteria, 2026 fees with Gulf conversions, business plan requirements, and how founders based in the Gulf apply.',
        meta: meta(9),
        facts: [
            ['Route type', 'Visa for 3 years', 'then extension or settlement'],
            ['Endorsement', 'Required', 'by an approved endorsing body'],
            ['Key test', 'An active, viable business', 'assessed at the end of Year 3'],
            ['Settlement', 'Possible at 3 years', 'subject to final review']
        ],
        toc: [
            { id: 'what', label: 'What this visa is' },
            { id: 'who', label: 'Who can qualify' },
            { id: 'costs', label: 'What it costs' },
            { id: 'process', label: 'How it works' },
            { id: 'documents', label: 'Documents' },
            { id: 'gulf', label: 'Applying from the Gulf' },
            { id: 'questions', label: 'Common questions' },
            { id: 'sources', label: 'Official sources' }
        ],
        main: `<h2 id="what">What the Innovator Founder visa is</h2>
<p>The Innovator Founder visa is a route to settlement in three years for people who have founded or worked with a business idea that is sufficiently innovative, and who have been active in building it. It is unusually generous on timing: most UK routes make you wait five years for settlement, this one can make it three, but only if the business you presented turns out to be real when they look at it again.</p>
<p>That final review is the point to understand before you apply. Endorsement is judged on potential. Settlement is judged on what actually happened. A strong business plan that never turns into trading activity does not carry through to settlement, and a surprising number of people treat the Year 3 point as automatic.</p>

<h2 id="who">Who can qualify</h2>
<p>The core requirement is a track record in business, or in a relevant sector, plus a business idea you intend to develop in the UK. Endorsing bodies assess roughly four things:</p>
<h3>Have you done this before?</h3>
<p>Evidence of previous business activity, professional or academic work in a relevant field, or an established track record of innovation. First-time founders with only an idea are not the strongest candidates for this route; the business must be a continuation of something you have been doing, not a fresh start.</p>
<h3>Is the idea genuinely innovative?</h3>
<p>You need a working description of the business idea, and an explanation of how it differs from what already exists in the market. A business plan that could be handed to a competitor and copied without difficulty will not pass. Endorsing bodies look for a defensible commercial advantage, not just a product.</p>
<h3>Do you have the resources to build it?</h3>
<p>You need to show realistic planning for the business, your own commitment to it, and your financial resources. The funding must be genuine and evidenced. Statements about anticipated investment are treated as claims until they are supported.</p>
<h3>Is it economically valuable?</h3>
<p>The plan should involve real economic activity in the UK, with realistic growth expectations, and a plan for creating jobs in the longer term. Bodies are more receptive to plans that account for the wider economy than plans that describe only the founder's income.</p>

<h2 id="costs">What it costs</h2>
${table(
    'UK Innovator Founder visa: 2026 fee schedule',
    ['Stage', 'Fee payable to the UK government', 'Approximate Gulf equivalent'],
    [
        ['Visa application, made from outside the UK', P(1357), fxCell(1357, 'GBP')],
        ['Visa application, to switch or extend inside the UK', P(1693), fxCell(1693, 'GBP')],
        ['Endorsement, paid to an endorsing body', P(1000), fxCell(1000, 'GBP')],
        ['Each endorsement review meeting', P(500), fxCell(500, 'GBP')],
        ['Maintenance funds you must hold, for 28 consecutive days', P(1270), fxCell(1270, 'GBP')],
        ['Dependant partner added to the application', P(285), fxCell(285, 'GBP')],
        ['Immigration Health Surcharge, per adult, per year', P(1035), fxCell(1035, 'GBP')]
    ]
)}
<p>Two points people get wrong. First, the maintenance funds are your own money held in an account, not a fee &mdash; but you must be able to show they were available and that you access them consistently. Second, endorsement review meetings are charged per meeting and at least two are expected as part of the process, so the real endorsement cost is frequently ${P(1000)} plus ${P(1000)} in meeting fees rather than ${P(1000)} alone. Ask your endorsing body for its full schedule before you commit.</p>

<h2 id="process">How the process works</h2>
${steps([
    ['Find an endorsing body', 'Choose an approved endorsing body and check exactly what it wants. The best one for you is the one whose criteria your evidence genuinely matches, not the one with the fastest availability.'],
    ['Submit the endorsement application', 'Send the business plan, evidence of your track record, and the innovation comparison. Expect a substantive assessment, and expect questions.'],
    ['Attend review meetings', 'A typical endorsement involves at least two review meetings, each separately charged. Prepare properly, because each meeting is a decision point.'],
    ['Apply for the visa', 'With an endorsement certificate, apply for the Innovator Founder visa. Outside the UK the published decision target is around three weeks; in-UK switch and extension cases take longer, around eight weeks.'],
    ['Build the business in the UK', 'This is the part that decides your settlement. Trade, meet your revenue milestones, and keep records that prove activity, because this is what the final review looks at.'],
    ['Apply to settle in Year 3', 'If the business is assessed as active and continuing, and your conduct has been good, you can apply for settlement. This is a genuine review, not a formality.']
])}

<h2 id="documents">Documents to have ready</h2>
${checklist([
    'Passport valid beyond the visa period',
    'A written business plan explaining the idea, the market, the innovation, and the financial projections',
    'A clear comparison against existing market offerings, showing what is different',
    'Evidence of your prior business or professional track record, with dates and outcomes',
    'Evidence of available financial resources and genuine funding for the UK business',
    'CV or biographical statement covering the business history behind your application',
    'English translations of anything not already in English or Welsh',
    'Bank statements covering the period used to evidence the maintenance funds',
    'Supporting evidence for any dependants included in the application'
])}

<h2 id="gulf">Founders based in the UAE, Saudi Arabia or Bahrain</h2>
<p>This route has a practical wrinkle for Gulf-based founders: the business that justifies your visa has to be in the UK, and you have to be able to show that honestly.</p>
<h3>Where you apply from</h3>
<p>You can apply from outside the UK, and the fee is lower than the in-UK switch route. If you are already in the UK on another visa, the switch route applies instead, at a different fee and a longer decision time. Do not accidentally pay the higher route by applying from the wrong place.</p>
<h3>Apostilling your business records</h3>
<p>${GULF_DOCS} For a founder this most often applies to company registration documents, bank evidence, and personal business records. Get the apostille done on the original, and keep the certified translation from the same notarised copy.</p>
<h3>The business must genuinely be in the UK</h3>
<p>A business plan run from Dubai, invoicing clients from the Gulf, with no real UK activity, is the pattern that fails the Year 3 review. The plan you present at endorsement and the business you have built three years later are assessed against each other. If your real intention is to run a Gulf business and keep a UK company as a wrapper, this route is the wrong tool and it is better to know that early.</p>
<h3>Take the Year 3 test seriously</h3>
<p>Budget for a genuine business in the UK, not just a registered address. Trading evidence, revenue, employees or contractors, and real accounts are what carry settlement. If the business will not be active in the UK, do not build your plan on this visa.</p>

${faqBlock([
    ['How long does the Innovator Founder visa take to settle?', 'Three years of continuous residence can lead to settlement, provided your business is assessed as active and continuing and your conduct has been good. It is a review, not an automatic conversion.'],
    ['Do I need an innovative business idea, or just any business?', 'The idea has to be genuinely innovative, and you need to show how it differs from what already exists. Endorsing bodies are looking for a defensible advantage, not a product in a crowded market.'],
    ['Can I include my family?', 'Yes. A dependant partner can be included, at a separate fee, and children can be included as dependants. Every adult pays the Immigration Health Surcharge, so model the family total before applying.'],
    ['Do I have to live in the UK to keep the visa?', 'The endorsement is based on building a business in the UK, so your activity has to be there in substance. Time spent away is allowed but excessive absence puts your settlement application at risk.'],
    ['What is the endorsement fee in practice?', `The endorsing body charges ${P(1000)}, and review meetings are ${P(500)} each with at least two expected. Budget ${P(2000)} or more for endorsement rather than assuming the headline figure is the whole cost.`],
    ['Can I apply for this from the Gulf?', 'Yes, you can apply from outside the UK at the lower fee. The business itself is expected to be in the UK, which is the part that needs careful planning.']
])}

${sourcesBlock([
    'UK Government, <a href="https://www.gov.uk/innovator-founder-visa" target="_blank" rel="noopener noreferrer">Innovator Founder visa: eligibility and how to apply</a> &mdash; the primary authority for this route',
    'UK Government, <a href="https://www.gov.uk/innovator-founder-visa/when-you-can-be-successful" target="_blank" rel="noopener noreferrer">when you can be successful</a> &mdash; the official guidance on business activity and the settlement review',
    'UK Government, <a href="https://www.gov.uk/fees" target="_blank" rel="noopener noreferrer">Visa fees</a> &mdash; the current published fee table',
    'UK Government, <a href="https://www.gov.uk/immigration-health-surcharge" target="_blank" rel="noopener noreferrer">Immigration Health Surcharge</a> &mdash; current rate and refund position'
])}`
    },

    /* ================================================================ */
    /* 3. UK EXPANSION WORKER                                          */
    /* ================================================================ */
    {
        slug: 'uk-expansion-worker',
        short: 'UK Expansion Worker',
        blurb: 'Fill a skilled role in Britain while staying with the employer you already have.',
        eyebrow: 'United Kingdom <span class="eyebrow-dot" aria-hidden="true">/</span> Global Business Mobility',
        h1: 'UK Global Expansion Worker visa',
        lede: 'The practical route for Gulf businesses that need a qualified manager or specialist in the UK. It is designed for intra-company moves: you keep your existing employer, they sponsor you, and you stay on their payroll with a defined role in the UK.',
        seoTitle: 'UK Expansion Worker visa: salary &amp; rules | MAK RESIDENCY',
        description:
            'UK Expansion Worker visa: role requirements, salary thresholds and going rates, sponsored conditions, and using the route from Gulf-based employers.',
        meta: meta(8),
        facts: [
            ['Route type', 'Visa, up to 5 years', 'then settlement after 5 years'],
            ['Sponsor needed', 'Yes', 'your current or group employer'],
            ['Relationship to employer', 'Intra-company move', 'direct or group-linked'],
            ['Length at the employer', 'Usually 12 months', 'unless a higher salary applies']
        ],
        toc: [
            { id: 'what', label: 'What this visa is' },
            { id: 'who', label: 'Who can qualify' },
            { id: 'costs', label: 'Salary and costs' },
            { id: 'process', label: 'How it works' },
            { id: 'documents', label: 'Documents' },
            { id: 'gulf', label: 'Gulf employers using this route' },
            { id: 'questions', label: 'Common questions' },
            { id: 'sources', label: 'Official sources' }
        ],
        main: `<h2 id="what">What the Global Expansion Worker visa is</h2>
<p>This is part of the Global Business Mobility framework, which is the UK&rsquo;s route for moving employees between linked businesses. The Expansion Worker category is the one most used: it lets a business in the UK bring in a senior manager or specialist employee from an overseas office, on a defined period and usually at a fixed salary.</p>
<p>It is a <strong>sponsored</strong> route. Unlike the Global Talent visa, it needs an employer who is licensed to sponsor, a certificate of sponsorship, and a job that meets the going rate for the relevant occupation and location. It is also distinct from the ICT route, which is intended for a longer-term transfer without the same UK-entity requirement for some cases.</p>

<h2 id="who">Who can qualify</h2>
<p>You need to fall into one of two role types, and the distinction matters because the rules differ.</p>
<h3>Senior manager</h3>
<p>A senior manager occupies a role that focuses on managing an organisation, a department or a substantial body of work, with authority over colleagues and responsibility for their work. Titles are not the test. The Home Office looks at the duties and the organisational structure, not the job title, and a business hire who does day-to-day work rather than manage people does not qualify as a senior manager.</p>
<h3>Specialist employee</h3>
<p>A specialist employee carries knowledge and expertise essential to the UK business. This covers roles such as engineers, architects, financial analysts, researchers, medical consultants and specialist professionals, among others. The knowledge has to be something the UK operation genuinely needs and could not readily hire for locally.</p>
<h3>Excluded categories</h3>
<p>Some role types are not eligible under this category, including most graduate and trainee positions, certain generalist administrative roles, and roles filled by a worker who could readily be filled in the UK. If your intention is to bring in a junior team on a budget, this is the wrong route.</p>

<h2 id="costs">Salary and costs</h2>
<p>The salary test is the most important gate in this route, and it has two parts.</p>
${table(
    'UK Expansion Worker: the two salary tests',
    ['Test', 'Requirement', 'Approximate Gulf equivalent'],
    [
        ['Going rate for the occupation and location', 'The higher of the going rate or the salary floor', 'varies by role'],
        ['General salary floor', `${P(52500)} per year, or the hourly equivalent`, fxCell(52500, 'GBP')],
        ['Higher salary exception, often used for new roles', `${P(73900)} per year, or the hourly equivalent`, fxCell(73900, 'GBP')],
        ['Initial assignment, unless the higher salary applies', 'Usually 12 months with the sponsor', 'n/a'],
        ['Application to extend the visa', 'Must be made before the current visa expires', 'n/a']
    ]
)}
<p>Read that first row carefully. The salary has to clear <em>both</em> the going rate for that occupation in that part of the UK <em>and</em> the general floor, whichever is higher. A sponsored offer that clears the floor but not the going rate for a London-based senior manager is not eligible. Going rates are published by occupation code and location, so check the specific number rather than the headline floor.</p>
<p>The salary is paid in pounds by the UK sponsor. The Gulf column shows the scale for planning, and your bank will set its own conversion rate.</p>
<p>The Home Office <strong>visa application fee</strong> is set in the published fee table and is not quoted on this page, because it changes. Look it up under Expansion Worker in the current fee table before you budget, and make sure the fee you use is the one for the category and the length of stay you are applying for.</p>
<p>You will also need to cover the Immigration Health Surcharge for each adult, and the employer will need to pay the sponsorship costs and the Certificate of Sponsorship charge on your behalf.</p>

<h2 id="process">How the process works</h2>
${steps([
    ['The employer checks the role', 'The UK sponsoring business confirms the job is a senior manager or specialist employee, that the salary clears both the going rate and the floor, and that the role is genuine rather than filled to make a visa possible.'],
    ['Certificate of Sponsorship', 'The employer, which must be licensed to sponsor, assigns you a Certificate of Sponsorship with the correct occupation code and salary. This is the document that makes the application possible.'],
    ['You apply for the visa', 'Using the certificate, you apply through the UK immigration system, pay the fee, and complete biometrics. Applications should be made within three months of the certificate being assigned.'],
    ['Decision', 'The Home Office assesses the application. A sponsored route carries the risk that the role or the sponsor can be scrutinised, so accuracy in the application and the certificate matters.'],
    ['Work in the UK', 'You take up the role on the terms agreed. If the job or the employer changes, the employer must report the change and you may need a new certificate.']
])}

<h2 id="documents">Documents to have ready</h2>
<p>The employer provides the sponsorship paperwork; you provide the personal evidence. Expect to be asked for both.</p>
${checklist([
    'Valid passport',
    'Certificate of Sponsorship reference number, supplied by the sponsoring employer',
    'Evidence of your employment with the overseas entity, such as a contract or employment letter',
    'An organisational chart showing how the overseas office relates to the UK sponsor',
    'Role description setting out your duties and reporting line',
    'The UK job offer, stating salary, location and start date',
    'Evidence of the salary meeting the going rate and the general floor',
    'English translations of anything not already in English or Welsh',
    'Qualifications and supporting evidence for a specialist employee role',
    'Evidence of any dependants travelling with you'
])}

<h2 id="gulf">Using this route from a Gulf business</h2>
<p>If your business is registered in the UAE, Saudi Arabia or Bahrain and you need a manager or specialist in the UK, this is a route your company can actually use. The mechanics are specific and they reward early planning.</p>
<h3>Licensing is the first gate</h3>
<p>Your entity cannot sponsor without holding a sponsor licence, and the licence takes time to obtain. If nobody in your organisation has looked at the sponsor licence, start there. Many applications fail on this detail, not on the candidate.</p>
<h3>Which Gulf office the worker comes from</h3>
<p>The employee can come from your overseas branch or a linked group company, which is what makes the intra-company move genuine. The relationship has to be documented, not asserted. Keep the corporate structure records ready, because a mismatch between the group chart and the certificate is a common cause of refusal.</p>
<h3>Apostilling for the UK application</h3>
<p>${GULF_DOCS} Employment letters, group-structure evidence and qualification certificates are the documents most often caught out by a missing apostille or an unofficial translation.</p>
<h3>Apply from the right place and the right time</h3>
<p>The application can be made from the Gulf, and biometrics go to the Visa Application Centre covering where the worker lives. The three-month window from the certificate being assigned is short, so plan the appointment before the certificate is assigned rather than after.</p>
<h3>Settlement is a five-year question</h3>
<p>Unlike the Innovator route, this is a five-year route to settlement. Retention matters, and extended absences can put the settlement application at risk. If your business is sending someone for two years, be clear-eyed that the settlement case is a separate step later.</p>

${faqBlock([
    ['Does the worker need a job offer from a UK employer?', 'Yes. This is a sponsored route, and a Certificate of Sponsorship from a licensed sponsoring company is required. The UK sponsor must be able to show the role is genuine and meets the salary requirements.'],
    ['What salary do I need to offer?', 'The higher of the going rate for that occupation in that part of the UK, or the general salary floor of ' + P(52500) + ' a year. Going rates vary by occupation and location, so the specific number matters more than the floor.'],
    ['Is the 12-month minimum rule waived for some cases?', 'The usual initial period is 12 months with the sponsor. Higher salary exceptions, and certain nationalities or arrangements, can differ. The official guidance sets out when the minimum does not apply, so check the current rules for your case.'],
    ['How long is the visa granted for?', 'Up to five years, subject to the conditions of the grant. Your employer has obligations to report changes in your role, salary or employment, and failing to do so can affect the visa.'],
    ['Can the worker bring a spouse and children?', 'Dependants can be included in most cases, subject to the dependant conditions for the route. Each adult dependant pays their own Immigration Health Surcharge, and the employer will need to account for them in the process.'],
    ['What is the visa application fee?', 'It is set in the published Home Office fee table under the Expansion Worker category, and it varies by length of stay. Check the current fee table for the specific category before you budget, and remember the sponsorship costs are paid by the employer.']
])}

${sourcesBlock([
    'UK Government, <a href="https://www.gov.uk/global-expansion-worker" target="_blank" rel="noopener noreferrer">Global Expansion Worker visa</a> &mdash; the primary authority for this route',
    'UK Government, <a href="https://www.gov.uk/expansion-worker" target="_blank" rel="noopener noreferrer">Expansion Worker: eligibility and conditions</a> &mdash; role types, salary rules and the 12-month position',
    'UK Government, <a href="https://www.gov.uk/government/publications/skilled-worker-visa-going-rates-for-eligible-occupations" target="_blank" rel="noopener noreferrer">Skilled Worker going rates</a> &mdash; the occupation-specific going rates that apply to the salary test',
    'UK Government, <a href="https://www.gov.uk/fees" target="_blank" rel="noopener noreferrer">Visa fees</a> &mdash; the current published fee table'
])}`
    },

    /* ================================================================ */
    /* 4. EB-2 NIW                                                     */
    /* ================================================================ */
    {
        slug: 'eb-2-niw',
        short: 'EB-2 NIW',
        blurb: 'A US green card for advanced-degree professionals, without an employer.',
        eyebrow: 'United States <span class="eyebrow-dot" aria-hidden="true">/</span> Self-petitioned employment-based',
        h1: 'EB-2 NIW visa',
        lede: 'The EB-2 National Interest Waiver lets you petition for a US green card yourself, with no employer and no labour market test. It is built on a three-pronged test: a degree of advanced expertise, an exceptional record of achievement, and evidence that your work will benefit the United States.',
        seoTitle: 'EB-2 NIW visa: evidence, fees &amp; timing | MAK RESIDENCY',
        description:
            'EB-2 NIW guide: the three-pronged test, 2026 USCIS fees with Gulf conversions, processing times, and consular processing from the Gulf.',
        meta: meta(10),
        facts: [
            ['Route type', 'Green card', 'permanent residence'],
            ['Sponsor needed', 'No', 'you petition for yourself'],
            ['Labour market test', 'Not required', 'because no employer sponsors'],
            ['Living in the Gulf', 'Consular processing', 'interview at a US consulate']
        ],
        toc: [
            { id: 'what', label: 'What this route is' },
            { id: 'who', label: 'Who can qualify' },
            { id: 'costs', label: 'What it costs' },
            { id: 'timelines', label: 'How long it takes' },
            { id: 'process', label: 'How it works' },
            { id: 'documents', label: 'Documents' },
            { id: 'gulf', label: 'If you are based in the Gulf' },
            { id: 'questions', label: 'Common questions' },
            { id: 'sources', label: 'Official sources' }
        ],
        main: `<h2 id="what">What the EB-2 NIW is</h2>
<p>Most US employment-based green cards require a sponsoring employer to petition for you, prove that it could not find a US worker to do the job, and then wait in a queue by country of birth. The EB-2 National Interest Waiver removes all three of those features. You petition for yourself. There is no labour market test. And critically for international applicants, there is no per-country queue &mdash; the whole route is governed by a single global visa bulletin.</p>
<p>That last point is the reason the NIW is the practical US route for a Gulf-based professional. Because there is no per-country backlog, an applicant in Dubai or Riyadh is not disadvantaged relative to an applicant in New York.</p>
<p>In exchange, the evidence bar is high. The adjudication is a judgement about the strength of your record, not a checklist of years served.</p>

<h2 id="who">Who can qualify</h2>
<p>You need an advanced degree, or the foreign equivalent of one, and you must satisfy all three prongs of the test. All three matter; the third is where strong cases are lost.</p>
<h3>Prong one: advanced degree</h3>
<p>Normally a US degree of advanced study, a bachelor's degree with at least five years of progressive experience, or a foreign degree that is the equivalent. A degree completed alongside work, or earned later in life, can still qualify. The requirement is genuinely that you hold an advanced degree, not that you have a specific field.</p>
<h3>Prong two: exceptional record of achievement</h3>
<p>This is the prong most applicants overrate and most references underdeliver on. The regulations look for evidence of recognition beyond ordinary employment: a degree of relevance far above what is standard, an award or prize of distinction, published work, participation as a judge, significant original contributions, and authorship of published material. Two or three strong items beat a long list of weak ones, because an expert reviewing your record will spot padding immediately.</p>
<h3>Prong three: benefit to the United States</h3>
<p>This is the prong that decides outcomes. You need to show that your work will benefit the United States, either through a government statement, a published opinion of an employer or academic institution, or a showing of your own achievement with clear societal impact. Writing this as a general argument about your field is the standard failure. It has to be about <em>your</em> work, your specific contribution, and a concrete reason the United States gains from it continuing.</p>
<h3>Evidence quality beats evidence volume</h3>
<p>A recommendation letter that explains, with specifics, what you did that others could not, is worth more than three letters saying you were excellent. Write your reference requests carefully and give your referees a factual brief to work from.</p>

<h2 id="costs">What it costs</h2>
${table(
    'EB-2 NIW: 2026 USCIS fee schedule',
    ['Form or item', 'USCIS fee', 'Approximate Gulf equivalent'],
    [
        ['Form I-140, immigrant petition', `${U(715)} filed on paper / ${U(665)} filed online`, fxCell(715, 'USD')],
        ['Form I-485, adjustment of status, per principal applicant', `${U(1440)} on paper / ${U(1375)} online`, fxCell(1440, 'USD')],
        ['Form I-485, per dependant', `${U(1440)} on paper / ${U(1375)} online`, fxCell(1440, 'USD')],
        ['Form I-907, request for premium processing of the I-140', U(2965), fxCell(2965, 'USD')],
        ['Medical examination, translation, apostille and courier', 'Varies by country and file', 'ask for a written quote']
    ]
)}
<p>Filing online is cheaper than filing on paper, and it is faster. Biometrics can be reused between I-140 and I-485 where the filings are close enough together, which can save a separate appointment.</p>
<p>The Gulf column is a planning conversion. Your bank sets the rate and it moves, and you pay USCIS in dollars. The Medical examination fee in particular is set locally and varies by post, so get a written quote before you travel for it.</p>

<h2 id="timelines">How long it takes</h2>
<p>Timings in the United States are guided by published USCIS processing times, which move constantly. Treat any number you read as a snapshot and re-check the current figure for your exact form and service centre.</p>
${table(
    'Indicative EB-2 NIW processing times',
    ['Stage', 'Indicative timeline', 'How to read it'],
    [
        ['I-140, premium processing', 'Approximately 45 business days', 'the fastest lawful route, at extra cost'],
        ['I-140, regular processing', 'Often reported in the high twenties of months, with a wide range observed', 'the range in published data has been very wide'],
        ['I-485 adjustment of status', 'Historically several months to a few years depending on the queue', 'check the current published time for your centre'],
        ['Consular processing, from a Gulf post', 'Months, and it varies sharply by post', 'embassy backlogs are not published as a formal service standard']
    ]
)}
<p>Do not let anyone tell you the NIW is quick. The evidence standard and the processing times are the two things to plan around together: you need a file strong enough to survive a long queue and a lawyer experienced enough to avoid a request for evidence that restarts the clock.</p>

<h2 id="process">How it works</h2>
${steps([
    ['Build the record before you file', 'Assemble the achievements, publications, awards, media and evidence of impact that the three prongs require. This is the stage that determines the outcome, and it should be done properly rather than quickly.'],
    ['Prepare the petition package', 'File Form I-140 with the supporting evidence, the required filing fee, and proof that you hold an advanced degree. Include evidence organised so a reviewer can find each prong without hunting.'],
    ['Consider premium processing', 'If your professional circumstances justify paying for speed, file Form I-907 for premium processing of the I-140. It is an additional fee and it is a genuine trade-off, not a default.'],
    ['File Form I-485', 'If you are inside the United States on an eligible status, you can file the adjustment of status. If you are outside the US, this stage happens through a US consulate instead.'],
    ['Government processing and medical', 'USCIS reviews the petition. In the consular route you attend an interview, obtain a civil document and medical examination, and your documents are registered with your home country before transfer to the US.'],
    ['Admission and green card', 'On approval you are admitted as a lawful permanent resident and your green card is issued.']
])}

<h2 id="documents">Documents to have ready</h2>
${checklist([
    'Passport, valid for the intended period of travel',
    'Evidence of your advanced degree, with certified translation if not in English',
    'Curriculum vitae, detailed and specific rather than generic',
    'Published work, patents, articles, or other original contributions, with evidence of circulation or impact',
    'Awards, honours, prizes and grants, with the awarding body identified',
    'Letters of recommendation that state specifically what you did and why it mattered',
    'A clear written argument on how your work benefits the United States',
    'Any government statements, press coverage or institutional opinions you can obtain',
    'Medical examination form from a panel physician approved for your post',
    'Evidence for each dependant, including their relationship to you'
])}

<h2 id="gulf">If you are based in the Gulf</h2>
<p>The NIW is one of the most attractive US routes for Gulf-based professionals, with one important structural consequence you must plan around.</p>
<h3>Concurrent filing is not available to you</h3>
<p>The ability to file the I-140 and the I-485 together, using the payment, pedigree and priority-date benefit of a pending I-140, is available only to applicants located inside the United States. <strong>Applicants living in the UAE, Saudi Arabia, Bahrain or anywhere else abroad go through consular processing.</strong> There is no equivalent shortcut, so the timeline from filing to green card is longer and it depends on a post&rsquo;s backlogs. Plan your timeline on that basis rather than on a US-based case study.</p>
<h3>Consular processing, step by step</h3>
<p>You file the petition with USCIS. When it is approved, your case is transferred to the US consulate for your country of legal residence, where you complete Form DS-260, attend an interview in person, and obtain a civil document and medical examination. The consulate then asks your home country to verify your civil records. For Gulf nationals that verification can be a significant part of the total time, and it is outside the control of either you or the post.</p>
<h3>Which post handles you</h3>
<p>The United States has embassies and consulates in the Gulf, and posts in Dubai, Abu Dhabi, Riyadh, Jeddah, Muscat, Doha, Kuwait City and Manama among others. Your interview is at the post covering where you legally reside, and interview availability and backlogs differ significantly between them. Where you hold citizenship of more than one country matters, because the post is determined by citizenship rather than by where you happen to live.</p>
<h3>Apostilling from the Gulf</h3>
<p>${GULF_DOCS} For this route the apostilled documents usually include your degree certificates, civil records such as birth and marriage certificates, police certificates, and marriage certificates for dependants. The civil document and medical examination must be completed in the country where you apply, which in a consular case is the country of your interview.</p>
<h3>The family timing question</h3>
<p>Dependants can be included, but each one needs their own fee, their own documents, and their own medical examination. The larger the family, the longer the queue at every stage, because each person is a separate case file.</p>

${faqBlock([
    ['Do I need an employer to sponsor me?', 'No. The National Interest Waiver is self-petitioned, and the absence of a sponsor is one of its main advantages. There is also no labour market test because no employer is recruiting for the role.'],
    ['Is there a per-country queue?', 'No. Because the NIW has no per-country caps, the whole route runs on a single global visa bulletin. A Gulf-based applicant is not disadvantaged relative to an applicant inside the United States on quota availability.'],
    ['What is the two-step or three-step test?', 'The three prongs: an advanced degree or its equivalent, an exceptional record of achievement, and evidence that your work will benefit the United States. All three must be satisfied, and the third is the one most cases fail.'],
    ['Can I get premium processing?', 'Premium processing is available for the I-140 for an additional fee, and the published target is approximately 45 business days. It is a trade-off between cost and time, and it is not a guarantee of approval.'],
    ['What is the realistic timeline?', 'Long. Premium processing on the I-140 is around 45 business days, but regular processing has been reported in the high twenties of months, and the I-485 and any consular stage add substantially more. Published times move constantly, so re-check them for your form and service centre.'],
    ['I live in the UAE, not the US. Does that change things?', 'Yes, in one important way. You go through consular processing at a US post in the country where you legally reside, rather than adjusting status inside the US, and concurrent I-140 and I-485 filing is not available to you. That longer route is the trade-off for having no per-country queue.']
])}

${sourcesBlock([
    'USCIS, <a href="https://www.uscis.gov/working-in-the-united-states/temporary-workers/eb-2-national-interest-waiver" target="_blank" rel="noopener noreferrer">EB-2 National Interest Waiver</a> &mdash; the primary authority for this category',
    'USCIS, <a href="https://www.uscis.gov/green-card/green-card-processes-and-procedures/employment-based-immigration" target="_blank" rel="noopener noreferrer">Employment-based immigration</a> &mdash; forms and process overview',
    'USCIS, <a href="https://www.uscis.gov/fees" target="_blank" rel="noopener noreferrer">USCIS fee schedule</a> &mdash; verify every figure before filing',
    'USCIS, <a href="https://www.uscis.gov/processing-times" target="_blank" rel="noopener noreferrer">Processing times</a> &mdash; always check the current published time for your exact form and service centre',
    'US Department of State, <a href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/fees-visa-services.html" target="_blank" rel="noopener noreferrer">visa fees</a> &mdash; the separate consular fees, distinct from USCIS filing fees'
])}`
    },

    /* ================================================================ */
    /* 5. PORTUGAL D7                                                  */
    /* ================================================================ */
    {
        slug: 'portugal-d7-visa',
        short: 'Portugal D7',
        blurb: 'Residence in Portugal on a stable income, with no job and no investment.',
        eyebrow: 'Portugal <span class="eyebrow-dot" aria-hidden="true">/</span> Residence without employment',
        h1: 'Portugal D7 residence visa',
        lede: 'The D7 is a residence permit for people with a reliable income who are not going to work in Portugal: retirees, and remote workers earning from outside the country. It is the route most Gulf families ask about first, and the one with the clearest income test.',
        seoTitle: 'Portugal D7 visa: income, fees &amp; process | MAK RESIDENCY',
        description:
            'Portugal D7 residence visa: 2026 income thresholds with AED, SAR and BHD conversions, the application process, and applying from the Gulf.',
        meta: meta(9),
        facts: [
            ['Route type', 'Residence permit', '2 years, then renewable'],
            ['Work permitted', 'No', 'this is not a work visa'],
            ['Income basis', 'Passive or remote income', 'above a monthly threshold'],
            ['Long-term goal', 'Residence card then PR', 'PR after 5 years']
        ],
        toc: [
            { id: 'what', label: 'What this visa is' },
            { id: 'who', label: 'Who can qualify' },
            { id: 'costs', label: 'What it costs' },
            { id: 'process', label: 'How it works' },
            { id: 'documents', label: 'Documents' },
            { id: 'gulf', label: 'Applying from the Gulf' },
            { id: 'questions', label: 'Common questions' },
            { id: 'sources', label: 'Official sources' }
        ],
        main: `<h2 id="what">What the Portugal D7 visa is</h2>
<p>The D7 is Portugal&rsquo;s residence permit for people who can support themselves without working in Portugal. It suits two groups in particular: retirees with a pension or investment income, and remote workers or business owners whose income is generated outside Portugal, typically from the Gulf.</p>
<p>It is worth being clear about what it is not. It is not a work permit. It does not give you the right to take a job in Portugal. And it is not a way to keep a residence status without a genuine connection to the country: you are expected to be reasonably present, and a card that is never used is a liability rather than an asset.</p>

<h2 id="who">Who can qualify</h2>
<p>There is no minimum age beyond legal adulthood, and no points system. What matters is the income, and how you evidence it.</p>
<h3>The income test</h3>
<p>You need a monthly income above a published threshold, and the threshold rises for a spouse and for each dependent child. The figure is set with reference to the national minimum wage and is updated annually, so the amount you saw last year is not the amount to budget on now.</p>
<h3>Where the income comes from</h3>
<p>Accepted sources include employment income, business or company income, pensions, and investment income. The income has to be yours, documented, and capable of being shown to a Portuguese authority. Statements without supporting evidence are rejected, and this is the single most common reason a D7 application fails. Bank statements showing regular inflows, contracts, tax returns and payslips are the evidence that works.</p>
<h3>Remote working counts, working locally does not</h3>
<p>Many people ask whether a Gulf employee may take this route. Yes, if they work remotely for an employer outside Portugal. The restriction is on working <em>in</em> Portugal, not on having a job. What matters is that your income is not generated by Portuguese employment.</p>
<h3>The initial permit is two years</h3>
<p>The first residence permit is granted for two years, and it is renewable. At the end of the period, you renew and can be granted a three-year permit. Residence of five years, with regular permits, is the route to permanent residence and then to Portuguese nationality.</p>

<h2 id="costs">What it costs</h2>
${table(
    'Portugal D7: thresholds and fees for 2026',
    ['Item', 'Amount', 'Approximate Gulf equivalent'],
    [
        ['Minimum income, per adult, per month', E(920), fxCell(920, 'EUR')],
        ['Minimum income, per adult, per year', E(11040), fxCell(11040, 'EUR')],
        ['Additional amount, spouse, per month', E(460), fxCell(460, 'EUR')],
        ['Additional amount, each dependent child, per month', E(276), fxCell(276, 'EUR')],
        ['Consular visa application', `about ${E(110)}`, fxCell(110, 'EUR')],
        ['VFS service fee', `about ${E(40)}`, fxCell(40, 'EUR')],
        ['AIMA residence permit', `about ${E(150)}&ndash;${E(170)}`, fxCell(160, 'EUR')],
        ['Portuguese NIF number, if obtained through a service', `about ${E(95)}`, fxCell(95, 'EUR')],
        ['Health insurance, per adult', 'varies by coverage and insurer', 'ask for a written quote']
    ]
)}
<p>Two cautions on these figures. First, the income threshold is deliberately pegged to the national minimum wage, and it has moved upward: it was ${E(870)} per month in 2025 and ${E(920)} for 2026, with further increases expected. If you are planning a year ahead, budget above today's number. Second, the visa, permit, NIF and insurance fees are the state's own charges and change independently, so treat the table as a planning estimate and confirm the current figures when you file.</p>
<p>Do not confuse the D7 with the Portuguese D8 digital nomad visa, which has a considerably higher income threshold but permits working in Portugal. They are different applications, filed separately, and choosing the wrong one costs time and fees.</p>

<h2 id="process">How the process works</h2>
${steps([
    ['Open the process with the consulate or VFS centre', 'You apply in the country where you legally reside, through the Portuguese consulate or the VFS centre handling that jurisdiction. You cannot apply from a country you merely visit.'],
    ['Get your NIF number', 'Portugal requires a NIF, the fiscal identification number, before most residence applications can be processed. Obtaining it is a step in its own right and is on the critical path.'],
    ['Assemble and lodge the file', 'Proof of income, health insurance, accommodation, criminal record certificates and civil documents. Incomplete files are returned, so completeness matters more than speed here.'],
    ['Attend biometrics and interview', 'You provide fingerprints and a photograph, and normally attend an interview at the consulate or centre. Consistency between what you declare and what you evidence is being checked.'],
    ['Decision and entry', 'On approval you travel to Portugal within a set period and apply in person for the AIMA residence permit using the visa documentation.'],
    ['Receive the residence permit', 'AIMA issues the permit, initially for two years. Renew it, then at five years of regular residence you can apply for permanent residence.']
])}

<h2 id="documents">Documents to have ready</h2>
<p>Portuguese authorities are strict about completeness, and a returned file costs weeks. Prepare all of the following together.</p>
${checklist([
    'Valid passport, with passport pages available for the full period of intended stay',
    'Proof of the qualifying income, showing regular inflows above the monthly threshold',
    'Underlying income evidence: contracts, payslips, business income statements, pension statements, or portfolio records',
    'Tax residency documents from the country where you live',
    'Health insurance valid in Portugal and covering the full requested period',
    'Proof of accommodation in Portugal',
    'Clean criminal record certificate from your country of nationality, and any country of residence in the last five years',
    'Civil documents such as birth and marriage certificates',
    'Proof of any qualifying family relationship for dependants',
    'Portuguese NIF number confirmation',
    'Proof of having applied, or being exempt, for Portuguese social security registration where applicable',
    'Recent passport photographs in Portuguese format'
])}

<h2 id="gulf">Applying from the UAE, Saudi Arabia or Bahrain</h2>
<p>The Gulf is one of the strongest applicant pools for the D7, because the income test suits exactly the profile of Gulf-based professionals and business owners. It is also a well-trodden path, and the process from here has specifics worth knowing.</p>
<h3>You must apply from your country of legal residence</h3>
<p>The first rule is that the application is lodged in the country where you legally reside, through the consulate or VFS centre with jurisdiction over that country. If you live in the UAE, you apply through the UAE jurisdiction. Residence in one Gulf state does not let you apply through another. Do not plan around travelling to Europe to apply, because that is not how the route works.</p>
<h3>Apostille your documents, do not fully legalise them</h3>
<p>${GULF_DOCS} For a D7 file this most often means police clearances, birth and marriage certificates, and degree or professional certificates. Order the apostille before the translation so the translation and the apostille refer to the same notarised document.</p>
<h3>A working tax position makes the income claim stronger</h3>
<p>Because the income test is the whole application, the strongest D7 files are the ones where the income is also properly declared for tax in the country of residence. Gulf applicants with a clean, evidenced, taxed source of income routinely have less trouble than applicants with large but undocumented flows. A documented income history also protects you if you later apply for permanent residence.</p>
<h3>Plan the Portugal side of the move</h3>
<p>The visa is only the first step; the residence permit is issued in person in Portugal after you arrive. That means accommodation, health insurance valid in Portugal, and a realistic plan for how long you will actually spend in the country. If you intend to keep working remotely from the Gulf, that is consistent with the route. If you intend to live in Portugal without a Portuguese income, the D7 is not the right basis, and the Portuguese tax position on your worldwide income needs separate thought.</p>
<h3>Get Portuguese fiscal advice, not just immigration advice</h3>
<p>There is a well-known tension between where your income is earned and where you live for tax purposes. Residency in Portugal is a real tax event for many non-Portuguese nationals. That is outside the scope of immigration advice, and it is the point where a Gulf applicant needs a Portuguese tax adviser as well as an immigration adviser.</p>

${faqBlock([
    ['How much income do I need for the D7?', `The threshold for 2026 is ${E(920)} per adult per month, or ${E(11040)} a year, rising by ${E(460)} per month for a spouse and ${E(276)} per month for each dependent child. The figure is updated annually in line with the national minimum wage, so check the current threshold before you file.`],
    ['Can I work if I have a D7?', 'Not in Portugal. The D7 does not permit employment in Portugal. If you are employed abroad, for instance in the Gulf, and you keep working remotely for that employer, that is consistent with the route. Working locally in Portugal needs a different authorisation.'],
    ['What is the difference between the D7 and the D8?', 'The D7 is a residence permit for people with passive or remote income and it does not allow you to work in Portugal. The D8 digital nomad visa is for remote workers and has a substantially higher income threshold, but it does allow remote work for an employer abroad. They are separate applications with separate requirements.'],
    ['Can I stay in Portugal permanently on a D7?', 'Not immediately. The first permit is for two years and is renewable, and renewal can extend it to three years. After five years of regular residence with renewable permits you can apply for a residence card for EU citizens and then for Portuguese nationality.'],
    ['Can a D7 holder get Portuguese nationality?', 'It is a realistic long-term goal on this route, not an immediate one. After five years of lawful, regular residence, holding a temporary or EU residence card, you can apply for nationality. The language and integration requirements apply.'],
    ['How long does the D7 application take?', 'Historically around four to seven months, but the duration depends on the consulate or centre handling it, the completeness of the file, and the time to obtain a NIF number. Because incomplete files are returned rather than refused, careful preparation is the fastest route available.'],
    ['Can I convert a tourist stay into a D7?', 'No. The route that allowed a tourist stay to be converted to a residence permit was abolished. You need a proper visa granted from outside Portugal, so plan the timing of your application rather than arriving first and sorting it out afterwards.']
])}

${sourcesBlock([
    'Portuguese Ministry of Foreign Affairs, <a href="https://portaldascomunidades.mne.gov.pt/en/foreigners-in-portugal/residence-visas" target="_blank" rel="noopener noreferrer">Residence visas</a> &mdash; the primary authority for the D7 category and current income thresholds',
    'AIMA, <a href="https://aima.gov.pt/" target="_blank" rel="noopener noreferrer">AIMA</a> &mdash; the Portuguese Agency for Integration, Migrants and Asylum, which issues the residence permit',
    'VFS Global, <a href="https://www.visa.vfsglobal.com/eur/en/prt/" target="_blank" rel="noopener noreferrer">Portugal visa application centres</a> &mdash; confirm the centre covering your country of legal residence',
    'European Commission, <a href="https://europa.eu/youreurope/citizens/travel/entry-exit/eu-citizen/index_en.htm" target="_blank" rel="noopener noreferrer">EU entry requirements for EU citizens</a> &mdash; relevant at the later residence card stage',
    'Portuguese tax authority, <a href="https://info.portaldasfinancas.gov.pt/" target="_blank" rel="noopener noreferrer">Portuguese tax authority</a> &mdash; tax residency is a separate question from immigration status'
])}`
    }
];
