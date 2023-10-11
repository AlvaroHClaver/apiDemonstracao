const User = require("../model/userModel"); //import do model de user que criamos anteiormente
const sequelize = require("../db"); //importe do sequelize para definir controle de transações (Transaction Control Language, TCL)

//req-> paramentro que recebe a requisição
//res ->parametro que configura a resposta da requisição

//READ->GET
async function recuperarUsuarios(req, res) {
  try {
    const usuarios = await User.findAll(); //método findAll do sequelize retorna um sequelize object com todos os usuários do banco
    //verifica se usuarios for vazio retorna 404 not found como resposta
    if (usuarios.length === 0) {
      res.status(404).json({ msg: "Não foram encontados usuários" });
      return;
    }
    res.status(200).json(usuarios); //se a busca for bem sucedida retorna 200 e um array que contém json com as informações dos usuários
  } catch (err) {
    //tratamento de excessões
    console.log(err);
    res.status(500).json({ msg: "Falha ao recuperar usuários!" }); //caso algum erro ocorra retorna internal server error 500 junto da mensagem de erro
  }
}

//CREATE->POST
async function adicionarUsuario(req, res) {
  const { usuario, password, permissao } = req.body; //desestruturação do objeto presente no corpo da requisição
  try {
    //recebe json como argumento do novo elemento que será criado e retorna elemento que foi criado
    const novoUsuario = await User.create({
      usuario: usuario,
      password: password,
      permissao: permissao,
    });
    res.status(201).json(novoUsuario); //retorna para o cliente código 201 created e o json do novo elemento
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Falha ao criar usuário!" }); //retorna internal server error 500 caso ocorra algum erro durante a criação
  }
}

//READ->GET

async function findById(req, res) {
  const { id } = req.params; //desestrutura a url da rota recuperando o id
  try {
    const usuario = await User.findByPk(id); // findByPk é um método do sequelize que pesquisa e retorna um objeto que corresponde aquela chave primária
    if (!usuario) {
      //verifica se usuario for vazio retorna 404 not found como resposta
      res.status(404).json({ msg: "Usuario não encontrado" });
      return;
    }
    res.status(200).json(usuario); //se a busca for bem sucedida retorna 200 e um json com as informações do usuário
  } catch (err) {
    res.status(500).json({ msg: "Falha ao criar usuário!" }); //retorna internal server error 500 caso ocorra algum erro durante a operação
  }
}

//DELETE->DELETE
async function excluiUsuario(req, res) {
  const { id } = req.params; //desestrutura a url da rota recuperando o id do elemnto a ser excluido
  try {
    //exclui a linha da tabela através do id passado na uri através do método destroy do sequelize
    await User.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ msg: "Usuário excluido!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Falha ao criar usuário!" }); //retorna internal server error 500 caso ocorra algum erro durante a operação
  }
}

//UPDATE->PUT
async function atulizarUsuario(req, res) {
  const { id } = req.params; //desestrutura a url da rota recuperando o id do elemnto a ser atualizado
  const { novoUsuario, novoPassword, novaPermissao } = req.body; //desestruturação do objeto presente no corpo da requisição
  const t = await sequelize.transaction(); //abre uma transação para evitar que o banco perda sua integridade
  try {
    //update é metodo do sequelize que atualiza linha da tabela
    await User.update(
      {
        usuario: novoUsuario,
        password: novoPassword,
        permissao: novaPermissao,
      },
      {
        where: { id: id },
        transaction: t, // Associa a transação à atualização
      }
    );
    // Confirme a transação
    await t.commit();
    res.status(200).json({ msg: "Usuário atualizado!" });
  } catch (err) {
    // Em caso de erro, reverta a transação
    await t.rollback();
    res.status(500).json({ msg: "Falha ao atualizar" });
  }
}
