# Finance API

API RESTful para gerenciamento de transações financeiras, desenvolvida com **Node.js**, **Express**, **Sequelize** e **PostgreSQL**.  
Permite criar, listar, atualizar e deletar transações, além de calcular o saldo total com base nos lançamentos cadastrados.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [pg](https://www.npmjs.com/package/pg) e [pg-hstore](https://www.npmjs.com/package/pg-hstore)
- [Insomnia](https://insomnia.rest/) para testes de rotas
- [Beekeeper Studio](https://www.beekeeperstudio.io/) para gerenciamento do banco

---

## 📂 Estrutura do Projeto

Finance-API/
├── controllers/ # Lógica das rotas (create, read, update, delete)
├── models/ # Definição das models Sequelize
├── database.js # Conexão com o banco
├── index.js # Arquivo principal (servidor Express)
├── sync.js # Sincronização com o banco
├── package.json
└── .gitignore
