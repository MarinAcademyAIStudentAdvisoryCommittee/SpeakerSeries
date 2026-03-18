// Marin Academy – AI Student Advisory Committee
// main.js

// ── Mobile Nav Toggle ──────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── Scroll-based Nav Shadow ────────────────────────────────
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 2px 20px rgba(0,0,0,.35)'
      : 'none';
  }, { passive: true });
}

// ── Contact Form Widget ────────────────────────────────────
const CONTACT_EMAIL = 'rmansfield@ma.org';

function injectContactWidget() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="contact-fab">
      <button class="contact-fab__btn" id="contact-fab-btn" aria-label="Open contact form" aria-expanded="false">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <rect x="1" y="3" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.6"/>
          <path d="M1 5.5l8 5 8-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
        Contact Us
      </button>
    </div>

    <div class="contact-panel" id="contact-panel" role="dialog" aria-modal="true" aria-label="Contact form">
      <div class="contact-panel__header">
        <div>
          <div class="contact-panel__title">Get in Touch</div>
          <div class="contact-panel__sub">We'll get back to you soon</div>
        </div>
        <button class="contact-panel__close" id="contact-close" aria-label="Close contact form">✕</button>
      </div>

      <div class="contact-panel__body" id="contact-form-body">
        <div class="contact-field">
          <label for="contact-name">Your Name</label>
          <input type="text" id="contact-name" placeholder="e.g. Alex Smith" autocomplete="name" />
        </div>
        <div class="contact-field">
          <label for="contact-email">Your Email</label>
          <input type="email" id="contact-email" placeholder="you@example.com" autocomplete="email" />
        </div>
        <div class="contact-field">
          <label for="contact-subject">Subject</label>
          <input type="text" id="contact-subject" placeholder="e.g. Speaking invitation, Question…" />
        </div>
        <div class="contact-field">
          <label for="contact-msg">Message</label>
          <textarea id="contact-msg" rows="4" placeholder="Tell us what's on your mind…"></textarea>
        </div>
        <button class="contact-panel__send" id="contact-send">Send Message →</button>
      </div>

      <div class="contact-panel__success" id="contact-success">
        <div class="success-icon">✅</div>
        <h3>Message Ready!</h3>
        <p>Your email client will open with the message pre-filled and addressed to the committee.</p>
      </div>
    </div>
  `);

  const fab     = document.getElementById('contact-fab-btn');
  const panel   = document.getElementById('contact-panel');
  const closeBtn= document.getElementById('contact-close');
  const sendBtn = document.getElementById('contact-send');
  const formBody= document.getElementById('contact-form-body');
  const success = document.getElementById('contact-success');

  function openPanel() {
    panel.classList.add('open');
    fab.setAttribute('aria-expanded', 'true');
    document.getElementById('contact-name').focus();
  }

  function closePanel() {
    panel.classList.remove('open');
    fab.setAttribute('aria-expanded', 'false');
  }

  fab.addEventListener('click', () => {
    panel.classList.contains('open') ? closePanel() : openPanel();
  });

  closeBtn.addEventListener('click', closePanel);

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !fab.contains(e.target)) {
      closePanel();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePanel();
  });

  sendBtn.addEventListener('click', () => {
    const name    = document.getElementById('contact-name').value.trim();
    const email   = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim() || 'Message from MA Website';
    const msg     = document.getElementById('contact-msg').value.trim();

    if (!name || !email || !msg) {
      sendBtn.textContent = 'Please fill in all fields';
      sendBtn.style.background = '#6b7280';
      setTimeout(() => {
        sendBtn.textContent = 'Send Message →';
        sendBtn.style.background = '';
      }, 2000);
      return;
    }

    const body = `Name: ${name}\nEmail: ${email}\n\n${msg}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    formBody.style.display = 'none';
    success.style.display  = 'block';

    setTimeout(() => {
      closePanel();
      setTimeout(() => {
        formBody.style.display = '';
        success.style.display  = 'none';
        document.getElementById('contact-name').value    = '';
        document.getElementById('contact-email').value   = '';
        document.getElementById('contact-subject').value = '';
        document.getElementById('contact-msg').value     = '';
      }, 400);
    }, 3000);
  });
}

injectContactWidget();
