<h1>Desafio de Front-End: CRUD de Livros e Autores</h1>

<p>Este projeto tem como objetivo a criação de um CRUD de livros e autores. O foco é a implementação de funcionalidades básicas de maneira eficiente, usando tecnologias simples e práticas, sem recorrer a meta frameworks ou bibliotecas de UI pesadas. A proposta é demonstrar habilidade na construção de uma aplicação funcional, organizada e bem estruturada.</p>

<h2>Funcionalidades</h2>

<p>A aplicação deverá permitir a realização das seguintes ações para livros e autores:</p>

<h3>Para Livros:</h3>
<ul>
  <li><strong>Criar um livro</strong>: A criação do livro será feita através de um modal.</li>
  <li><strong>Visualizar todos os livros</strong>: Uma tabela irá listar todos os livros cadastrados.</li>
  <li><strong>Visualizar um livro específico</strong>: Ao selecionar um livro, suas informações serão exibidas em um modal.</li>
  <li><strong>Excluir um livro</strong>: O livro poderá ser excluído após confirmação em um alerta.</li>
</ul>

<h3>Para Autores:</h3>
<ul>
  <li><strong>Criar um autor</strong>: A criação do autor será feita através de um modal.</li>
  <li><strong>Visualizar todos os autores</strong>: Uma tabela exibirá todos os autores cadastrados.</li>
  <li><strong>Visualizar um autor específico</strong>: O modal permitirá visualizar os detalhes de um autor.</li>
  <li><strong>Excluir um autor</strong>: O autor poderá ser excluído após confirmação em um alerta.</li>
</ul>

<h2>Requisitos</h2>

<h3>Modelos</h3>

<p><strong>Livro:</strong></p>
<ul>
  <li>id (obrigatório)</li>
  <li>name (obrigatório)</li>
  <li>author_id (obrigatório)</li>
  <li>pages (opcional)</li>
</ul>

<p><strong>Autor:</strong></p>
<ul>
  <li>id (obrigatório)</li>
  <li>name (obrigatório)</li>
  <li>email (opcional)</li>
</ul>

<h3>Regras do Projeto:</h3>
<ul>
  <li><strong>Proibido</strong> o uso de meta frameworks, como Next.js e Remix.</li>
  <li><strong>Proibido</strong> o uso de Tailwind e SASS.</li>
  <li><strong>Proibido</strong> o uso de bibliotecas de UI, como MUI, Chakra UI e Bootstrap.</li>
  <li><strong>Permitido e recomendado</strong> o uso de Radix UI para componentes.</li>
  <li><strong>Permitido e recomendado</strong> o uso de bibliotecas para formulários, como Formik ou React Hook Form.</li>
  <li><strong>Armazenamento dos dados no navegador</strong>: Local Storage ou IndexedDB.</li>
</ul>

<h3>Tecnologias Permitidas:</h3>
<ul>
  <li>React.js</li>
  <li>Radix UI (para modais e outros componentes UI)</li>
  <li>Formik ou React Hook Form (para gerenciar formulários)</li>
  <li>CSS puro, CSS Modules ou Styled Components (para estilização)</li>
</ul>

<h3>Requisitos Diferenciais:</h3>
<ul>
  <li><strong>React Context API</strong> para gerenciamento de estado global.</li>
  <li><strong>Docker</strong> para containerização do projeto.</li>
  <li><strong>TypeScript</strong> para tipagem estática.</li>
  <li><strong>JSDoc</strong> para documentação do código.</li>
  <li><strong>Testes de componentes</strong> com Cypress.</li>
  <li><strong>Código reutilizável</strong>: Funções e componentes reutilizáveis.</li>
  <li><strong>Styled Components</strong> para estilização.</li>
</ul>

<h2>Instalação</h2>

<h3>Pré-requisitos</h3>
<p>Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:</p>
<ul>
  <li>Node.js</li>
  <li>npm ou yarn</li>
  <li>Docker (opcional para containerização)</li>
</ul>

<h3>Passos para instalação:</h3>
<pre><code>1. Clone o repositório:</code></pre>

<pre><code>git clone https://github.com/seu-usuario/desafio-crud-livros-autores.git
cd desafio-crud-livros-autores
</code></pre>

<pre><code>2. Instale as dependências:</code></pre>

<pre><code>npm install</code></pre>

ou

<pre><code>yarn install</code></pre>

<pre><code>3. Para rodar a aplicação localmente, execute:</code></pre>

<pre><code>npm start</code></pre>

ou

<pre><code>yarn start</code></pre>

 
