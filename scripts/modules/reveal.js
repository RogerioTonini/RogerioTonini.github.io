/**
 * ============================================================
 * scripts/modules/reveal.js
 * Reveal on scroll + contadores animados.
 *
 * REVEAL:
 * Usa IntersectionObserver para adicionar .visible em elementos
 * com classe .reveal quando eles entram na viewport.
 * A transição CSS está em styles/base/_animations.css.
 *
 * COUNTERS:
 * Anima números de 0 até o valor em data-target usando easeOut.
 *
 * EXPORTA: initReveal()
 * ============================================================
 */

export function initReveal() {
  _initRevealObserver();
  _initCounters();
}

/* ── Reveal on scroll ────────────────────────────────────── */

function _initRevealObserver() {
  const elements = document.querySelectorAll('.reveal, .section-tag');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // para de observar após revelar
        }
      });
    },
    {
      threshold: 0.12,                 // aciona quando 12% do elemento estiver visível
      rootMargin: '0px 0px -40px 0px', // margem negativa na base = aciona antes de chegar à borda
    }
  );

  elements.forEach(el => observer.observe(el));
}

/* ── Contadores animados ─────────────────────────────────── */

function _initCounters() {
  const counters = document.querySelectorAll('.sobre__stat-number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          _animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 } // 50% do elemento visível para iniciar
  );

  counters.forEach(el => observer.observe(el));
}

/**
 * Anima um número de 0 até data-target com easing easeOutCubic.
 *
 * @param {HTMLElement} el - Elemento com atributo data-target
 */
function _animateCounter(el) {
  const target   = parseInt(el.getAttribute('data-target'), 10);
  const duration = 1500; // ms total da animação
  const start    = performance.now();

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);

    // easeOutCubic: desacelera no final
    const eased = 1 - Math.pow(1 - progress, 3);

    el.textContent = Math.floor(eased * target);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target; // garante valor exato no final
    }
  }

  requestAnimationFrame(update);
}
