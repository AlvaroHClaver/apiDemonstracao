const Sequelize = require("sequelize"); //importação do sequelize
require("dotenv").config(); //importação do .env com as variáveis de ambiente

const bdUser = process.env.user; //variavel de ambiente
const bdPassword = process.env.password; //variavel de ambiente

const sequelize = new Sequelize(
  `postgres://${bdUser}:${bdPassword}@silly.db.elephantsql.com/${bdUser}`, //url de conexão com o banco
  { dialect: "postgres" } //define o dialeto do banco
);

module.exports = sequelize; //exporte padrão do Node.
