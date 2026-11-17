// Scroll-to-top button
(function () {
  const btn = document.querySelector('.scroll-to-top');
  if (!btn) return;
  const toggle = () => btn.classList.toggle('visible', window.scrollY > 300);
  window.addEventListener('scroll', toggle, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  toggle();
})();

// Abstract / BibTeX toggles and BibTeX copy
document.addEventListener('click', (e) => {
  const toggle = e.target.closest('.toggle');
  if (toggle) {
    const panel = document.getElementById(toggle.dataset.target);
    if (!panel) return;
    const open = panel.hidden;
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.classList.toggle('is-active', open);
    return;
  }
  const copy = e.target.closest('.copy-btn');
  if (copy) {
    const code = copy.parentNode.querySelector('code');
    if (!code || !navigator.clipboard) return;
    navigator.clipboard.writeText(code.textContent).then(() => {
      const old = copy.innerHTML;
      copy.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Copied';
      copy.classList.add('copied');
      setTimeout(() => { copy.innerHTML = old; copy.classList.remove('copied'); }, 1500);
    }).catch(() => {});
  }
});
