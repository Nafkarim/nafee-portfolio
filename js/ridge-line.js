function initRidgeLine() {
  const rail = document.querySelector('.timeline__rail');
  const list = document.getElementById('timeline-list');
  if (!rail || !list) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('preserveAspectRatio', 'none');
  const bgPath = document.createElementNS(svgNS, 'path');
  bgPath.setAttribute('class', 'ridge-path-bg');
  const fgPath = document.createElementNS(svgNS, 'path');
  fgPath.setAttribute('class', 'ridge-path-fg');
  const marker = document.createElementNS(svgNS, 'circle');
  marker.setAttribute('r', '5');
  marker.setAttribute('fill', 'var(--color-accent-bright)');
  marker.style.filter = 'drop-shadow(0 0 6px rgba(227,100,20,0.8))';

  svg.appendChild(bgPath);
  svg.appendChild(fgPath);
  svg.appendChild(marker);
  rail.appendChild(svg);

  let totalLength = 0;
  let cardPositions = [];
  const cards = () => Array.from(list.querySelectorAll('.exp-card'));

  function buildPath() {
    const height = list.getBoundingClientRect().height || 1;
    const width = 90;
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);

    const listTop = list.getBoundingClientRect().top;
    cardPositions = cards().map((card) => {
      const r = card.getBoundingClientRect();
      return r.top - listTop + r.height / 2;
    });

    if (!cardPositions.length) return;

    const points = [{ x: width * 0.5, y: 0 }];
    cardPositions.forEach((y, i) => {
      const peakX = i % 2 === 0 ? width * 0.78 : width * 0.28;
      const valleyY = i === 0 ? y / 2 : (cardPositions[i - 1] + y) / 2;
      const valleyX = width * 0.5;
      if (i > 0) points.push({ x: valleyX, y: valleyY });
      points.push({ x: peakX, y });
    });
    points.push({ x: width * 0.5, y: height });

    const d = points
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
      .join(' ');

    bgPath.setAttribute('d', d);
    fgPath.setAttribute('d', d);
    totalLength = fgPath.getTotalLength();

    if (prefersReducedMotion) {
      fgPath.style.strokeDasharray = 'none';
      fgPath.style.strokeDashoffset = '0';
      cards().forEach((c) => c.classList.add('is-active'));
      marker.style.display = 'none';
    } else {
      fgPath.style.strokeDasharray = `${totalLength}`;
      fgPath.style.strokeDashoffset = `${totalLength}`;
    }
  }

  let ticking = false;
  function onScroll() {
    if (ticking || prefersReducedMotion || !totalLength) return;
    ticking = true;
    requestAnimationFrame(() => {
      const listRect = list.getBoundingClientRect();
      const viewportAnchor = window.innerHeight * 0.55;
      const progress = Math.max(
        0,
        Math.min(1, (viewportAnchor - listRect.top) / (listRect.height || 1))
      );

      fgPath.style.strokeDashoffset = `${totalLength * (1 - progress)}`;

      const point = fgPath.getPointAtLength(totalLength * progress);
      marker.setAttribute('cx', point.x);
      marker.setAttribute('cy', point.y);
      marker.style.opacity = progress > 0.01 ? '1' : '0';

      cards().forEach((card, i) => {
        const y = cardPositions[i];
        card.classList.toggle('is-active', progress * listRect.height >= y - 60);
      });

      ticking = false;
    });
  }

  buildPath();
  onScroll();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    buildPath();
    onScroll();
  });

  if (window.ResizeObserver) {
    const ro = new ResizeObserver(() => {
      buildPath();
      onScroll();
    });
    ro.observe(list);
  }

  list.addEventListener('toggle', () => {
    setTimeout(() => {
      buildPath();
      onScroll();
    }, 350);
  }, true);
}
