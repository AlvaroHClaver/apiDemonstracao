const express = require("express"); //importação do express
const routes = express.Router(); //importação do Router da biblioeca express

//importação das funções do controller que serão mapeadas para as rotas
const {
  recuperarUsuarios,
  adicionarUsuario,
  findById,
  excluiUsuario,
  atulizarUsuario,
} = require("../controller/userController");

//importação do middleware
const { requirePermission } = require("../service/authService");

//mapeamento das funções do controller para seus respectivos métodos HTTP e rotas
routes.get("/usuarios", requirePermission("admin", "user"), recuperarUsuarios); //neste caso tanto um user como admin podem acessar os usuarios
routes.post("/usuario", requirePermission("admin"), adicionarUsuario); //neste caso so um admin pode adicionar outro usuário
routes.get("/usuario/:id", findById); //notação :id indica que o parametro id sera informado na url da requisição
routes.delete("/usuario/:id", excluiUsuario); //notação :id indica que o parametro id sera informado na url da requisição
routes.put("/usuario/:id", atulizarUsuario); //notação :id indica que o parametro id sera informado na url da requisição

//exportamos o objeto routes
module.exports = routes;
