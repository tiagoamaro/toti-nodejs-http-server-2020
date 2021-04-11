# Servidor HTTP NodeJS (SQLite + Sequelize)

Exemplo de servidor Express com NodeJS, que se conecta a um banco de dados SQLite3 utilizando express.

## Requisitos

- NodeJS 12+

## Como rodar?

- Clone o projeto
- Instale as dependências (`npm install`)
- Rode as migrações (`npx sequelize-cli db:migrate`)
- Popule o banco de dados utilizando os seeders existentes (`npx sequelize-cli db:seed:all`)
- Rode o servidor Express (`npm run dev`)