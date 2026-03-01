/**
 * ============================================================
 * scripts/modules/typewriter.js
 * Efeito de digitação/apagamento de texto no hero.
 *
 * COMO PERSONALIZAR:
 * Edite o array PHRASES abaixo com seus cargos/descrições.
 * Os tempos de digitação, apagamento e pausa também são
 * configuráveis via as constantes no topo da função.
 *
 * EXPORTA: initTypewriter()
 * ============================================================
 */

export function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  // ── Configurações ──────────────────────────────────────────

  /**
   * PERSONALIZE: Edite as frases abaixo com seus cargos
   */
  const PHRASES = [
    'Analista de Dados',
    'Especialista em Power BI',
    'Python Developer',
    'Data Storyteller',
    'SQL & Databases',
  ];

  const SPEED_TYPE   = 100;  // ms entre cada caractere digitado
  const SPEED_DELETE = 60;   // ms entre cada caractere apagado
  const PAUSE_AFTER  = 2200; // ms de pausa após completar a frase
  const PAUSE_BEFORE = 400;  // ms de pausa antes de começar nova frase

  // ── Estado interno ─────────────────────────────────────────
  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;

  /**
   * Função recursiva que alterna entre digitar e apagar.
   *
   * Fluxo:
   * 1. Digita caractere por caractere (charIndex++)
   * 2. Ao completar, pausa PAUSE_AFTER ms e inicia apagamento
   * 3. Apaga caractere por caractere (charIndex--)
   * 4. Ao esvaziar, avança para a próxima frase e repete
   */
  function tick() {
    const currentPhrase = PHRASES[phraseIndex];

    if (isDeleting) {
      el.textContent = currentPhrase.slice(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = currentPhrase.slice(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? SPEED_DELETE : SPEED_TYPE;

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Frase completa → pausa e começa a apagar
      delay = PAUSE_AFTER;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Frase apagada → avança para próxima e pausa
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % PHRASES.length;
      delay = PAUSE_BEFORE;
    }

    setTimeout(tick, delay);
  }

  // Inicia com delay para não competir com as animações da página
  setTimeout(tick, 800);
}
