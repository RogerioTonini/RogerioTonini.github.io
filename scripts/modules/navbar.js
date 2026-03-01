/**
 * ============================================================
 * scripts/modules/navbar.js
 * Comportamento da navbar:
 * - Adiciona classe de scroll para aplicar backdrop blur
 * - Controla abertura/fechamento do menu mobile (hamburguer)
 *
 * EXPORTA: initNavbar()
 * ============================================================
 */

export function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');

  // ── Efeito scroll ──────────────────────────────────────────
  // Adiciona .navbar--scrolled quando o usuário rola > 60px
  // O CSS aplica fundo escuro + blur (em _navbar.css)
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('navbar--scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // ── Menu mobile ────────────────────────────────────────────
  if (!navToggle || !navMenu) return;

  /**
   * Abre/fecha o menu mobile e atualiza atributos ARIA
   */
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('nav__mobile--open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  /**
   * Fecha o menu ao clicar em qualquer link interno
   */
  navMenu.querySelectorAll('.nav__link-mobile').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('nav__mobile--open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menu');
    });
  });

  /**
   * Fecha o menu ao pressionar ESC
   */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('nav__mobile--open')) {
      navMenu.classList.remove('nav__mobile--open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menu');
      navToggle.focus();
    }
  });
}
