# Portfólio Profissional

> Site de apresentação pessoal hospedado no **GitHub Pages**.
> Construído com **HTML5 + CSS3 (BEM) + JavaScript ES Modules** — zero dependências, zero instalações.

---

## Estrutura de Pastas

```
seu-usuario.github.io/
│
├── index.html                       ← Página principal
│
├── styles/                          ← Todos os estilos CSS
│   ├── main.css                     ← ENTRY POINT — importa todos os parciais
│   ├── base/                        ← Fundação do projeto
│   │   ├── variables.css            ← Design tokens (cores, fontes, espaçamentos)
│   │   ├── reset.css                ← Normalização cross-browser
│   │   ├── typography.css           ← Escala tipográfica e helpers de texto
│   │   └── animations.css           ← @keyframes e classe .reveal
│   │
│   ├── layout/                      ← Estrutura macro da página
│   │   ├── grid.css                 ← Container, grid, flex utilities
│   │   ├── navbar.css               ← Barra de navegação
│   │   └── footer.css               ← Rodapé
│   └── components/                  ← Componentes independentes
│       ├── cursor.css               ← Cursor personalizado
│       ├── buttons.css              ← Variantes de botões
│       ├── hero.css                 ← Seção Hero
│       ├── sobre.css                ← Seção Sobre + Avatar
│       ├── ferramentas.css          ← Grade de ferramentas
│       ├── projetos.css             ← Cards de projetos
│       ├── contato.css              ← Formulário e links de contato
│       └── ui.css                   ← Back-to-top, grain canvas
├── scripts/                         ← JavaScript modular (ES Modules)
│   ├── main.js                      ← ENTRY POINT — importa e inicializa módulos
│   └── modules/
│       ├── cursor.js                ← Cursor personalizado (ponto + anel)
│       ├── grain.js                 ← Textura de ruído no canvas
│       ├── navbar.js                ← Scroll effect + menu mobile
│       ├── typewriter.js            ← Efeito de digitação no hero
│       ├── reveal.js                ← Reveal on scroll + contadores
│       ├── form.js                  ← Formulário com Formspree
│       └── backToTop.js             ← Botão voltar ao topo
├── assets/
│   ├── images/
│   │   └── foto.jpg                 ← Sua foto de perfil (adicione aqui)
│   ├── docs/
│   │   └── curriculo.pdf            ← Seu currículo (adicione aqui)
│   └── fonts/                       ← Fontes locais (se necessário)
└── README.md                        ← Esta documentação
```

---

## Convenção BEM

O projeto usa a metodologia **BEM (Block, Element, Modifier)**:

```
.bloco                   → componente independente
.bloco__elemento         → parte de um bloco
.bloco--modificador      → variação de um bloco
.bloco__elemento--mod    → variação de um elemento
```

**Exemplos do projeto:**

| Classe                 | Tipo         | Descrição                         |
| ---------------------- | ------------ | --------------------------------- |
| `.navbar`              | Bloco        | Barra de navegação                |
| `.navbar--scrolled`    | Modificador  | Navbar com fundo após scroll      |
| `.nav__link`           | Elemento     | Link dentro da navbar             |
| `.btn`                 | Bloco        | Botão base                        |
| `.btn--primary`        | Modificador  | Variante de botão primário        |
| `.project-card`        | Bloco        | Card de projeto                   |
| `.project-card__title` | Elemento     | Título dentro do card             |
| `.avatar__corner--tl`  | Elemento+Mod | Canto superior esquerdo do avatar |

---

## ⚙️ Como personalizar

### Cores e tipografia (`styles/base/variables.css`)

```css
:root {
  --color-accent: #22d3ee; /* ← mude aqui para trocar o tema inteiro */
  --font-display: 'Syne', sans-serif; /* ← fonte dos títulos */
}
```

Exemplos de cores alternativas:

- Verde: `#22c55e`
- Violeta: `#a78bfa`
- Laranja: `#f97316`
- Rosa: `#ec4899`

### Informações pessoais (`index.html`)

| Texto a substituir   | Por quê                  |
| -------------------- | ------------------------ |
| `Seu Nome`           | Seu nome completo        |
| `SN`                 | Suas iniciais (nav logo) |
| `seuemail@email.com` | Seu e-mail               |
| `seu-usuario`        | Seu usuário do GitHub    |
| `seu-perfil`         | Seu perfil no LinkedIn   |
| `Brasil 🇧🇷`          | Sua localização          |

### Frases do typewriter (`scripts/modules/typewriter.js`)

```js
const PHRASES = [
  'Analista de Dados', // ← edite estas frases
  'Especialista em Power BI',
  // Adicione ou remova
];
```

### Foto de perfil

1. Coloque sua foto em `assets/images/foto.jpg`
2. No `index.html`, substitua o `<div class="avatar__placeholder">` por:

```html
<img class="avatar__img" src="assets/images/foto.jpg" alt="Foto de Seu Nome" />
```

### Regra geral do projeto

Para qualquer texto, o arquivo depende do que você quer alterar:

| Onde alterar                                   | Quais Arquivos / Tags                           |
| ---------------------------------------------- | ----------------------------------------------- |
| `// sobre mim, // ferramentas` etc.            | `styles/base/typography.css` → `.section-tag`   |
| Títulos das seções (Dados são minha linguagem) | `styles/base/typography.css` → `.section-title` |
| Textos do Hero (nome, cargo, descrição)        | `styles/components/hero.css`                    |
| Itens de cada seção específica                 | `styles/components/nome-da-secao.css`           |
| Botões                                         | `styles/components/buttons.css`                 |
| Navbar                                         | `styles/layout/navbar.css`                      |

---

## Como publicar no GitHub Pages

```bash
# 1. Crie o repositório (nome obrigatório: seu-usuario.github.io)
gh repo create seu-usuario.github.io --public --clone
cd seu-usuario.github.io

# 2. Copie todos os arquivos do projeto para esta pasta

# 3. Commit e push
git add .
git commit -m "feat: primeira versão do portfólio"
git push origin main
```

Depois acesse **Settings → Pages → Source: main / (root)** e salve.

Seu site estará em: `https://seu-usuario.github.io`

---

## Configurar formulário de contato (Formspree)

1. Acesse [formspree.io](https://formspree.io) e crie uma conta gratuita
2. Crie um novo form e copie o endpoint
3. No `index.html`, substitua o `action` do formulário:

```html
<form action="https://formspree.io/f/SEU_ID" ...></form>
```

---

## Como escalar o projeto

### Adicionar novo componente CSS

```bash
# 1. Crie o arquivo
touch styles/components/timeline.css

# 2. Importe no main.css (ao final da seção de components)
# @import './components/timeline.css';
```

### Adicionar novo módulo JavaScript

```js
// 1. Crie scripts/modules/meuModulo.js
export function initMeuModulo() {
  // sua lógica aqui
}

// 2. Importe em scripts/main.js
import { initMeuModulo } from './modules/meuModulo.js';

// 3. Chame dentro do DOMContentLoaded
initMeuModulo();
```

### Adicionar nova seção ao HTML

1. Crie o bloco HTML em `index.html` com classes BEM
2. Crie o CSS em `styles/components/nova-secao.css`
3. Importe em `styles/main.css`
4. Se precisar de JS, crie o módulo e importe em `scripts/main.js`
