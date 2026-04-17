/* NN Construction — site chrome (nav, footer) and page helpers.
 * Vanilla JS so every page loads without React.
 */
(function () {
  const D = window.NN_DATA;
  if (!D) return;

  const PAGES = [
    { label: "Home",         href: "home.html" },
    { label: "Services",     href: "services-interior.html", altHrefs: ["services-interior.html","services-exterior.html"] },
    { label: "Portfolio",    href: "portfolio.html" },
    { label: "About",        href: "about.html" },
    { label: "Testimonials", href: "testimonials.html" },
    { label: "FAQ",          href: "faq.html" },
    { label: "Contact",      href: "contact.html" },
  ];

  function currentFile() {
    const m = (location.pathname || "").split("/").pop() || "home.html";
    return m;
  }

  function renderNav() {
    const slot = document.querySelector('[data-slot="nav"]');
    if (!slot) return;
    const cur = currentFile();
    const linksHtml = PAGES.map(p => {
      const active = p.href === cur || (p.altHrefs && p.altHrefs.includes(cur));
      return `<a class="nn-nav-link ${active ? 'active' : ''}" href="${p.href}">${p.label}</a>`;
    }).join("");

    slot.outerHTML = `
      <nav class="nn-nav">
        <div class="nn-nav-inner">
          <a class="nn-brand" href="home.html">
            <img class="nn-brand-mark" src="assets/logo-mark.svg" alt="NN monogram">
            <div>
              <div class="nn-brand-word">NN Construction</div>
              <div class="nn-brand-tag">Your dream · Our hardwork</div>
            </div>
          </a>
          <div class="nn-nav-links">${linksHtml}</div>
          <a class="nn-btn nn-btn-primary" href="contact.html">Get a quote →</a>
        </div>
      </nav>
    `;
  }

  function renderFooter() {
    const slot = document.querySelector('[data-slot="footer"]');
    if (!slot) return;
    slot.outerHTML = `
      <footer class="nn-footer">
        <div class="nn-footer-inner">
          <div class="nn-footer-brand">
            <img src="assets/logo.svg" alt="NN Construction">
            <p class="nn-footer-blurb">Full-service construction. Residential &amp; commercial. Licensed MHIC #132-8847.</p>
          </div>
          <div>
            <div class="nn-eyebrow">Services</div>
            <ul class="nn-footer-list">
              <li><a href="services-interior.html">Interior</a></li>
              <li><a href="services-exterior.html">Exterior</a></li>
              <li><a href="services-exterior.html#roofing">Roofing</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <div class="nn-eyebrow">Company</div>
            <ul class="nn-footer-list">
              <li><a href="about.html">About</a></li>
              <li><a href="testimonials.html">Testimonials</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div>
            <div class="nn-eyebrow">Office</div>
            <div class="nn-footer-office">
              ${D.address}<br>
              ${D.phone}<br>
              ${D.email}
            </div>
          </div>
        </div>
        <div class="nn-footer-base">
          <span>© 2026 NN Construction BD Corporation</span>
          <span>MHIC #132-8847 · DC BBL-200489 · VA 2705-189-332</span>
        </div>
      </footer>
    `;
  }

  function initFAQ() {
    document.querySelectorAll('[data-faq]').forEach((el, idx) => {
      if (idx === 0) el.setAttribute('aria-expanded', 'true');
      else el.setAttribute('aria-expanded', 'false');
      el.addEventListener('click', () => {
        const open = el.getAttribute('aria-expanded') === 'true';
        el.setAttribute('aria-expanded', open ? 'false' : 'true');
        el.querySelector('.nn-faq-toggle').textContent = open ? '+' : '−';
      });
    });
  }

  function initContactForm() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const wrap = form.querySelector('[data-form-inner]');
      const sent = form.querySelector('[data-form-sent]');
      wrap.style.display = 'none';
      sent.style.display = 'block';
      const idSlot = sent.querySelector('[data-request-id]');
      if (idSlot) idSlot.textContent = `NN-${Math.floor(Math.random()*9000+1000)}`;
    });
  }

  function initPortfolioFilter() {
    const tabs = document.querySelectorAll('[data-portfolio-tab]');
    const cards = document.querySelectorAll('[data-portfolio-card]');
    if (!tabs.length) return;
    tabs.forEach(t => t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      const f = t.dataset.portfolioTab;
      cards.forEach(c => {
        if (f === 'All' || c.dataset.cat === f) c.style.display = '';
        else c.style.display = 'none';
      });
    }));
  }

  function initProjectModal() {
    const modal = document.querySelector('[data-modal]');
    if (!modal) return;
    const body = modal.querySelector('[data-modal-body]');
    document.querySelectorAll('[data-project-open]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const slug = el.dataset.projectOpen;
        const p = D.projects.find(x => x.slug === slug);
        if (!p) return;
        body.innerHTML = `
          <img src="assets/img/${p.img}.svg" style="width:100%;display:block;">
          <div style="padding:48px 40px;">
            <div class="nn-eyebrow">${p.cat} · ${p.year}</div>
            <h2 style="font: 500 40px/1.1 var(--ff-sans); letter-spacing:-0.015em; margin: 14px 0 0;">${p.name}</h2>
            <div style="color: var(--fg-3); margin-top:10px; font-size:14px;">${p.loc} · <span class="nn-mono">${p.area}</span></div>
            <p style="margin:28px 0 0; color: var(--fg-2); max-width:620px; line-height:1.65;">${p.brief}</p>
          </div>
        `;
        modal.style.display = 'flex';
      });
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('[data-modal-close]')) {
        modal.style.display = 'none';
      }
    });
  }

  function initHero() {
    const hero = document.querySelector('[data-hero]');
    if (!hero) return;

    const bandFoundation = hero.querySelector('[data-band-foundation]');
    const bandFraming    = hero.querySelector('[data-band-framing]');
    const bandFinish     = hero.querySelector('[data-band-finish]');
    const photo          = hero.querySelector('[data-hero-photo]');
    const stageLabel     = hero.querySelector('[data-hero-stage]');
    const scrubber       = hero.querySelector('[data-hero-scrub]');
    const playBtn        = hero.querySelector('[data-hero-play]');

    let p = 0;
    let scrollDriven = true;

    function apply(progress) {
      p = Math.max(0, Math.min(1, progress));
      // As user scrolls through hero: foundation fades, framing rises, finish resolves
      const fadeFoundation = 1 - p;                          // 1 → 0
      const riseFraming    = Math.min(1, p * 1.2);            // rises into place
      const resolveFinish  = p;                               // 0 → 1

      if (bandFoundation) {
        bandFoundation.style.opacity = 0.25 + 0.7 * fadeFoundation;
        bandFoundation.style.transform = `translateY(${8 * p}px)`;
      }
      if (bandFraming) {
        bandFraming.style.opacity = 0.55 + 0.35 * (1 - Math.abs(0.5 - p) * 2);
        bandFraming.style.transform = `translateY(${-10 * riseFraming}px)`;
      }
      if (bandFinish) {
        bandFinish.style.opacity = 0.6 + 0.4 * resolveFinish;
      }
      if (photo) {
        photo.style.opacity = 0.35 + 0.55 * resolveFinish;
        photo.style.filter = `saturate(${0.7 + 0.35 * resolveFinish}) contrast(${1 + 0.08 * resolveFinish})`;
        photo.style.transform = `scale(${1.04 - 0.04 * resolveFinish})`;
      }

      if (stageLabel) {
        stageLabel.textContent =
          p > 0.66 ? "03 · Finish" :
          p > 0.33 ? "02 · Framing" :
                     "01 · Foundation";
      }
      if (scrubber && !scrubber.matches(':active')) {
        scrubber.value = Math.round(p * 1000);
      }
    }

    function onScroll() {
      if (!scrollDriven) return;
      const r = hero.getBoundingClientRect();
      // Progress: 0 when hero top at viewport top; 1 when hero bottom at viewport top.
      const progress = Math.max(0, Math.min(1, -r.top / r.height));
      apply(progress);
    }

    if (scrubber) {
      scrubber.addEventListener('input', () => {
        scrollDriven = false;
        apply(scrubber.value / 1000);
        if (playBtn) playBtn.textContent = '◎';
      });
    }
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        scrollDriven = !scrollDriven;
        playBtn.textContent = scrollDriven ? '⤓' : '◎';
        if (scrollDriven) onScroll();
      });
      playBtn.textContent = '⤓';
      playBtn.title = 'Scroll drives the sequence';
    }

    apply(0);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    renderFooter();
    initFAQ();
    initContactForm();
    initPortfolioFilter();
    initProjectModal();
    initHero();
  });
})();
