const User = require("../model/userModel"); //import do repositorio de usuários
const bcrypt = require("bcrypt"); //importamos o bcrypt

//import das funções de geração de token
const {
  generateAccessToken,
  generateRefreshToken,
  validadeRefresh,
} = require("../service/authService");

//função identifica o usuário e valida credenciais
async function authenticateUser(req, res) {
  const { usuario, password } = req.body; //recebe pelo corpo da requisição usuario e senha
  try {
    //busca o usuário atraves do usuario fornecido no banco usando o método find one com where do sequelize
    const user = await User.findOne({
      where: { nome: usuario },
    });
    //verifica se o usuario existe e se caso existir se a senha fornecisa confere caso falhe retorna a mensagem de erro
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ msg: "Credenciais inválidas" });
    }
    //gera os token atraves do user recuperado do banco
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    res.status(200).json({
      nome: user.nome,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    //caso algo de errado retorna a mensagem de erro
    console.log(err);
    res.status(500).json({ msg: "Falha ao autenticar" });
  }
}

//renova os tokens de acesso e atualização
async function renovarTokens(req, res) {
  const refreshToken = req.headers.authorization;

  try {
    const decodedRefresh = validadeRefresh(refreshToken);

    if (decodedRefresh) {
      const user = await UserRepository.findByPk(decodedRefresh.id);
      const newAccessToken = generateAccessToken(user);
      const newRefreshToken = generateRefreshToken(user);

      res
        .status(200)
        .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
    } else {
      res.status(401).json({ message: "Refresh token inválido" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro ao renovar tokens" });
  }
}

module.exports = { authenticateUser, renovarTokens };
