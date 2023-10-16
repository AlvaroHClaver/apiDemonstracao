const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bd = require("./bd");
const User = require("./model/userModel");
const { hashPassword } = require("./service/authService");
//importamos as rotas do usuário
const userRoutes = require("./router/userRouter");
const authRoutes = require("./router/authRouter");

const app = express(); //inicia o express
app.use(morgan("dev")); //imprime os logs das operações durante o desenvolvimento
app.use(cors()); //libera o cross origin
app.use(express.json()); // configura a API para receber e enviar json.
app.use(userRoutes); // torna as rotas  disponíveis para uso
app.use(authRoutes);

//rota padrão na qual podemos verificar se o servidor está disponível
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Api ok!" });
});

//verifica se admin já existe caso contrario cria um admin
async function criaAdmin() {
  try {
    const [user, created] = await User.findOrCreate({
      where: { nome: "root" },
      defaults: {
        nome: "root",
        password: await hashPassword("12345"),
        permissao: "admin",
      },
    });
    if (created) {
      console.log("Linhas criadas com sucesso!");
    } else {
      console.log("Linhas já existem na tabela.");
    }
  } catch (err) {
    console.log(err);
  }
}

//inicia o servidor através de uma self-invoked function
(async () => {
  try {
    await bd.sync({ force: false }); // sincroniza o banco
    await criaAdmin();
    console.log("Banco conectado!");
    app.listen(3000, () => console.log("Service is live!")); //iniciar efetivamente o servidor na porta 3000
  } catch (err) {
    console.log(err);
  }
})();
