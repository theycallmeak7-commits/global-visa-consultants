/* ==========================================================================
   MAK RESIDENCY
   Global Immigration & Residency Consultants
   Vanilla JS, no dependencies.
   ========================================================================== */
(function () {
    'use strict';

    /* Flag script support immediately so reveal-on-scroll styles only apply when
       this file actually runs. Without it a JS error would leave content hidden. */
    document.documentElement.classList.add('js');

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var MOBILE_NAV_BP = 900;

    var on = function (el, type, fn, opts) {
        if (el) el.addEventListener(type, fn, opts || false);
    };

    var to = function (el, list) {
        return Array.prototype.slice.call(el.querySelectorAll(list));
    };


    /* ------------------------------------------------------------------
       Header elevation on scroll
       ------------------------------------------------------------------ */
    var header = document.getElementById('siteHeader');

    var syncHeader = function () {
        if (!header) return;
        header.classList.toggle('is-scrolled', window.pageYOffset > 8);
    };

    syncHeader();
    on(window, 'scroll', syncHeader, { passive: true });


    /* ------------------------------------------------------------------
       Mobile navigation
       ------------------------------------------------------------------ */
    var navToggle = document.getElementById('navToggle');
    var primaryNav = document.getElementById('primaryNav');

    function navIsOpen() {
        return !!(primaryNav && primaryNav.classList.contains('is-open'));
    }

    function setNav(open) {
        if (!navToggle || !primaryNav) return;
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        primaryNav.classList.toggle('is-open', open);
        document.body.classList.toggle('is-locked', open);
        if (open) {
            var first = primaryNav.querySelector('a[href]');
            if (first) window.setTimeout(function () { first.focus(); }, 60);
        }
    }

    on(navToggle, 'click', function () {
        setNav(navToggle.getAttribute('aria-expanded') !== 'true');
    });

    /* Keep Tab inside the open menu */
    on(document, 'keydown', function (e) {
        if (e.key !== 'Tab' || !navIsOpen()) return;
        var items = to(primaryNav, 'a[href]').filter(function (el) {
            return el.offsetParent !== null;
        });
        if (!items.length) return;
        var first = items[0];
        var last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    });

    on(window, 'resize', function () {
        if (window.innerWidth > MOBILE_NAV_BP) setNav(false);
    });


    /* ------------------------------------------------------------------
       Bottom dock (mobile office expander)
       ------------------------------------------------------------------ */
    var dock = document.getElementById('dock');
    var dockToggle = document.getElementById('dockToggle');

    function setDock(open) {
        if (!dock || !dockToggle) return;
        dockToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        dock.classList.toggle('is-open', open);
    }

    on(dockToggle, 'click', function () {
        setDock(dockToggle.getAttribute('aria-expanded') !== 'true');
    });

    on(document, 'click', function (e) {
        if (!dock || !dock.classList.contains('is-open')) return;
        if (dock.contains(e.target) || e.target.closest('a[href^="#"]')) return;
        setDock(false);
    });


    /* ------------------------------------------------------------------
       Accordions

       Panels ship expanded in the markup so the content is readable without
       JavaScript; here we collapse all but the first item in each group.
       ------------------------------------------------------------------ */
    function setItemState(item, open) {
        var trigger = item.querySelector('.accordion-trigger');
        var panel = item.querySelector('.accordion-panel');
        if (!trigger || !panel) return;
        trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
        item.classList.toggle('is-open', open);
        panel.hidden = !open;
    }

    to(document, '[data-accordion]').forEach(function (group) {
        var items = to(group, '.accordion-item');

        items.forEach(function (item, i) { setItemState(item, i === 0); });

        on(group, 'click', function (e) {
            var trigger = e.target.closest('.accordion-trigger');
            if (!trigger) return;
            var item = trigger.closest('.accordion-item');
            if (!item) return;
            setItemState(item, trigger.getAttribute('aria-expanded') !== 'true');
        });
    });


    /* ------------------------------------------------------------------
       Scroll reveal
       ------------------------------------------------------------------ */
    var revealItems = to(document, '.reveal');

    if (reduceMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        revealItems.forEach(function (el) { revealObserver.observe(el); });

        /* Safety net: never leave content hidden if an observer callback is missed */
        window.setTimeout(function () {
            to(document, '.reveal:not(.is-visible)').forEach(function (el) {
                el.classList.add('is-visible');
            });
        }, 4000);
    }


    /* ------------------------------------------------------------------
       Stat counters
       ------------------------------------------------------------------ */
    var statNumbers = to(document, '.stat-number');

    function runCounter(el) {
        var target = parseInt(el.getAttribute('data-target'), 10) || 0;
        var format = function (n) { return n.toLocaleString('en-US'); };

        if (reduceMotion) {
            el.textContent = format(target);
            return;
        }

        var duration = 1600;
        var startedAt = null;

        var step = function (timestamp) {
            if (startedAt === null) startedAt = timestamp;
            var progress = Math.min((timestamp - startedAt) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = format(Math.round(target * eased));
            if (progress < 1) window.requestAnimationFrame(step);
        };

        window.requestAnimationFrame(step);
    }

    if ('IntersectionObserver' in window) {
        var statObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                runCounter(entry.target);
                statObserver.unobserve(entry.target);
            });
        }, { threshold: 0.4 });

        statNumbers.forEach(function (el) { statObserver.observe(el); });
    } else {
        statNumbers.forEach(runCounter);
    }


    /* ------------------------------------------------------------------
       Active navigation state
       ------------------------------------------------------------------ */
    var navAnchors = to(document, '.nav-list a[href^="#"]');
    var trackedSections = navAnchors
        .map(function (a) { return document.querySelector(a.getAttribute('href')); })
        .filter(Boolean);

    if (trackedSections.length && 'IntersectionObserver' in window) {
        var ratios = new Map();

        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
            });

            var bestId = null;
            var bestRatio = 0;
            ratios.forEach(function (ratio, id) {
                if (ratio > bestRatio) { bestRatio = ratio; bestId = id; }
            });

            navAnchors.forEach(function (a) {
                a.classList.toggle('is-active', bestId !== null && a.getAttribute('href') === '#' + bestId);
            });
        }, { threshold: [0, 0.15, 0.35, 0.6], rootMargin: '-110px 0px -45% 0px' });

        trackedSections.forEach(function (section) { spy.observe(section); });
    }


    /* ------------------------------------------------------------------
       In-page anchor navigation (accounts for the fixed header + dock)
       ------------------------------------------------------------------ */
    function scrollToHash(hash) {
        var target = document.querySelector(hash);
        if (!target) return;
        target.scrollIntoView({
            behavior: reduceMotion ? 'auto' : 'smooth',
            block: 'start'
        });
    }

    on(document, 'click', function (e) {
        var link = e.target.closest && e.target.closest('a[href^="#"]');
        if (!link) return;

        var hash = link.getAttribute('href');
        if (!hash || hash === '#') return;
        if (!document.querySelector(hash)) return;

        e.preventDefault();

        setDock(false);

        if (navIsOpen()) {
            setNav(false);
            window.setTimeout(function () { scrollToHash(hash); }, 90);
        } else {
            scrollToHash(hash);
        }

        if (history.replaceState) history.replaceState(null, '', hash);
    });


    /* ------------------------------------------------------------------
       Landing on a page with a hash already in the URL
       Detail pages link back to "/index.html#section", so the browser
       restores the scroll position but not the offset the fixed header
       needs. Re-run the in-page scroll once the page has settled.
       ------------------------------------------------------------------ */
    (function syncInitialHash() {
        var initial = window.location.hash;
        if (!initial || initial === '#') return;
        if (!document.querySelector(initial)) return;

        var jump = function () { scrollToHash(initial); };
        window.setTimeout(jump, 120);
        window.addEventListener('load', jump, { once: true });
    })();


    /* ------------------------------------------------------------------
       Enquiry form -> WhatsApp
       ------------------------------------------------------------------ */
    var form = document.getElementById('contactForm');

    if (form) {
        var WHATSAPP_NUMBER = '923268653443';
        var errorBox = document.getElementById('formError');
        var submitBtn = document.getElementById('submitBtn');
        var btnLabel = submitBtn ? submitBtn.querySelector('.btn-label') : null;
        var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        on(form, 'submit', function (e) {
            e.preventDefault();

            var name = form.elements.name.value.trim();
            var email = form.elements.email.value.trim();
            var phone = form.elements.phone.value.trim();
            var service = form.elements.service.value;
            var message = form.elements.message.value.trim();

            if (!name || !EMAIL_RE.test(email) || !service) {
                if (errorBox) errorBox.hidden = false;
                var invalid = !name ? form.elements.name
                    : !EMAIL_RE.test(email) ? form.elements.email
                    : form.elements.service;
                invalid.focus();
                return;
            }

            if (errorBox) errorBox.hidden = true;

            var lines = [
                'Hello MAK RESIDENCY! I would like to speak to an immigration consultant.',
                '',
                'Name: ' + name,
                'Email: ' + email
            ];
            if (phone) lines.push('Phone: ' + phone);
            if (service) lines.push('Programme: ' + service);
            if (message) lines.push('Details: ' + message);
            lines.push('', 'Sent from makresidency.com');

            var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));

            var originalLabel = btnLabel ? btnLabel.textContent : '';

            if (btnLabel) btnLabel.textContent = 'Opening WhatsApp';
            if (submitBtn) submitBtn.disabled = true;

            window.open(url, '_blank', 'noopener');

            window.setTimeout(function () {
                if (btnLabel) btnLabel.textContent = 'WhatsApp opened';

                window.setTimeout(function () {
                    if (btnLabel) btnLabel.textContent = originalLabel;
                    if (submitBtn) submitBtn.disabled = false;
                    form.reset();
                }, 2600);
            }, 700);
        });
    }
})();
