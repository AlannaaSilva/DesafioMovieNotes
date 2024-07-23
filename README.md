
# Movie Notes App

## 💻 Sobre o Projeto

Bem-vindo ao Movie Notes App! Este projeto foi desenvolvido utilizando Node.js com Express para criar uma API RESTful que permite aos usuários cadastrar notas para filmes, adicionando descrições e tags relacionadas. Utiliza-se o Knex.js para interagir com um banco de dados SQLite, gerenciando as migrações e os modelos de dados.

## Diagrama do projeto

![diagrama](https://github.com/AlannaaSilva/DesafioMovieNotes/assets/104801163/15d1d42a-f8b6-4c9d-8171-28f6393a8fd2)

### Funcionalidades da Aplicação:

- Cadastro e autenticação de usuários.
- Criação, leitura, atualização e exclusão de notas de filmes.
- Associação de tags às notas de filmes.
- Criptografia de senhas e validação de e-mail durante o registro de usuários.
- Exclusão de tags de forma cascata ao excluir uma nota.

### Tecnologias Utilizadas:

- **Node.js**: Plataforma de desenvolvimento.
- **Express**: Framework web para Node.js.
- **Knex.js**: Construtor de consultas SQL para Node.js.
- **SQLite**: Banco de dados relacional leve.
- **Insomnia e Beekeeper**: Ferramentas utilizadas para testar e validar as rotas da API.


### Configuração e Instalação:

1. **Clonar o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/DesafioMovieNotes.git
   cd movie-notes-app
   ```

2. **Instalar Dependências:**

   ```bash
   npm install
   ```

3. **Configurar o Banco de Dados:**

   ```bash
   npx knex migrate:latest
   npx knex seed:run
   ```

4. **Iniciar o Servidor:**

   ```bash
   npm start
   ```

5. **Testar a API:**

   Utilize o Insomnia ou o Beekeeper para enviar requisições HTTP para as rotas da API, conforme documentação abaixo.

### Documentação da API:

#### Autenticação:

- **POST /auth/register**: Cadastrar um novo usuário.
  ```json
  {
    "name": "Nome do Usuário",
    "email": "email@example.com",
    "password": "senha123"
  }
  ```

- **POST /auth/login**: Autenticar usuário.
  ```json
  {
    "email": "email@example.com",
    "password": "senha123"
  }
  ```

#### Notas de Filmes:

- **GET /movies**: Listar todas as notas de filmes.
- **GET /movies/:id**: Obter detalhes de uma nota específica.
- **POST /movies**: Criar uma nova nota de filme.
  ```json
  {
    "title": "Título do Filme",
    "description": "Descrição do Filme",
    "rating": 5,
    "tags": ["Ação", "Comédia"]
  }
  ```
- **PUT /movies/:id**: Atualizar uma nota de filme existente.
  ```json
  {
    "title": "Novo Título do Filme",
    "description": "Nova Descrição do Filme",
    "rating": 4,
    "tags": ["Suspense"]
  }
  ```
- **DELETE /movies/:id**:
 Excluir uma nota de filme.

