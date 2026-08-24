import { asset, contact, header, setupSite, themeToggle } from './site';

const strengths = [
  { title: 'Career', icon: 'about-career.svg', copy: 'I build reliable web products across frontend systems, APIs, and the infrastructure that connects them.' },
  { title: 'Strengths', icon: 'about-strengths.svg', copy: 'Product-minded engineering, thoughtful collaboration, and a bias toward simple, maintainable solutions.' },
  { title: 'Beyond code', icon: 'about-hobbies.svg', copy: 'Football, design, and the communities that make Kampala an energetic place to create from.' },
];

const technologies = [
  { title: 'Frontend', image: 'tech-frontend.svg', copy: 'Semantic HTML, modern CSS, TypeScript, and accessible interfaces that remain fast on real devices.' },
  { title: 'Libraries', image: 'tech-vue.svg', copy: 'Component-driven products built with Vue, Angular, React, and pragmatic design systems.' },
  { title: 'Backend', image: 'tech-node.png', copy: 'Node.js services, REST APIs, relational data, integrations, testing, and dependable delivery.' },
];

const testimonials = [
  { name: 'Mark Ayebare', photo: 'testimonial-mark.png', quote: 'Arnold is a strong team player who consistently delivers thoughtful frontend work.' },
  { name: 'Arthor Nangai', photo: 'testimonial-arthor.png', quote: 'Arnold delivered on schedule, communicated clearly, and handled the work professionally from start to finish.' },
  { name: 'Joshua Lugada', photo: 'testimonial-joshua.png', quote: 'I am thankful for Arnold’s care and contribution in helping us develop our program.' },
];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header('home')}
  <main id="main">
    <section class="hero shell">
      <div class="hero-copy reveal">
        ${themeToggle()}
        <p class="eyebrow">Full-stack software engineer · Kampala, Uganda</p>
        <h1>Arnold <span>Katumba</span></h1>
        <p class="hero-intro">I design and build purposeful web products—from polished interfaces to the services behind them.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#contact">Hire me</a>
          <a class="text-link" href="/work.html">Explore selected work <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div class="hero-orbit" aria-hidden="true">
        ${['hero-react.svg','hero-docker.svg','hero-sass.svg','hero-angular.png','hero-node.png','hero-html.svg','hero-css.svg','hero-vue.svg'].map((name, index) => `<span class="orbit-item orbit-${index + 1}"><img src="${asset(name)}" alt="" /></span>`).join('')}
        <span class="orbit-core">AK</span>
      </div>
      <aside class="metrics reveal" aria-label="Professional highlights">
        <div><strong>End-to-end</strong><span>Product delivery</span></div>
        <div><strong>Frontend</strong><span>Systems and UX</span></div>
        <div><strong>Backend</strong><span>APIs and data</span></div>
        <a href="mailto:arnoldkatumba@gmail.com?subject=CV%20request">View my CV <span aria-hidden="true">↗</span></a>
      </aside>
    </section>

    <section class="about section shell" id="about" aria-labelledby="about-title">
      <div class="section-heading reveal">
        <p class="eyebrow">A little context</p>
        <h2 id="about-title">About me</h2>
        <p>I care about useful software, the people using it, and the teams responsible for keeping it healthy.</p>
      </div>
      <div class="about-layout">
        <div class="about-list">
          ${strengths.map((item) => `<article class="about-card reveal"><img src="${asset(item.icon)}" alt="" width="96" height="96" loading="lazy" decoding="async" /><div><h3>${item.title}</h3><p>${item.copy}</p></div></article>`).join('')}
        </div>
        <figure class="portrait reveal"><span></span><img src="${asset('portrait.png')}" alt="Arnold Katumba" loading="lazy" decoding="async" /></figure>
      </div>
    </section>

    <section class="section technologies" aria-labelledby="technologies-title">
      <div class="shell">
        <div class="section-heading reveal">
          <p class="eyebrow">Capabilities</p>
          <h2 id="technologies-title">Technologies</h2>
          <p>A flexible toolkit chosen around the product—not the other way around.</p>
        </div>
        <div class="technology-grid">
          ${technologies.map((item, index) => `<article class="technology-card reveal ${index === 1 ? 'featured' : ''}"><div class="technology-art"><img src="${asset(item.image)}" alt="" loading="lazy" decoding="async" /></div><h3>${item.title}</h3><p>${item.copy}</p></article>`).join('')}
        </div>
        <a class="button button-primary section-action" href="/work.html">View my work <span aria-hidden="true">→</span></a>
      </div>
    </section>

    <section class="section testimonials shell" aria-labelledby="testimonials-title">
      <div class="section-heading reveal"><p class="eyebrow">Kind words</p><h2 id="testimonials-title">Testimonials</h2></div>
      <div class="testimonial-grid">
        ${testimonials.map((item) => `<figure class="testimonial reveal"><div class="person"><img src="${asset(item.photo)}" alt="" loading="lazy" decoding="async" /><figcaption>${item.name}</figcaption></div><blockquote>“${item.quote}”</blockquote></figure>`).join('')}
      </div>
    </section>
    ${contact()}
  </main>`;

setupSite();
