Desafio de Front-End: CRUD de Livros e Autores
Este projeto tem como objetivo a criação de um CRUD de livros e autores. O foco é a implementação de funcionalidades básicas de maneira eficiente, usando tecnologias simples e práticas, sem recorrer a meta frameworks ou bibliotecas de UI pesadas. A proposta é demonstrar habilidade na construção de uma aplicação funcional, organizada e bem estruturada.

Funcionalidades
A aplicação deverá permitir a realização das seguintes ações para livros e autores:

Para Livros:
Criar um livro: A criação do livro será feita através de um modal.
Visualizar todos os livros: Uma tabela irá listar todos os livros cadastrados.
Visualizar um livro específico: Ao selecionar um livro, suas informações serão exibidas em um modal.
Excluir um livro: O livro poderá ser excluído após confirmação em um alerta.
Para Autores:
Criar um autor: A criação do autor será feita através de um modal.
Visualizar todos os autores: Uma tabela exibirá todos os autores cadastrados.
Visualizar um autor específico: O modal permitirá visualizar os detalhes de um autor.
Excluir um autor: O autor poderá ser excluído após confirmação em um alerta.
Requisitos
Modelos
Livro:
id (obrigatório)
name (obrigatório)
author_id (obrigatório)
pages (opcional)
Autor:
id (obrigatório)
name (obrigatório)
email (opcional)
Regras do Projeto:
Proibido o uso de meta frameworks, como Next.js e Remix.
Proibido o uso de Tailwind e SASS.
Proibido o uso de bibliotecas de UI, como MUI, Chakra UI e Bootstrap.
Permitido e recomendado o uso de Radix UI para componentes.
Permitido e recomendado o uso de bibliotecas para formulários, como Formik ou React Hook Form.
Armazenamento dos dados no navegador: Local Storage ou IndexedDB.
Tecnologias Permitidas:
React.js
Radix UI (para modais e outros componentes UI)
Formik ou React Hook Form (para gerenciar formulários)
CSS puro, CSS Modules ou Styled Components (para estilização)
Requisitos Diferenciais:
React Context API para gerenciamento de estado global.
Docker para containerização do projeto.
TypeScript para tipagem estática.
JSDoc para documentação do código.
Testes de componentes com Cypress.
Código reutilizável: Funções e componentes reutilizáveis.
Styled Components para estilização.
Instalação
Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

Node.js
npm ou yarn
Docker (opcional para containerização)
Passos para instalação:
Clone o repositório:
bash
Copiar código
git clone https://github.com/seu-usuario/desafio-crud-livros-autores.git
cd desafio-crud-livros-autores
Instale as dependências:
bash
Copiar código
npm install
ou

bash
Copiar código
yarn install
Para rodar a aplicação localmente, execute:
