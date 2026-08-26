function initCursor() {
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
  if (isCoarsePointer) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  const label = document.createElement('span');
  label.className = 'cursor-ring__label';
  ring.appendChild(label);
  document.body.appendChild(dot);
  document.body.appendChild(ring);
  document.body.classList.add('has-custom-cursor');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let activated = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!activated) {
      activated = true;
      document.body.classList.add('cursor-active');
      ringX = mouseX;
      ringY = mouseY;
    }
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  window.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
  window.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));

  function tick() {
    const lerpFactor = prefersReducedMotion ? 1 : 0.18;
    ringX += (mouseX - ringX) * lerpFactor;
    ringY += (mouseY - ringY) * lerpFactor;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, .project-card, [data-magnetic], [data-cursor-text]');
    if (!target) return;
    document.body.classList.add('cursor-hover');
    label.textContent = target.dataset.cursorText || '';
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('a, button, .project-card, [data-magnetic], [data-cursor-text]');
    if (!target) return;
    const related = e.relatedTarget && e.relatedTarget.closest
      ? e.relatedTarget.closest('a, button, .project-card, [data-magnetic], [data-cursor-text]')
      : null;
    if (related === target) return;
    document.body.classList.remove('cursor-hover');
    label.textContent = '';
  });

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('p, .exp-card__body li, .project-card__desc')) {
      document.body.classList.add('cursor-text');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('p, .exp-card__body li, .project-card__desc')) {
      document.body.classList.remove('cursor-text');
    }
  });

  if (!prefersReducedMotion) {
    document.querySelectorAll('[data-magnetic]').forEach((elMag) => {
      let raf = null;
      elMag.addEventListener('mousemove', (e) => {
        const rect = elMag.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        const strength = 0.35;
        const maxPull = 10;
        const tx = Math.max(Math.min(relX * strength, maxPull), -maxPull);
        const ty = Math.max(Math.min(relY * strength, maxPull), -maxPull);
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          elMag.style.transform = `translate(${tx}px, ${ty}px)`;
        });
      });
      elMag.addEventListener('mouseleave', () => {
        elMag.style.transition = 'transform 0.4s var(--ease-out)';
        elMag.style.transform = 'translate(0, 0)';
        setTimeout(() => { elMag.style.transition = ''; }, 400);
      });
    });
  }
}
