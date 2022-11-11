mkdir src
touch .env
touch docker-compose.yml
touch Dockerfile
mkdir src/server
mkdir src/database
touch src/server/index.js
touch src/database/index.js
mkdir src/server/routes
touch src/server/routes/index.js
mkdir src/server/routes/books
mkdir src/server/routes/authors
touch src/server/routes/books/index.js
touch src/server/routes/authors/index.js
touch src/server/routes/books/getBooks.js
touch src/server/routes/books/getBook.js
touch src/server/routes/books/createBook.js
touch src/server/routes/books/updateBook.js
touch src/server/routes/books/deleteBook.js
touch src/server/routes/authors/getAuthors.js
touch src/server/routes/authors/getAuthor.js
touch src/server/routes/authors/createAuthor.js
touch src/server/routes/authors/updateAuthor.js
touch src/server/routes/authors/deleteAuthor.js
touch README.md

npm i express body-parser morgan pg knex

npm i -D nodemon eslint

npx knex init

npx knex migrate:make authors

npx knex migrate:make books

npx knex migrate:latest
