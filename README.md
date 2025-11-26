# Portfólio – Andrey Luis Barboza

Portfólio pessoal desenvolvido em **React + TypeScript + Vite**, apresentando minha trajetória, formação no **SENAI**, projetos em destaque e formas de contato.

O foco deste projeto é ter uma **interface moderna**, com **animações suaves**, totalmente em **português**, servindo como meu cartão de visitas para vagas e oportunidades na área de tecnologia.

---

## ✨ Visão geral

O portfólio é composto por uma **single page** com navegação pelo menu superior:

- **Início** – Apresentação rápida (quem sou, o que faço, destaque visual).
- **Sobre mim** – Minha história com tecnologia, Data Science e frontend.
- **SENAI** – Um resumo da minha jornada de cerca de 4 anos estudando no SENAI.
- **Projetos** – Cartões com alguns projetos de destaque (substituíveis por projetos reais).
- **Contato** – E-mail, GitHub e LinkedIn para falar diretamente comigo.

---

## 👤 Sobre mim

- **Nome:** Andrey Luis Barboza  
- **Nascimento:** 25/11/2006  
- **Área:** Desenvolvimento Web / Frontend  
- **Formação:** Estudante no **SENAI**, segundo ano de **Data Science**  
- **Objetivo:** Crescer na área de tecnologia, focando em desenvolvimento de software e interfaces web modernas.

---

## 🛠️ Tecnologias utilizadas

- **React** (com Vite)
- **TypeScript**
- **CSS moderno** com foco em:
  - Layout responsivo
  - Tema escuro
  - Animações suaves (via **Framer Motion**)
- **Framer Motion** para animações de entrada das seções

---

## 🚀 Como rodar o projeto localmente

Pré-requisitos:

- **Node.js** instalado (versão 18+ recomendada)
- **npm** (vem junto com o Node)

Passos:

```bash
git clone https://github.com/barbozaaaa/meuportfolio.git
cd meuportfolio
npm install
npm run dev
```

Depois, abra o navegador em:

```text
http://localhost:5173/
```

---

## 🧩 Estrutura principal das seções

### Início

Seção de abertura com:

- Seu nome em destaque: **Andrey Luis Barboza**
- Papel atual: **Desenvolvedor Frontend & Estudante de Desenvolvimento de Sistemas no SENAI**
- Destaques rápidos:
  - Nascimento
  - Tempo de SENAI
  - Foco em frontend moderno

### Sobre mim

Texto apresentando:

- Seu interesse por tecnologia
- Gosto por interfaces bonitas e animadas
- Segundo ano de **Data Science** no SENAI
- Foco em **React + TypeScript**

### Jornada no SENAI

Resumo da sua experiência no SENAI:

- Contato com lógica de programação, desenvolvimento de sistemas e projetos em grupo.
- Ênfase em disciplina, responsabilidade e prática próxima do mercado.

### Projetos em destaque

A seção de projetos mostra **3 cartões** prontos para serem ligados aos seus projetos reais:

- **Dashboard de Finanças Pessoais**
- **Landing Page Animada**
- **Sistema de Tarefas**

Cada cartão tem:

- Nome do projeto
- Descrição curta
- Tecnologias principais
- Espaço para links de:
  - **Repositório**
  - **Versão online**

No código (`src/App.tsx`), você pode trocar esses dados para:

- Colocar o **nome real** do seu projeto
- Ajustar a **descrição**
- Atualizar as **tecnologias**
- Apontar os **links reais** (GitHub / deploy)

### Contato

Seção final com seus dados:

- **E-mail:** `andreyluis15@outlook.com`
- **GitHub:** `github.com/BARBOZAAAA`
- **LinkedIn:** `www.linkedin.com/in/andrey-luis-barboza`

---

## 🧱 Estrutura de pastas (resumo)

```text
meuportfolio/
├─ src/
│  ├─ App.tsx        # Componente principal: layout e seções do portfólio
│  ├─ App.css        # Estilos principais da interface
│  ├─ index.css      # Reset/estilos globais básicos
│  ├─ main.tsx       # Entrada da aplicação React
│  └─ assets/        # (Pasta padrão do Vite, pode conter imagens/icons)
├─ package.json      # Dependências e scripts do projeto
├─ tsconfig.*.json   # Configurações de TypeScript
├─ vite.config.ts    # Configuração do Vite
└─ README.md         # Este arquivo
```

---

## 📌 Como personalizar

Algumas ideias de personalização:

- Trocar os textos das seções **Sobre mim** e **SENAI** para refletir seus próximos passos.
- Substituir os **projetos de exemplo** pelos seus projetos reais.
- Adicionar uma seção de **skills** (ícones de tecnologias, barras de nível, etc.).
- Incluir botões que levam para **outros repositórios específicos** seus.

---

## 📫 Contato

Se você chegou até aqui pelo GitHub e quer falar comigo:

- **E-mail:** `andreyluis15@outlook.com`
- **GitHub:** `https://github.com/BARBOZAAAA`
- **LinkedIn:** `https://www.linkedin.com/in/andrey-luis-barboza`

Fique à vontade para mandar feedbacks sobre o portfólio ou ideias de melhorias. 🙂

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
