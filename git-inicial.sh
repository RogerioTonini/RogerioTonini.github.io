#!/usr/bin/env bash

# 1. Adicione o script ao repositório
git add git-inicial.sh
git commit -m "chore(scripts): adicionar script de inicialização do repositório"

# Commit 2: Estrutura inicial
git add .gitignore .gitattributes
git commit -m "chore(git): configurar gitignore e gitattributes
- Adicionar .gitignore,
- Adicionar .gitattributes para normalização de arquivos e
- Configurar tratamento de arquivos binários"

# Commit 4: VSCode
git add .vscode/
git commit -m "chore(vscode): adicionar configurações do editor"

# Commit 5: Git Hooks
git add .githooks-scripts/
git commit -m "chore(git): adicionar scripts de hooks para Conventional Commits"

# Commit 6: README.md
git add README.md
git commit -m "docs: adicionar README.md com informações do projeto"

# Commit 7: Aplicação
git add .
git commit -m "feat: INclusão de todos os arquivos (HTML+CSS+JAVA Script)"

# Commit 8: Testes
git add tests/
git commit -m "test: adicionar estrutura de testes"
