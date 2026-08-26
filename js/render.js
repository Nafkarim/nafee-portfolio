function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderIdentity() {
  document.querySelectorAll('[data-bind="email"]').forEach((n) => {
    n.textContent = IDENTITY.email;
    n.href = `mailto:${IDENTITY.email}`;
  });
  document.querySelectorAll('[data-bind="linkedin"]').forEach((n) => {
    n.textContent = IDENTITY.linkedinLabel;
    n.href = IDENTITY.linkedin;
  });
  document.querySelectorAll('[data-bind="resume"]').forEach((n) => {
    n.href = IDENTITY.resume;
  });
  const positioning = document.getElementById('hero-positioning');
  if (positioning) positioning.textContent = IDENTITY.positioning;
}

function renderAbout() {
  const quote = document.getElementById('about-quote');
  if (quote) quote.textContent = ABOUT.quote;

  const body = document.getElementById('about-body');
  if (body) {
    body.innerHTML = '';
    ABOUT.paragraphs.forEach((p) => body.appendChild(el('p', null, p)));
  }
}

function renderExperience() {
  const list = document.getElementById('timeline-list');
  if (!list) return;
  list.innerHTML = '';

  EXPERIENCE.forEach((job, i) => {
    const card = el('details', 'exp-card card');
    card.dataset.index = i;
    if (i === 0) card.open = true;

    const summary = el('summary');
    const head = el('div', 'exp-card__head');
    head.appendChild(el('span', 'exp-card__meta', job.location + (job.present ? '' : '')));
    head.appendChild(el('span', 'exp-card__role', job.role));
    const companyText = job.companyNote ? `${job.company} <span class="exp-card__company-note">${job.companyNote}</span>` : job.company;
    head.appendChild(el('span', 'exp-card__company', companyText));
    const dates = el('span', job.present ? 'exp-card__meta exp-card__present' : 'exp-card__meta', job.dates);
    head.appendChild(dates);
    if (job.metric) head.appendChild(el('span', 'exp-card__metric', job.metric));

    summary.appendChild(head);

    const logoSlot = el('div', 'exp-card__logo-slot');
    if (job.logo) {
      const logo = document.createElement('img');
      logo.className = 'exp-card__logo';
      logo.src = job.logo;
      logo.alt = `${job.company} logo`;
      logoSlot.appendChild(logo);
    }
    summary.appendChild(logoSlot);

    summary.appendChild(el('span', 'exp-card__toggle'));

    const body = el('div', 'exp-card__body');
    const ul = el('ul');
    job.bullets.forEach((b) => ul.appendChild(el('li', null, b)));
    body.appendChild(ul);

    if (job.link) {
      const linkWrap = el('div', 'exp-card__link-wrap');
      const a = el('a', 'btn btn--ghost btn--small exp-card__link', job.link.label + ' ↗');
      a.href = job.link.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.dataset.magnetic = '';
      a.dataset.cursorText = 'Open';
      linkWrap.appendChild(a);
      if (job.linkNote) linkWrap.appendChild(el('span', 'exp-card__link-note', job.linkNote));
      body.appendChild(linkWrap);
    }

    card.appendChild(summary);
    card.appendChild(body);
    list.appendChild(card);
  });
}

function renderResearch() {
  const grid = document.getElementById('research-grid');
  if (!grid) return;
  grid.innerHTML = '';

  RESEARCH.forEach((r) => {
    const card = el('div', 'card research-card');
    card.setAttribute('data-reveal', '');
    const icon = el('div', 'research-card__icon', '⚙');
    const meta = el('span', 'research-card__meta', r.dates);
    const title = el('h3', null, r.group);
    const role = el('p', null, `<strong style="color:var(--color-text-primary)">${r.role}</strong>`);
    const list = el('ul', 'research-card__list');
    r.bullets.forEach((b) => list.appendChild(el('li', null, b)));
    card.appendChild(icon);
    card.appendChild(meta);
    card.appendChild(title);
    card.appendChild(role);
    card.appendChild(list);
    grid.appendChild(card);
  });
}

function renderProjects() {
  const grid = document.getElementById('project-grid');
  if (!grid) return;
  grid.innerHTML = '';

  PROJECTS.forEach((p) => {
    const card = el('div', 'card project-card');
    card.dataset.tags = p.tags.join('|');
    card.setAttribute('data-reveal', '');
    card.dataset.cursorText = 'View';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', 'false');

    card.appendChild(el('div', 'chip-row', p.tags.map((t) => `<span class="chip">${t}</span>`).join('')));
    card.appendChild(el('h3', 'project-card__title', p.title));
    card.appendChild(el('p', 'project-card__hook', p.hook));

    const descWrap = el('div', 'project-card__desc');
    const descInner = el('div', 'project-card__desc-inner');
    const list = el('ul');
    p.bullets.forEach((b) => list.appendChild(el('li', null, b)));
    descInner.appendChild(list);

    if (p.link) {
      const a = el('a', 'btn btn--ghost btn--small project-card__link', p.link.label + ' ↗');
      a.href = p.link.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.dataset.magnetic = '';
      a.dataset.cursorText = 'Open';
      a.addEventListener('click', (e) => e.stopPropagation());
      descInner.appendChild(a);
    }

    descWrap.appendChild(descInner);
    card.appendChild(descWrap);

    const expand = () => {
      const isOpen = card.classList.toggle('is-expanded');
      card.setAttribute('aria-expanded', String(isOpen));
    };
    card.addEventListener('click', expand);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        expand();
      }
    });

    grid.appendChild(card);
  });
}

function renderLeadership() {
  const featured = document.getElementById('leadership-featured');
  const list = document.getElementById('leadership-list');
  if (featured) {
    featured.setAttribute('data-reveal', '');
    featured.innerHTML = '';
    featured.appendChild(el('span', 'exp-card__meta', LEADERSHIP_FEATURED.dates));
    featured.appendChild(el('h3', null, LEADERSHIP_FEATURED.org));
    featured.appendChild(el('p', null, `<strong style="color:var(--color-text-primary)">${LEADERSHIP_FEATURED.role}</strong>`));
    const ul = el('ul', 'leadership-feature__list');
    LEADERSHIP_FEATURED.bullets.forEach((b) => ul.appendChild(el('li', null, b)));
    featured.appendChild(ul);
  }
  if (list) {
    list.innerHTML = '';
    LEADERSHIP_LIST.forEach((item, i) => {
      const row = el('div', 'leadership-item');
      row.setAttribute('data-reveal', '');
      row.style.setProperty('--reveal-delay', `${i * 0.06}s`);
      const left = el('div');
      left.appendChild(el('div', 'leadership-item__name', item.org));
      left.appendChild(el('div', 'leadership-item__role', item.role));
      row.appendChild(left);
      row.appendChild(el('span', 'leadership-item__role', item.dates));
      list.appendChild(row);
    });
  }
}

function renderOutside() {
  const grid = document.getElementById('outside-grid');
  if (!grid) return;
  grid.innerHTML = '';

  OUTSIDE.forEach((item, i) => {
    const card = el('div', 'card outside-card');
    card.setAttribute('data-reveal', '');
    card.style.setProperty('--reveal-delay', `${i * 0.08}s`);

    const content = el('div', 'outside-card__content');
    content.appendChild(el('div', 'outside-card__icon', item.icon));
    content.appendChild(el('h3', null, item.title));
    content.appendChild(el('p', null, item.body));

    if (item.countries) {
      const row = el('div', 'country-row');
      item.countries.forEach((c) => {
        const btn = el('button', 'country-flag', c.flag);
        btn.type = 'button';
        btn.title = c.name;
        btn.setAttribute('aria-label', `View photos from ${c.name}`);
        btn.dataset.magnetic = '';
        btn.dataset.cursorText = 'View';
        btn.addEventListener('click', () => {
          if (window.openLightbox) window.openLightbox(c.image, `${c.name} — Nafee's trip`);
        });
        row.appendChild(btn);
      });
      content.appendChild(row);
    } else if (item.tags) {
      content.appendChild(el('div', 'chip-row', item.tags.map((t) => `<span class="chip">${t}</span>`).join('')));
    }

    if (item.link) {
      const a = el('a', 'btn btn--ghost btn--small outside-card__link', item.link.label + ' ↗');
      a.href = item.link.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.dataset.magnetic = '';
      a.dataset.cursorText = 'Open';
      content.appendChild(a);
    }

    card.appendChild(content);

    if (item.image) {
      const imageWrap = el('div', 'outside-card__image-wrap');
      const img = document.createElement('img');
      img.className = 'outside-card__image';
      img.src = item.image.src;
      img.alt = item.image.alt;
      img.loading = 'lazy';
      imageWrap.appendChild(img);
      card.appendChild(imageWrap);
    }

    grid.appendChild(card);
  });
}

function renderAll() {
  renderIdentity();
  renderAbout();
  renderExperience();
  renderProjects();
  renderResearch();
  renderLeadership();
  renderOutside();
  document.getElementById('year').textContent = new Date().getFullYear();
}
