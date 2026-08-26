function initLightbox() {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.innerHTML = `
    <button class="lightbox__close" type="button" aria-label="Close">&times;</button>
    <div class="lightbox__empty">Photo coming soon.</div>
    <img class="lightbox__img" alt="" />
  `;
  document.body.appendChild(overlay);

  const img = overlay.querySelector('.lightbox__img');
  const empty = overlay.querySelector('.lightbox__empty');
  const closeBtn = overlay.querySelector('.lightbox__close');

  function close() {
    overlay.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  window.openLightbox = function (src, alt) {
    if (src) {
      img.src = src;
      img.alt = alt || '';
      img.style.display = '';
      empty.style.display = 'none';
    } else {
      img.style.display = 'none';
      empty.style.display = '';
      empty.textContent = 'Photo coming soon.';
    }
    overlay.classList.add('is-open');
    document.body.classList.add('lightbox-open');
  };
}
