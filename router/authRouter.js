const express = require("express"); //importação do express
const routes = express.Router(); //importação do Router da biblioeca express

const {
  authenticateUser,
  renovarTokens,
} = require("../controller/authController");

//mapeamento da rota de login
routes.post("/login", authenticateUser);
routes.post("/refresh", renovarTokens);

//exportamos o objeto routes
module.exports = routes;
