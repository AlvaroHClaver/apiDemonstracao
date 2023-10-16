//importação do bcrypt
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//gera hash a a partir do password fo usuário
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(12); // método do bcrypt que produz um sal que será adicionado a hash
  const hashedPassword = await bcrypt.hash(password, salt); //função do bcrypt que gera a hash recebe como parametros a senha a ser hashada e um sal
  return hashedPassword;
}

const SECRET_KEY = process.env.SECRET_KEY; //chave de assinatura do token disponivel no .env

//gera token de acesso
function generateAccessToken(user) {
  return jwt.sign(
    { id: user.id, nome: user.nome, permissao: user.permissao }, //define o payload do token
    SECRET_KEY, //chave com a qual o token será assinado
    { expiresIn: "15m" } //define tempo de expiração para 15 minutos
  );
}
//gera token de atualização
function generateRefreshToken(user) {
  return jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "30m" });
}

function generateRefreshToken(user) {
  return jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "30m" });
}

//verifica se o token de acesso é valido recebe rest params (...) dependo das opções de usuários que forem determinadas
function requirePermission(...permission) {
  //parametro next passa a requisição para o controller caso o token seja valido
  return (req, res, next) => {
    const accessToken = req.headers.authorization; //extrai o token do cabeçalho d eautorização

    //verifica se o token está presente
    if (!accessToken) {
      return res.status(401).json({ message: "Token de acesso não fornecido" });
    }

    try {
      //decodifica o token
      const decoded = jwt.verify(
        accessToken.replace("Bearer ", ""), // remove a palavra Bearer que acompanha o token no cabeçalho.
        SECRET_KEY //compara com a chave de assinatura
      );
      //verifica se o token foi valido e decodificado bem como se a permissao atende aquela rota
      if (!decoded || !permission.includes(decoded.permissao)) {
        return res.status(403).json({ message: "Acesso não autorizado" });
      }

      req.user = decoded; // torna o token decodificado acessível para o controller seguinte
      next(); //passa para o controller na rota
    } catch (err) {
      //informa que o token é invalido
      res.status(401).json({ message: "Token de acesso inválido" });
    }
  };
}

//verifica se o token de atualização é valido
function validadeRefresh(refreshToken) {
  try {
    const decodedRefresh = jwt.verify(
      refreshToken.replace("Bearer ", ""),
      SECRET_KEY
    );
    return decodedRefresh;
  } catch (err) {
    return null;
  }
}

//exportação das funções
module.exports = {
  hashPassword,
  generateAccessToken,
  generateRefreshToken,
  requirePermission,
  validadeRefresh,
};
