/* ==========================================================================
   MAK RESIDENCY - legal and policy pages
   --------------------------------------------------------------------------
   MAK RESIDENCY is NOT IAA / OISC regulated. Nothing in these pages may
   describe the firm as licensed, certified, regulated, or able to give
   individual UK immigration advice, and nothing may promise an outcome.
   ========================================================================== */

import { REVIEWED } from './shell.mjs';

const UPDATED = `Last updated ${REVIEWED}`;

export const LEGAL = [
    /* -------------------------------------------------------------- */
    {
        slug: 'disclaimer',
        nav: 'Disclaimer',
        title: 'Disclaimer | MAK RESIDENCY',
        description:
            'General immigration information only. MAK RESIDENCY is not IAA or OISC regulated, nothing here is individual legal advice, and no outcome is guaranteed.',
        h1: 'Disclaimer',
        lede: 'Please read this before relying on anything on this website. It explains the limits of what we publish and, importantly, what we are not.',
        updated: UPDATED,
        sections: [
            {
                id: 'general-information',
                h: 'General information only',
                p: [
                    'Everything on this website is published as <strong>general information</strong>. It is written to help you understand how immigration and residency systems work, what the published requirements and fees are, and what questions to ask before you commit money to an application.',
                    'General information is not advice. It has been prepared without knowledge of your personal circumstances, and it cannot take account of them. If you need a decision about your own case, that requires a regulated adviser who can see your file.'
                ]
            },
            {
                id: 'not-regulated',
                h: 'We are not a regulated immigration adviser',
                p: [
                    'MAK RESIDENCY is <strong>not regulated by the Immigration Advice Authority</strong>, formerly the Office of the Immigration Services Commissioner. We do not hold a regulated immigration adviser licence, and we must not describe ourselves as licensed, certified, approved or regulated in relation to UK immigration advice. If you see such a claim attributed to us anywhere, please tell us so we can correct it.',
                    'The consequences are practical, not just reputational. We cannot give you individual advice on a UK immigration application, act as your representative before the Home Office, or sign off a client file. What we can do is explain the routes in general terms, help you understand what documents a route typically requires, and point you to the right regulated or official source for a decision about your own case.'
                ]
            },
            {
                id: 'no-outcome',
                h: 'No outcome is guaranteed',
                p: [
                    'Immigration decisions are made by government authorities in the United Kingdom, the United States, Portugal and elsewhere. Those authorities apply their own rules to the facts as they find them, and outcomes are not within our control.',
                    'Nothing on this site is a guarantee, a representation or a prediction that you will obtain a visa, a residence permit or a green card. Where a page states published fees, thresholds or processing times, those are the authority&rsquo;s published figures at the time of writing, and they change. <strong>Always check the official source before you pay anything.</strong>'
                ]
            },
            {
                id: 'accuracy',
                h: 'Accuracy and dates',
                p: [
                    'We review these pages and mark the review date at the top of each one. But immigration rules change frequently and sometimes without much notice, and a page can be out of date even shortly after a review.',
                    'Figures such as fees, salary thresholds, income thresholds and processing times are reproduced from official sources for orientation. Where we show an approximate conversion into UAE dirhams, Saudi riyals or Bahraini dinars, that conversion is for planning only: it is rounded, it moves with exchange rates, and <strong>only the source currency figure is binding</strong>. You pay the authority in its own currency.'
                ]
            },
            {
                id: 'external-links',
                h: 'External links',
                p: [
                    'This site links to government and official sources. We do not control those sites and we are not responsible for their content or their availability. If a link is wrong or a page has moved, tell us and we will correct it.',
                    'Where we quote a fee or a rule, the official source is the authority. Our page is a summary written for clarity, not a substitute for the rule itself.'
                ]
            },
            {
                id: 'your-advice',
                h: 'Getting advice you can rely on',
                p: [
                    'If you need advice about your own case in the United Kingdom, use a adviser regulated by the Immigration Advice Authority. You can search the register of regulated advisers to confirm that a firm or individual is authorised to give advice in your area.',
                    'In the United States, use an immigration attorney admitted to practice. In Portugal, use an attorney or a registered immigration adviser. We are happy to point you toward the right category of professional; we are not able to act as one.'
                ]
            },
            {
                id: 'contact',
                h: 'Tell us about a problem',
                p: [
                    'If you believe something on this site is inaccurate, out of date, or misleading, please contact us and we will look at it.',
                    'Email <a href="mailto:contact@makresidency.com">contact@makresidency.com</a> or call <a href="tel:+923268653443">+92 326 8653443</a>.'
                ]
            }
        ]
    },

    /* -------------------------------------------------------------- */
    {
        slug: 'privacy',
        nav: 'Privacy',
        title: 'Privacy policy | MAK RESIDENCY',
        description:
            'How MAK RESIDENCY collects, uses and protects the personal information you send through this website, including the WhatsApp enquiry form.',
        h1: 'Privacy policy',
        lede: 'What we collect when you contact us, why we collect it, how long we keep it, and what we do not do with it.',
        updated: UPDATED,
        sections: [
            {
                id: 'who',
                h: 'Who is responsible',
                p: [
                    'MAK RESIDENCY is the controller of the personal information described in this policy. We are reachable at <a href="mailto:contact@makresidency.com">contact@makresidency.com</a> and by post at Rua Ant&oacute;nio Concei&ccedil;&atilde;o Bento 6D, 3D, Peniche, Portugal.',
                    'This policy covers this website. It does not cover government application systems, which are operated by the relevant authority and governed by that authority&rsquo;s own privacy policy.'
                ]
            },
            {
                id: 'collect',
                h: 'What we collect',
                p: [
                    'This site is a static website. <strong>By itself it does not use analytics, advertising pixels, or advertising cookies</strong>, and it does not ask you to create an account. There is no login and no database behind these pages.',
                    'If you choose to contact us, we collect whatever you send us. Through the enquiry form on the contact section, the details are composed into a message and handed to WhatsApp on your own device, so your enquiry is sent through your WhatsApp account rather than to a server we operate. Whatever you then send us by email, WhatsApp or telephone, we hold from that point onwards.'
                ]
            },
            {
                id: 'use',
                h: 'Why we use it',
                p: [
                    'We use contact details to reply to your enquiry, to answer questions about the routes described on this site, and to keep a record of our correspondence. We rely on your consent, given by contacting us, as our lawful basis for responding to an enquiry, and on our legitimate interests in operating the business for anything that follows from it.',
                    'We do not sell personal information, and we do not share it for marketing purposes. We do not add you to a mailing list because you asked a question.'
                ]
            },
            {
                id: 'keep',
                h: 'How long we keep it',
                p: [
                    'We keep correspondence for as long as needed to deal with your enquiry and to meet any legal obligation that applies to us. If you ask us to delete your details, we will do so, except where we are required to retain them.'
                ]
            },
            {
                id: 'files',
                h: 'If you send us documents',
                p: [
                    'If you send us copies of passports, certificates or other records, we hold them securely and use them only to answer your question. Please do not send an original document, and please do not send anything you would be uncomfortable with us holding. You can ask us to delete them at any time.',
                    'Sending documents by WhatsApp or email means they travel over services we do not control. If a document is sensitive, agree an alternative with us first.'
                ]
            },
            {
                id: 'rights',
                h: 'Your rights',
                p: [
                    'You can ask us what personal information we hold about you, ask us to correct it, ask us to delete it, and object to how we use it. Email <a href="mailto:contact@makresidency.com">contact@makresidency.com</a> and we will respond.',
                    'If you are unhappy with our response you may complain to the relevant supervisory authority in your country of residence.'
                ]
            },
            {
                id: 'changes',
                h: 'Changes to this policy',
                p: [
                    'We will update this page when our practices change, and the review date at the top will change with it.'
                ]
            }
        ]
    },

    /* -------------------------------------------------------------- */
    {
        slug: 'terms',
        nav: 'Terms',
        title: 'Terms of use | MAK RESIDENCY',
        description:
            'The terms on which you may use the MAK RESIDENCY website, the limits of the information published on it, and the limits of liability that apply.',
        h1: 'Terms of use',
        lede: 'The agreement between you and this website. Short version: the information here is general, it can change, and you should check the official source before you act on it.',
        updated: UPDATED,
        sections: [
            {
                id: 'use',
                h: 'Using this site',
                p: [
                    'You may read, print and share these pages for your own use. The content remains the property of MAK RESIDENCY. Please do not republish large parts of it as your own, and do not use it in a way that suggests we have endorsed you or your service.'
                ]
            },
            {
                id: 'information',
                h: 'Nature of the information',
                p: [
                    'The content of this site is <strong>general information</strong> about immigration and residency routes, fees and requirements. It is not advice, it is not tailored to your circumstances, and it is not a representation that any particular application will succeed.',
                    'MAK RESIDENCY is not regulated by the Immigration Advice Authority. Read the <a href="../disclaimer/">disclaimer</a> in full; it forms part of these terms.'
                ]
            },
            {
                id: 'accuracy',
                h: 'Accuracy, currency and change',
                p: [
                    'Immigration rules, fees, thresholds and processing times change frequently. We review our pages and mark the review date, but we cannot guarantee that the information is current, complete or error-free at the moment you read it.',
                    'Nothing on this site creates a contract or an obligation. Fees and requirements quoted in one currency are payable in the authority&rsquo;s own currency. Approximate currency conversions shown for Gulf readers are indicative only and are not a price.'
                ]
            },
            {
                id: 'external',
                h: 'Third-party sites and services',
                p: [
                    'We link to government and official websites, and the enquiry form hands your message to WhatsApp. We do not control those services and we are not responsible for their content, their availability, or how they handle your information. Your use of them is governed by their own terms and privacy policies.'
                ]
            },
            {
                id: 'liability',
                h: 'Limitation of liability',
                p: [
                    'To the fullest extent permitted by law, MAK RESIDENCY excludes liability for any loss arising from reliance on the general information published on this site, including decisions made, applications filed, fees paid or opportunities missed as a result of it.',
                    'Nothing in these terms excludes liability for fraud, or for any liability that cannot lawfully be excluded. Where you act on general information you obtained from a regulated adviser or an official source, our role ends at the point you received it.'
                ]
            },
            {
                id: 'law',
                h: 'Governing law',
                p: [
                    'These terms are governed by Portuguese law, and the courts of Portugal have jurisdiction, without prejudice to any mandatory consumer protection rights available to you in your country of residence.'
                ]
            }
        ]
    }
];
