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
  {
    name: 'Eric Snyder',
    role: 'Chief Technology Officer · LevelTen Energy',
    photo: 'testimonial-eric.jpeg',
    quote: 'Arnold worked with LevelTen on our Angular and Node web application. We saw him grow his skills as a web developer while taking time to learn features, contribute during meetings, and care about the end-user experience.',
  },
  {
    name: 'Constantine Asava',
    role: 'Senior Software Engineer · ChurchPad',
    photo: 'testimonial-constantine.jpeg',
    quote: 'Arnold took the initiative to onboard me as a new developer, familiarising me with the team conventions and codebase. He is a very conscientious developer, was a great asset to the project, and made joining the team much easier.',
  },
  {
    name: 'Matthew O. Wacha',
    role: 'Lead Software Engineer · NOBON',
    photo: 'testimonial-matthew.jpeg',
    quote: 'Having managed Arnold across two teams, I saw him consistently demonstrate a strong understanding of his tasks. The team relied on his problem-solving skills when challenges arose. He is also a great communicator who readily steps up to the occasion.',
  },
  {
    name: 'Naume Kizza',
    role: 'Full Stack Engineer · Thrivetec Limited',
    photo: 'testimonial-naume.jpeg',
    quote: 'Arnold is a proactive, creative, and hard-working team player who goes the extra mile. He readily shares his knowledge, listens carefully, and puts himself in the client’s shoes. His self-driven approach and positive collaboration make him a great asset to any team.',
  },
  {
    name: 'Herman Lule',
    role: 'Frontend Web Developer · Xtract',
    photo: 'testimonial-herman.jpeg',
    quote: "Arnold is an organized team player with a keen eye for improvement, consistently seeking the right solution rather than one that merely works. Across three teams, I have valued the energy and motivation he brings. He is a truly talented engineer.",
  },
  {
    name: 'Jackie Ochola',
    role: 'General Manager · Wave Mobile Money',
    photo: 'testimonial-jackie.jpeg',
    quote: 'Arnold is a brilliant, highly skilled developer who works hard and consistently delivers quality results. He pursues self-improvement while bringing the team along and readily tackles new challenges. His great attitude and collaborative spirit make him a joy to work with.',
  },
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

    <section class="section testimonials shell" id="testimonials" aria-labelledby="testimonials-title">
      <div class="section-heading reveal"><p class="eyebrow">Kind words</p><h2 id="testimonials-title">Testimonials</h2></div>
      <div class="testimonial-grid">
        ${testimonials.map((item) => `<figure class="testimonial reveal"><figcaption class="person"><img src="${asset(item.photo)}" alt="" loading="lazy" decoding="async" /><span><strong>${item.name}</strong><small>${item.role}</small></span></figcaption><blockquote>“${item.quote}”</blockquote></figure>`).join('')}
      </div>
    </section>
    ${contact()}
  </main>`;

setupSite();
