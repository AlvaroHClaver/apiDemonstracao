const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bd = require("./bd");

const app = express(); //inicia o express
app.use(morgan("dev")); //imprime os logs das operações durante o desenvolvimento
app.use(cors()); //libera o cross origin
app.use(express.json()); // configura a API para receber e enviar json.

//rota padrão na qual podemos verificar se o servidor está disponível
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Api ok!" });
});

//inicia o servidor através de uma self invoked function
(async () => {
  try {
    await bd.sync({ force: false }); // sincroniza o banco
    console.log("Banco conectado!");
    app.listen(3000, () => console.log("Service is live!")); //iniciar efetivamente o servidor na porta 3000
  } catch (err) {
    console.log(err);
  }
})();
