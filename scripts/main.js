/**
 * ============================================================
 * scripts/main.js
 * Ponto de entrada do JavaScript — importa e inicializa
 * todos os módulos da aplicação.
 *
 * COMO ADICIONAR UM NOVO MÓDULO:
 * 1. Crie o arquivo em scripts/modules/meu-modulo.js
 * 2. Exporte a função de inicialização: export function initMeuModulo() {}
 * 3. Importe e chame abaixo dentro do DOMContentLoaded
 * ============================================================
 */

import { initCursor }    from './modules/cursor.js';
import { initGrain }     from './modules/grain.js';
import { initNavbar }    from './modules/navbar.js';
import { initTypewriter }from './modules/typewriter.js';
import { initReveal }    from './modules/reveal.js';
import { initForm }      from './modules/form.js';
import { initBackToTop } from './modules/backToTop.js';

/**
 * Aguarda o DOM estar pronto antes de inicializar os módulos.
 * Garante que todos os elementos HTML existam no momento
 * em que os scripts tentarem acessá-los.
 */
document.addEventListener('DOMContentLoaded', () => {

  initCursor();      // cursor personalizado (ponto + anel)
  initGrain();       // textura de ruído no fundo
  initNavbar();      // scroll effect + menu mobile
  initTypewriter();  // efeito de digitação no hero
  initReveal();      // reveal on scroll + contadores animados
  initForm();        // formulário de contato com Formspree
  initBackToTop();   // botão voltar ao topo

  // Atualiza o ano do copyright dinamicamente
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
