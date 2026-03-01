/**
 * ============================================================
 * scripts/modules/cursor.js
 * Cursor personalizado: ponto + anel com efeito magnético.
 *
 * COMO FUNCIONA:
 * - cursorDot  : segue o mouse em tempo real via mousemove
 * - cursorRing : interpola suavemente em direção ao mouse
 *               usando requestAnimationFrame (efeito lag)
 *
 * EXPORTA: initCursor()
 * ============================================================
 */

export function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  // Em dispositivos touch não há cursor
  if (!dot || !ring || window.matchMedia('(hover: none)').matches) return;

  let dotX = 0, dotY = 0;   // posição atual do ponto
  let ringX = 0, ringY = 0; // posição interpolada do anel

  /**
   * Atualiza a posição do ponto instantaneamente
   */
  document.addEventListener('mousemove', (e) => {
    dotX = e.clientX;
    dotY = e.clientY;
    dot.style.left = `${dotX}px`;
    dot.style.top  = `${dotY}px`;
  });

  /**
   * Loop de animação do anel (interpolação suave)
   * Fator 0.12 = "preguiça" do anel.
   * Aumente para movimento mais rápido, diminua para mais lag.
   */
  function animateRing() {
    ringX += (dotX - ringX) * 0.12;
    ringY += (dotY - ringY) * 0.12;
    ring.style.left = `${ringX}px`;
    ring.style.top  = `${ringY}px`;
    requestAnimationFrame(animateRing);
  }

  animateRing();
}
