const sequelize = require("sequelize"); // importamos o sequelize que gerencia a criação da tabela
const db = require("../bd"); //importamos o banco no qual conectamos anteriormente

const User = db.define(
  "usuarios", //define o nome da tabela no banco de dados
  {
    id: {
      type: sequelize.INTEGER.UNSIGNED,
      primaryKey: true, //define que esta coluna é a chame primária
      autoIncrement: true, //incrmenta o id em uma unidade evitando duplicidade de chave primaria
      allowNull: false, //define que este atributo não pode ser vazio
    },
    nome: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true, //define que todos os valores desta coluna deve ser único
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
    permissao: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, //desabilita o armazenamento de datas em que foi criado e atualizado
  }
);

module.exports = User;
