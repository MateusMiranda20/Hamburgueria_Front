# DevBurguer Frontend 🍔

Este é o frontend do **DevBurguer**, uma aplicação desenvolvida com **React**, utilizando **Hooks** para gerenciamento de estado e **Stripe** para processar pagamentos.

## 🚀 Tecnologias Utilizadas

- ⚛️ **React** - Biblioteca para construção de interfaces
- 🪝 **React Hooks** - Gerenciamento de estado e efeitos colaterais
- 💳 **Stripe** - Integração para pagamentos
- 📦 **Vite** - Ferramenta para build e desenvolvimento rápido
- 🎨 **Styled Components** - Estilização dinâmica com CSS-in-JS (caso esteja usando)

## 📂 Estrutura do Projeto

DEVBURGUER-FRONTEND/
│-- public/
│-- src/
│   ├── assets/
│   ├── components/
│   ├── config/
│   ├── containers/
│   ├── hooks/
│   ├── layout/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── index.jsx
│   ├── main.jsx
│-- .env
│-- .gitignore
│-- .eslintrc.json
│-- .prettierrc.json
│-- index.html
│-- package.json
│-- README.md
│-- vite.config.js
│-- yarn.lock


## 🛠️ Como Rodar o Projeto?

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/seu-usuario/devburguer-frontend.git
   cd devburguer-frontend
   
<h1>Instale as dependências</h1>
yarn install


<h1>Configure as variáveis de ambiente</h1>
Crie um arquivo .env na raiz do projeto e adicione as chaves necessárias, como a chave pública do Stripe.

<h1>Execute o servidor de desenvolvimento</h1>

yarn dev
Acesse a aplicação
A aplicação estará rodando em http://localhost:5173 (ou outra porta definida pelo Vite).

📌 Funcionalidades
📋 Listagem de produtos
🛒 Carrinho de compras
💳 Pagamento com Stripe
🌐 Integração com API
