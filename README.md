# DevBurguer Frontend 🍔

Este é o frontend do **DevBurguer**, uma aplicação desenvolvida com **React**, utilizando **Hooks** para gerenciamento de estado e **Stripe** para processar pagamentos.

## 🚀 Tecnologias Utilizadas

- ⚛️ **React** - Biblioteca para construção de interfaces
- 🪝 **React Hooks** - Gerenciamento de estado e efeitos colaterais
- 💳 **Stripe** - Integração para pagamentos
- 📦 **Vite** - Ferramenta para build e desenvolvimento rápido
- 🎨 **Styled Components** - Estilização dinâmica com CSS-in-JS (caso esteja usando)

## 📂 Estrutura do Projeto

DEVBURGUR-FRONTEND/
│-- public/                   # Arquivos estáticos, como favicon, manifest e imagens públicas
│-- src/                       # Código-fonte principal do frontend
│   ├── assets/                # Recursos visuais, como imagens e ícones
│   ├── components/            # Componentes reutilizáveis da aplicação
│   ├── config/                # Configurações do projeto
│   ├── containers/            # Componentes maiores que agrupam outros menores
│   ├── hooks/                 # Hooks personalizados para lógica de estado e efeitos
│   ├── layout/                # Definição de estrutura visual e organização de telas
│   ├── routes/                # Configuração das rotas do React Router
│   ├── services/              # Comunicação com APIs externas, incluindo Stripe
│   ├── styles/                # Estilos globais e tema da aplicação
│   ├── utils/                 # Funções auxiliares e utilitárias
│   ├── App.jsx                # Componente principal que contém a estrutura do app
│   ├── index.jsx              # Arquivo de entrada, renderiza o App
│   ├── main.jsx               # Inicializa o React e configura a aplicação
│
│-- .eslintrc.json             # Configuração do ESLint para padronização de código
│-- .gitignore                 # Arquivos que devem ser ignorados pelo Git
│-- .prettierrc.json           # Configuração do Prettier para formatação de código
│-- index.html                 # Template HTML principal para renderizar o React
│-- package.json               # Dependências e scripts do projeto
│-- README.md                  # Documentação do projeto
│-- vite.config.js             # Configuração do Vite para build e dev server
│-- yarn.lock                  # Controle de versões das dependências do Yarn

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
