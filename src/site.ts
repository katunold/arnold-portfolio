const assetRoot = '/assets/figma';

export const asset = (name: string) => `${assetRoot}/${name}`;

export const header = (active: 'home' | 'work') => `
  <header class="site-header">
    <div class="shell nav-shell">
      <a class="brand" href="/" aria-label="Arnold Katumba, home">
        <img src="${asset('logo.svg')}" alt="" width="40" height="37" />
        <span>arnold</span>
      </a>
      <button class="menu-toggle" type="button" aria-controls="site-nav" aria-expanded="false">
        <span class="sr-only">Open navigation</span><i></i><i></i><i></i>
      </button>
      <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
        <a ${active === 'home' ? 'aria-current="page"' : ''} href="/">Home</a>
        <a href="/#about">About</a>
        <a ${active === 'work' ? 'aria-current="page"' : ''} href="/work.html">Work</a>
        <a href="#contact">Contact</a>
        <a class="nav-cta" href="mailto:katunold94@gmail.com?subject=CV%20request">View CV</a>
      </nav>
    </div>
  </header>`;

export const themeToggle = () => `
  <button class="theme-toggle" type="button" aria-pressed="false">
    <span class="toggle-track" aria-hidden="true"><span></span></span>
    <span class="theme-label">Toggle dark mode</span>
  </button>`;

export const contact = () => `
  <section class="contact-section" id="contact" aria-labelledby="contact-title">
    <div class="contact-card shell-narrow reveal">
      <h2 id="contact-title">Let’s build something useful.</h2>
      <p>I’m available for thoughtful product work, frontend architecture, and full-stack web applications.</p>
      <div class="contact-grid">
        <div>
          <h3>Find me online</h3>
          <div class="social-links">
            <a href="https://github.com/katunold" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/katumba-arnold-7a1270b3/" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com/mwami_katumba" rel="noreferrer">X / Twitter</a>
          </div>
        </div>
        <address>
          <a href="mailto:katunold94@gmail.com">katunold94@gmail.com</a>
          <a href="tel:+256785067219">+256 785 067 219</a>
        </address>
      </div>
    </div>
  </section>
  <footer class="site-footer">
    <p>© <span data-year></span> Arnold Katumba. Designed and built in Kampala.</p>
  </footer>`;

export function setupSite() {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('arnold-theme');
  const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme ?? (preferredDark ? 'dark' : 'light');

  const applyTheme = (theme: string) => {
    root.dataset.theme = theme;
    const isDark = theme === 'dark';
    document.querySelectorAll<HTMLButtonElement>('.theme-toggle').forEach((button) => {
      button.setAttribute('aria-pressed', String(isDark));
      const label = button.querySelector('.theme-label');
      if (label) label.textContent = `Toggle ${isDark ? 'light' : 'dark'} mode`;
    });
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#181c1f' : '#ffffff');
  };

  applyTheme(initialTheme);
  document.querySelectorAll('.theme-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('arnold-theme', next);
      applyTheme(next);
    });
  });

  const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
  const nav = document.querySelector<HTMLElement>('.site-nav');
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('is-open', !open);
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }));

  document.querySelectorAll<HTMLElement>('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible'));
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
}
