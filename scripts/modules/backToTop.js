/**
 * ============================================================
 * scripts/modules/backToTop.js
 * Botão "Voltar ao topo" — aparece após 300px de scroll.
 *
 * EXPORTA: initBackToTop()
 * ============================================================
 */

export function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  /**
   * Exibe o botão ao rolar mais de 300px,
   * esconde ao retornar ao topo.
   */
  window.addEventListener('scroll', () => {
    btn.classList.toggle('back-to-top--visible', window.scrollY > 300);
  }, { passive: true });

  /**
   * Ao clicar, retorna suavemente ao topo da página.
   */
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
