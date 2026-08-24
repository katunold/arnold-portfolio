import { asset, contact, header, setupSite } from './site';

const projects = [
  { title: 'Tulaa', image: 'project-tulaa.webp', focus: 'Lending workflows · CRM', stack: ['AngularJS', 'Java'], copy: 'A lending CRM that helped a Kenyan agricultural finance company register farmers and manage affordable small-scale loans.' },
  { title: 'Ekalaamu', image: 'project-ekalaamu.webp', focus: 'Publishing tools · REST API', stack: ['AngularJS', 'Node.js'], copy: 'A publishing platform for writers and creators, supported by a REST API for creating, editing, and sharing stories.' },
  { title: 'FastFood Fast', image: 'project-fastfood.webp', focus: 'Search · Ordering flow', stack: ['AngularJS', 'Java'], copy: 'A food-ordering experience connecting customers with local restaurants, searchable menus, and a simple ordering flow.' },
  { title: 'Authors Haven', image: 'project-authors.webp', focus: 'Collaborative publishing', stack: ['AngularJS', 'Python'], copy: 'A collaborative writing product designed to help authors publish their work and reach readers around the world.' },
];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header('work')}
  <main id="main">
    <header class="work-intro">
      <div class="shell-narrow reveal"><p class="eyebrow">Selected projects</p><h1>My work</h1><p>A selection of products I have designed, developed, and helped bring into the world.</p></div>
    </header>
    <section class="project-list shell" aria-label="Selected projects">
      ${projects.map((project, index) => `<article class="project reveal ${index % 2 ? 'reverse' : ''}">
        <div class="project-media"><img src="${asset(project.image)}" alt="${project.title} project preview" loading="lazy" decoding="async" /></div>
        <div class="project-card"><span class="project-index">0${index + 1}</span><h2>${project.title}</h2><p class="project-focus">${project.focus}</p><p>${project.copy}</p><div class="project-footer"><ul>${project.stack.map((item) => `<li>${item}</li>`).join('')}</ul><a href="mailto:katunold94@gmail.com?subject=${encodeURIComponent(`Project inquiry: ${project.title}`)}" aria-label="Ask Arnold about ${project.title}">Ask about it <span aria-hidden="true">↗</span></a></div></div>
      </article>`).join('')}
    </section>
    ${contact()}
  </main>`;

setupSite();
