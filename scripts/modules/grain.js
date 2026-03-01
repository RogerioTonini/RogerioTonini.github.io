/**
 * ============================================================
 * scripts/modules/grain.js
 * Grain canvas — textura de ruído animada no fundo.
 *
 * Gera pixels aleatórios em um <canvas> fixo para criar
 * uma textura visual de profundidade (estilo filme analógico).
 *
 * EXPORTA: initGrain()
 * ============================================================
 */

export function initGrain() {
  const canvas = document.getElementById('grainCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  /**
   * Redimensiona o canvas para cobrir toda a viewport.
   * Deve ser chamado no resize também.
   */
  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  /**
   * Preenche o canvas com pixels de cinza aleatório.
   * Alpha baixo (18) garante que o ruído seja sutil.
   */
  function drawGrain() {
    const { width, height } = canvas;
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() * 255;
      data[i]     = value; // R
      data[i + 1] = value; // G
      data[i + 2] = value; // B
      data[i + 3] = 18;    // Alpha — valor baixo = ruído sutil
    }

    ctx.putImageData(imageData, 0, 0);
  }

  // Inicialização
  resizeCanvas();
  drawGrain();

  // Reanima o ruído a cada 120ms para efeito sutil de movimento
  setInterval(drawGrain, 120);

  // Redesenha ao redimensionar a janela
  window.addEventListener('resize', () => {
    resizeCanvas();
    drawGrain();
  });
}
