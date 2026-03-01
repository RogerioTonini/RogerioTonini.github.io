/**
 * ============================================================
 * scripts/modules/form.js
 * Formulário de contato — envio assíncrono com Formspree
 * e feedback visual para o usuário.
 *
 * COMO CONFIGURAR:
 * 1. Crie uma conta em formspree.io
 * 2. Crie um novo form e copie o endpoint
 * 3. Substitua o atributo action do <form> no index.html:
 *    action="https://formspree.io/f/SEU_ID"
 *
 * EXPORTA: initForm()
 * ============================================================
 */

export function initForm() {
  const form     = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const btnLabel = document.getElementById('btnText');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // previne recarregamento da página

    // Estado: enviando
    if (btnLabel) btnLabel.textContent = 'Enviando...';

    try {
      const response = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Erro na resposta do servidor');

      // Sucesso
      form.reset();
      _showFeedback(feedback, '✓ Mensagem enviada com sucesso!', 'success');

    } catch {
      // Erro de rede ou servidor
      _showFeedback(feedback, '✕ Erro ao enviar. Tente por e-mail diretamente.', 'error');

    } finally {
      if (btnLabel) btnLabel.textContent = 'Enviar mensagem';
    }
  });
}

/**
 * Exibe mensagem de feedback abaixo do botão de envio.
 * Remove automaticamente após 5 segundos.
 *
 * @param {HTMLElement} el   - Elemento de feedback
 * @param {string}      msg  - Texto a exibir
 * @param {string}      type - 'success' | 'error'
 */
function _showFeedback(el, msg, type) {
  if (!el) return;

  el.textContent = msg;
  el.className   = `form-feedback form-feedback--${type}`;

  setTimeout(() => {
    el.textContent = '';
    el.className   = 'form-feedback';
  }, 5000);
}
