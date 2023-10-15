# API REST

# Introdução

Uma Interface de Programação de Aplicativos para a web, ou simplesmente APIs, são uma peça fundamental na interconexão e na colaboração de sistemas de software pela internet. As APIs HTTP, mais especificamente são como pontes invisíveis que permitem que diferentes aplicativos, plataformas e serviços comuniquem-se e compartilhem dados de maneira eficiente através do protocolo HTTP (Hypertext Transfer Protocol). Nos últimos anos, o universo das APIs HTTP tem vivenciado um crescimento exponencial, impulsionado pela necessidade de integração entre sistemas web e expansão de ecossistemas digitais.

As APIs são o meio de caminho entre o banco de dados e o cliente em sistemas de software. Ela recebe as solicitações do cliente, executa a lógica de negócios, como autenticação e autorização, e traduz essas solicitações em comandos compreensíveis para o banco de dados. Posteriormente, a API recebe as respostas do banco de dados e as retorna de forma estruturada ao cliente. Além de facilitar a comunicação, a API oferece benefícios essenciais, como segurança, abstração dos detalhes técnicos do banco de dados e flexibilidade para realizar alterações no sistema sem afetar diretamente o cliente.

![image](https://github.com/MackLEAPS-Oriente/apiDemostracao/assets/111446977/578e089d-b208-4f69-ba46-e44bfe3d72d0)

## Protocolo HTTP

O Protocolo HTTP (Hypertext Transfer Protocol) é uma linguagem padronizada que permite a comunicação entre clientes e servidores na web. Ele opera sobre o protocolo TCP (Transmission Control Protocol) e define como as mensagens são formatadas e transmitidas, facilitando a recuperação de recursos, como páginas da web e dados, por meio de URLs. As solicitações HTTP são geralmente compostas por métodos, como GET, POST, PUT e DELETE, que determinam a ação a ser realizada no servidor, e os cabeçalhos, que contêm informações adicionais sobre a solicitação. As respostas do servidor incluem códigos de status para indicar o sucesso ou a falha da solicitação e o conteúdo desejado. O HTTP é a base da World Wide Web e é amplamente utilizado em APIs, pois oferece uma estrutura consistente e eficiente para a comunicação entre sistemas distribuídos na internet. Isso permite que aplicativos e serviços interajam de maneira previsível, o que é fundamental para a integração e a interoperabilidade em um ambiente web global.

![image](https://github.com/MackLEAPS-Oriente/apiDemostracao/assets/111446977/f7335b0a-5b9e-4ae0-a09e-239f83f50b1e)

## CRUD

CRUD é como um conjunto de ações básicas que os aplicativos e sistemas usam para gerenciar informações. Imagine que você tem uma lista de contatos em seu telefone. Com CRUD, você pode fazer quatro coisas com esses contatos:

1. **Criar (Create)**: Significa adicionar um novo contato à sua lista. Por exemplo, quando você conhece alguém novo e deseja salvar o número de telefone, está criando um novo contato.
2. **Ler (Read)**: Isso envolve visualizar as informações que você já tem. Quando você abre sua lista de contatos para ver os nomes e números que já estão lá, está fazendo uma operação de leitura.
3. **Atualizar (Update)**: Às vezes, os detalhes de um contato mudam, como um novo endereço de e-mail ou um número de telefone atualizado. Atualizar significa fazer alterações em um contato existente para manter as informações corretas.
4. **Excluir (Delete)**: Se você não precisa mais de um contato em sua lista, pode excluí-lo. Isso é útil quando você quer se livrar de informações antigas ou desnecessárias.

As operações CRUD (Create, Read, Update, Delete) desempenham um papel central nas APIs REST, relacionando-se diretamente aos métodos HTTP mencionados no tópico anterior. Eis como eles se encaixam:

1. **GET (Read)**: O método GET é usado para recuperar informações de um recurso específico, representando a operação de leitura (Read) em CRUD.
2. **POST (Create)**: O método POST é utilizado para criar um novo recurso. Envio de dados através de um formulário da web ou de uma solicitação de API.
3. **PUT ou PATCH (Update)**: O método PUT (ou em alguns casos o PATCH) é empregado para atualizar um recurso existente. Isso reflete a operação de atualização (Update) em CRUD.
4. **DELETE (Delete)**: O método DELETE é usado para remover um recurso. Essa ação se alinha com a operação de exclusão (Delete) em CRUD.

![image](https://github.com/MackLEAPS-Oriente/apiDemostracao/assets/111446977/911ccae1-f07b-4734-8f9a-69eb6fe3036d)

### Links Uteis

[HTTP Status Dogs](https://httpstatusdogs.com)

## Banco de Dados e Mapeamento usando ODM e ORM

ORM (Object-Relational Mapping) e ODM (Object-Document Mapping) são padrões de mapeamento que facilitam a interação entre sistemas de software e bancos de dados relacionais (no caso do ORM) ou bancos de dados NoSQL orientados a documentos (no caso do ODM). A principal motivação para o uso de objetos de mapeamento é a abstração do banco de dados permitindo interagir com o banco de dados sem precisar escrever SQL diretamente. Outra motivação é que o código ORM é frequentemente independente do banco de dados subjacente, permitindo uma mudança mais fácil de um banco de dados para outro.

![image](https://github.com/MackLEAPS-Oriente/apiDemostracao/assets/111446977/368470c6-6739-452e-80bf-831916ff1a73)

### Leitura complementar

[O que é ORM?](https://www.treinaweb.com.br/blog/o-que-e-orm)

# Construindo uma API Node Express com Sequelize ORM

### Requisitos

1. Node.js instalado. Caso não possua o node intalado ainda [clique aqui](https://nodejs.org/en/download).

### Criando aplicação e instalando as dependências

Vamos iniciar uma aplicação com o comando `npm init -y` e criar na pasta raiz os arquivos **server.js, bd.js** e quatro novas pastas chamadas **router, controller, model e service**.

Agora podemos instalar as dependências do projeto através do comando `npm install express dotenv pg postgres sequelize sequelize-cli cors bcrypt` .

Instale também como dependencias de desenvolvimento `npm install nodemon morgan --save-dev` .

Configure também um comando de inicialização da aplicação atrelado ao nodemon no package.json

Ao final do processo você deve ter a seguinte estrutura de arquivo e package.json.

<img width="249" alt="Untitled" src="https://github.com/MackLEAPS-Oriente/apiDemostracao/assets/111446977/e2ee327a-b610-4f9f-8374-09289bab6a02">

```jsx
{
  "name": "apiexemplo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"nodemon start server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "pg": "^8.11.3",
    "postgres": "^3.4.0",
    "sequelize": "^6.33.0",
    "sequelize-cli": "^6.6.1"
  },
  "devDependencies": {
    "morgan": "^1.10.0",
    "nodemon": "^3.0.1"
  }
}
```

### Criando uma instância no ElephantSQL e configurando o banco

Use o link para o tutorial de criação de uma instância no ElephantSQL.

[Configurando uma instância no ElephantSQL. | Scribe](https://scribehow.com/shared/Configurando_uma_instancia_no_ElephantSQL__J-HphR1wTJqnaEwokikA_g)

Agora vamos prosseguir com a configuração do banco no arquivo bd.js que criamos anteriormente. Importe o **sequelize** e do **dotenv** conforme mostrado. Crie também na pasta raiz do projeto um arquivo .**env**. Nesta etapa vamos utilizar a url copiada por você na última etapa do tutorial acima.

```jsx
const Sequelize = require("sequelize"); //importação do sequelize
require("dotenv").config(); //importação do .env com as variáveis de ambiente

const bdUser = process.env.user; //variavel de ambiente
const bdPassword = process.env.password; //variavel de ambiente

const sequelize = new Sequelize(
  `postgres://${bdUser}:${bdPassword}@silly.db.elephantsql.com/${bdUser}`, // sua url de conexão com o banco
  { dialect: "postgres" } //define o dialeto do banco
);

module.exports = sequelize; //exporte padrão do Node.
```

```jsx
#Dados BD
user="seuUsuario"
password="suaSenha"
```

### Configurando o servidor e definindo uma porta.

Agora podemos configurar o servidor em **server.js**.

```jsx
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bd = require("./bd");

const app = express(); //inicia o express
app.use(morgan("dev")); //imprime os logs das operações durante o desenvolvimento
app.use(cors()); //libera o cross origin
app.use(express.json()); // configura a API para receber e enviar json (Headers HTTP)

//rota padrão na qual podemos verificar se o servidor está disponível
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Api ok!" });
});

//inicia o servidor através de uma self-invoked function que executa na inicialização da aplicação
(async () => {
  try {
    await bd.sync({ force: false }); // sincroniza o banco
    console.log("Banco conectado!");
    app.listen(3000, () => console.log("Service is live!")); //iniciar efetivamente o servidor na porta 3000
  } catch (err) {
    console.log(err); //imprime o erro caso este ocorra
  }
})();
```

Observe o objeto passado de parâmetro na função que sincroniza o banco.

- **`force: true`**: Quando você define **`force`** como **`true`**, a sincronização do banco de dados recriará todas as tabelas, ou seja, ele irá descartar todas as tabelas existentes e criá-las novamente do zero. Isso é útil em situações de desenvolvimento ou testes, quando você deseja recriar o esquema do banco de dados para refletir as mudanças no seu modelo de dados ou quando deseja começar com um banco de dados vazio.
- **`force: false`**: Ao definir **`force`** como **`false`**, a sincronização do banco de dados não irá recriar as tabelas se elas já existirem. Isso é a configuração padrão e é mais apropriado para ambientes de produção, onde você deseja manter os dados existentes. Usar **`false`** é uma abordagem mais segura para evitar a perda de dados acidental, pois não apagará ou recriará tabelas existentes.

Em resumo, ao definir **`force: true`**, você está instruindo o sistema a recriar o esquema do banco de dados do zero, enquanto **`force: false`** garante que o esquema atual do banco de dados seja mantido, evitando a perda de dados. A escolha entre essas opções dependerá dos requisitos do seu ambiente, sendo **`true`** mais comum durante o desenvolvimento e **`false`** mais adequado para produção.

Podemos agora testar a conexão com o banco de dados iniciando a aplicação através do comando `npm start` . Se a conexão com o banco for bem sucedida a mensagem de "Banco conectado” será exibida no console bem como “Service is live!”que indica que o servidor está rodando.

```bash
mackleaps@222816-MackFCI apiExemplo % npm start

> apiexemplo@1.0.0 start
> nodemon start server.js

[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node start server.js`
Executing (default): SELECT 1+1 AS result
Banco conectado!
Service is live!
```

Também podemos verificar que a aplicação foi iniciada corretamente através da rota que definimos para esta finalidade no server. Em seu navegador use a url [http://localhot:3000](http://localhot:3000/) e verifique se a mensagem {msg:Api ok!} foi exibida.

![Untitled](https://github.com/MackLEAPS-Oriente/apiDemostracao/assets/111446977/9651e329-656e-4cc3-8d67-a4587d241c33)
![Untitled2](https://github.com/MackLEAPS-Oriente/apiDemostracao/assets/111446977/38c5d4c1-a5b2-41d6-bb7e-4efb23afd0ca)

### Criando um Schema com Sequelize

Neste passo vamos criar o esquema para a tabela usuários de nossa aplicação. Crie um arquivo chamado **userModel.js** dentro da pasta **model** que criamos anteriormente.

```jsx
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
```

Para entender melhor o funcionamento e os tipos de dados acesse a documentação do sequelize no link abaixo.

[Getting Started | Sequelize](https://sequelize.org/docs/v6/getting-started/)

O sequelize também permite definir relacionamento entre as tabelas.

[Relacionamentos](https://www.youtube.com/watch?v=vJZ_kh7G8-k)

### Criando o CRUD da API através de funções controller

Agora vamos criar as funções que são responsáveis por receber as requisições processa-las recuperando as informações do banco de dados e retornar um json como resposta para o cliente. Crie um arquivo **userController.js** na pasta **controller**.

Geralmente, um arquivo de controlador é responsável por conter todas as funções que manipulam as operações de CRUD (Create, Read, Update, Delete) para um determinado modelo de dados em um aplicativo. Neste exemplo, o foco está em operações de usuário usando o modelo **`User`**.

1. **`recuperarUsuarios`**: Essa função lida com a operação de leitura para recuperar todos os usuários da tabela. Ela usa o método **`User.findAll()`** para buscar todos os registros e responde com os usuários encontrados ou uma mensagem de erro.
2. **`adicionarUsuario`**: Essa função lida com a operação de criação para adicionar um novo usuário à tabela. Ela desestrutura os dados do corpo da requisição, usa o método **`User.create()`** para criar um novo registro e responde com o novo usuário ou uma mensagem de erro.
3. **`findById`**: Esta função trata da operação de leitura para encontrar um usuário específico com base no ID. Ela extrai o ID da URL da rota, usa o método **`User.findByPk(id)`** para buscar o registro correspondente e responde com o usuário encontrado ou uma mensagem de erro.
4. **`excluiUsuario`**: Essa função lida com a operação de exclusão para remover um usuário com base no ID. Ela extrai o ID da URL da rota, usa o método **`User.destroy()`** para excluir o registro e responde com uma mensagem de sucesso ou uma mensagem de erro.
5. **`atualizarUsuario`**: Esta função trata da operação de atualização para modificar um usuário com base no ID. Ela extrai o ID da URL da rota e os novos dados do corpo da requisição. Ela também inicia uma transação para garantir a integridade do banco de dados, atualiza o registro com os novos dados e responde com uma mensagem de sucesso ou uma mensagem de erro.

Por fim, as funções são exportadas como um objeto no final do arquivo, tornando-as disponíveis para uso em outras partes do aplicativo.

```jsx
const User = require("../model/userModel"); //import do model de user que criamos anteiormente
const sequelize = require("../bd"); //importe do sequelize para definir controle de transações (Transaction Control Language, TCL)

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
  const { nome, password, permissao } = req.body; //desestruturação do objeto presente no corpo da requisição
  try {
    //recebe json como argumento do novo elemento que será criado e retorna elemento que foi criado
    const novoUsuario = await User.create({
      nome: nome,
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
  const { novoNome, novoPassword, novaPermissao } = req.body; //desestruturação do objeto presente no corpo da requisição
  const t = await sequelize.transaction(); //abre uma transação para evitar que o banco perda sua integridade
  try {
    //update é metodo do sequelize que atualiza linha da tabela
    await User.update(
      {
        nome: novoNome,
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

//Exportação das funções para acesso no router
module.exports = {
  recuperarUsuarios,
  adicionarUsuario,
  findById,
  excluiUsuario,
  atulizarUsuario,
};
```

### Definindo as rotas no Router

Em um aplicativo web, o roteamento desempenha um papel fundamental na definição de como as diferentes URLs são tratadas, quais ações devem ser executadas e como os recursos são servidos. Para facilitar essa funcionalidade em aplicativos Node.js, a biblioteca Express fornece um recurso chamado **Router**, que é uma parte essencial na criação de rotas e na manipulação de solicitações HTTP.

**O que é um Router?**

Um **Router** no contexto do Express é um módulo que permite organizar e mapear rotas em seu aplicativo Node.js. Ele funciona como um middleware que ajuda a direcionar solicitações HTTP para as funções de controle adequadas. Essas funções de controle executam a lógica de negócios necessária com base no caminho da URL e no método HTTP da solicitação.

**O que um Router Define?**

Um Router define como as rotas devem se comportar em relação a uma série de critérios, incluindo o método HTTP, a URL e qualquer parâmetro que possa estar presente na rota. Com um Router, você pode criar rotas para lidar com:

- **GET**: Para buscar informações.
- **POST**: Para criar novos recursos.
- **PUT**: Para atualizar recursos existentes.
- **DELETE**: Para excluir recursos.

**Rotas Dinâmicas**

No Express, você pode definir rotas dinâmicas usando notações especiais, como **`:id`**. Essa notação indica que um valor variável será capturado a partir da URL e disponibilizado como um parâmetro na função de controle associada. Por exemplo, a rota **`/usuarios/:id`** permitirá que você acesse o valor **`id`** na função de controle quando um URL como **`/usuarios/123`** for acessado, onde **`123`** é o valor do parâmetro **`id`**.

A rota **`/produtos/:categoria?`** no Express define um parâmetro chamado **`categoria`** como opcional, permitindo que os clientes acessem a rota com ou sem um valor para **`categoria`**. Quando um valor é fornecido, ele é acessível na função de controle através de **`req.params.categoria`**, mas se nenhum valor for especificado na URL, o Express considera o valor padrão como "todos". Isso oferece flexibilidade ao usuário, tornando possível listar produtos de uma categoria específica quando desejado, ou todos os produtos quando a categoria não é especificada.

Agora podemos criar no diretório router o arquivo **userRouter.js** . Neste arquivo vamos mapear as funções do controller para as rotas e métodos HTTP.

1. As funções do controlador são importadas no início do arquivo **`routes.js`**.
2. O módulo Express é importado para criar e configurar o objeto **`Router`**.
3. Cada rota é definida usando o método correspondente (**`get`**, **`post`**, **`delete`**, **`put`**) no objeto **`routes`**. A função do controlador correspondente é associada a cada rota.
4. Nas rotas que exigem um parâmetro, como **`/usuarios/:id`**, a notação **`:id`** indica que esse parâmetro será parte da URL da requisição. Por exemplo, uma solicitação para **`/usuarios/123`** fornecerá o valor **`123`** como o parâmetro **`id`**.
5. Finalmente, o objeto **`routes`** é exportado para que ele possa ser utilizado no arquivo principal (geralmente **`server.js`**) para configuração do servidor Express.

```js
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

//mapeamento das funções do controller para seus respectivos métodos HTTP e rotas
routes.get("/usuarios", recuperarUsuarios);
routes.post("/usuario", adicionarUsuario);
routes.get("/usuario/:id", findById); //notação :id indica que o parametro id sera informado na url da requisição
routes.delete("/usuario/:id", excluiUsuario); //notação :id indica que o parametro id sera informado na url da requisição
routes.put("/usuario/:id", atulizarUsuario); //notação :id indica que o parametro id sera informado na url da requisição

//exportamos o objeto routes
module.exports = routes;
```

### Configurando as rotas no aplicativo principal

Para concluir esta seção do guia, vamos integrar as rotas que definimos no router ao servidor, tornando-as finalmente acessíveis para uso por aplicativos externos.

No arquivo **`server.js`**, realize a importação do objeto **`routes`** e, em seguida, passe esse objeto como argumento para a função **`app.use()`**. Isso permitirá a integração das rotas definidas no arquivo de rotas com o aplicativo principal.

```jsx
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bd = require("./bd");

//importamos as rotas do usuário
const userRoutes = require("./router/userRouter");

const app = express(); //inicia o express
app.use(morgan("dev")); //imprime os logs das operações durante o desenvolvimento
app.use(cors()); //libera o cross origin
app.use(express.json()); // configura a API para receber e enviar json.
app.use(userRoutes); // torna as rotas disponíveis para uso

//rota padrão na qual podemos verificar se o servidor está disponível
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Api ok!" });
});

//inicia o servidor através de uma self-invoked function
(async () => {
  try {
    await bd.sync({ force: false }); // sincroniza o banco
    console.log("Banco conectado!");
    app.listen(3000, () => console.log("Service is live!")); //iniciar efetivamente o servidor na porta 3000
  } catch (err) {
    console.log(err);
  }
})();
```

Agora execute novamente a aplicação através do comando npm start . Observe que o sequelize se encarregara da criação da tabela usuarios no banco.

![Captura de Tela 2023-10-14 às 23 34 27](https://github.com/MackLEAPS-Oriente/apiDemostracao/assets/111446977/931cf08f-4786-4e41-abe1-f49e99c51846)

Neste momento a API já está pronta para receber requisições.

## Realizando requisições via PostMan

Podemos utilizar o Postman, uma ferramenta poderosa para testar e documentar APIs. O Postman oferece uma interface amigável que permite criar, enviar e analisar requisições HTTP de maneira eficaz.

Site para download do [Postman](https://www.postman.com)

Requisição GET de todos os usuários cadastrados. Como acabamos de criar o banco ainda não existe nenhum usuário.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/153a68f8-ccd7-480b-ad9b-703080cd3989/Untitled.png)

Agora vamos criar um usuário através do método POST passando um JSON no corpo da requisição. Observe também que não foi necessário informar um id uma vez que o sequelize gerencia as chaves primárias na tabela.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/6209e621-36f2-4664-b5bf-40eeb2535ae5/Untitled.png)

Podemos agora adicionar mais um usuário.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/691703f8-260d-4432-a00b-32e234051c31/Untitled.png)

Agora podemos recuperar todos os usuários no banco através do método GET. Observe que é retornado um array de objetos.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/df68a885-2fe4-4262-a0f4-e668fa183974/Untitled.png)

Podemos também buscar por um usuário especifico informando seu is na url de requisição.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/6d452ffb-baf4-4749-a43e-b7b95e1bbc67/Untitled.png)

Vamos agora editar um usuário. Podemos tanto informar somente um parâmetro como todos os outros no corpo da requisição.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/10aa1489-6664-4ba6-9aa7-d7130a3a383d/Untitled.png)

Usuário Alvaro atualizado.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/cea1cac8-b1f0-4813-aba0-022baa45a9be/Untitled.png)

Agora vamos excluir um usuário. Para isso precisamos informar o id do usuário que queremos excluir.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/43b2dfd2-8e44-4247-944c-a7a965c923f7/Untitled.png)

Lista de usuários atualizada.

### CORS (Cross-Origin Resource Sharing)

**Cross-Origin Resource Sharing (CORS)**, que significa "Compartilhamento de Recursos de Origens Cruzadas", é um mecanismo de segurança em navegadores da web que controla as solicitações HTTP de um domínio (origem) para outro domínio diferente. O CORS é uma política que visa proteger a segurança dos dados em aplicações web, impedindo que um site malicioso acesse recursos em um servidor de outro domínio.

Quando um navegador faz uma solicitação HTTP a um servidor em um domínio diferente (origem), o servidor deve incluir cabeçalhos CORS apropriados em sua resposta para permitir ou negar a solicitação. Esses cabeçalhos especificam quais origens têm permissão para acessar os recursos do servidor e quais tipos de solicitações são permitidos (por exemplo, GET, POST, PUT, DELETE).

O CORS é uma parte essencial da segurança da web moderna, pois ajuda a evitar problemas de segurança, como ataques de falsificação de solicitações entre sites (CSRF) e ataques de falsificação de solicitação de origem cruzada (XSRF). Ele permite que aplicativos web em um domínio acessem recursos em outro domínio de forma segura, desde que o servidor do domínio de destino tenha configurado as políticas de CORS apropriadas.

O CORS é implementado no lado do servidor e pode ser configurado para permitir ou restringir o acesso com base em origens específicas, métodos HTTP e outros cabeçalhos personalizados. Isso ajuda a manter a integridade e a segurança dos dados em ambientes web complexos, onde várias partes podem interagir entre si.

Mais sobre CORS

[CORS](https://www.freecodecamp.org/portuguese/news/o-cabecalho-access-control-allow-origin-explicado-com-um-exemplo-de-cors/)

## Segurança e Autenticação

A autenticação de APIs desempenha um papel crucial na segurança e na integridade dos sistemas modernos, e uma abordagem amplamente adotada para garantir a autenticidade e a autorização de requisições é o uso do **JSON Web Tokens (JWT)**. O JWT é um padrão de token seguro e eficiente que se tornou uma escolha popular para autenticação e autorização em serviços web e aplicativos. Neste artigo, exploraremos em detalhes o funcionamento e a implementação da autenticação de APIs usando JWT, abordando conceitos fundamentais, fluxos de trabalho e melhores práticas para garantir a proteção das suas APIs e a segurança dos seus dados.

Existem dois tipos gerais de token:

- **Token Transparente**: Um token transparente contém informações diretamente legíveis em sua estrutura, geralmente na forma de um JWT (JSON Web Token). Isso significa que todas as informações necessárias para verificar a autenticidade e autorização estão contidas no próprio token.
- **Token Opaco**: Um token opaco, em contraste com um token transparente, é um tipo de token que não contém informações diretamente legíveis em sua estrutura. Em vez disso, ele é uma referência ou identificador que aponta para informações armazenadas de forma segura no servidor de autenticação.

### As três partes de um token JWT

1. **Cabeçalho (Header)**: A primeira parte de um JWT é o cabeçalho, que é um objeto JSON que descreve o tipo do token e o algoritmo de criptografia utilizado para assiná-lo. Por exemplo, o cabeçalho pode indicar que o token é um JWT e que a assinatura foi gerada usando o algoritmo HMAC SHA256.
2. **Carga Útil (Payload)**: A segunda parte do JWT é a carga útil, que contém as informações reivindicadas sobre o usuário ou entidade que está autenticando. Essas informações são chamadas de "claims" e podem incluir dados como o ID do usuário, papéis ou funções, informações de expiração e muito mais. Existem três tipos de claims: reivindicações registradas, reivindicações públicas e reivindicações privadas.
3. **Assinatura (Signature)**: A terceira parte do JWT é a assinatura, que é usada para verificar a integridade do token e garantir que ele não tenha sido adulterado durante a transmissão. A assinatura é gerada usando a chave secreta do servidor de autenticação e os dados do cabeçalho e da carga útil. Quando o receptor do token recebe o JWT, ele verifica a assinatura usando a chave pública do servidor de autenticação. Se a assinatura corresponder, isso indica que o token é válido e não foi modificado.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/b98a78db-b09a-4e09-8e9a-9a092094342d/Untitled.png)

**Link para o JWT Debugger:**

[JWT.IO](https://jwt.io)

Documentação Auth 0:

[JWT.IO - JSON Web Tokens Introduction](https://jwt.io/introduction)

Geralmente, os tokens são incluídos no cabeçalho HTTP da solicitação, especificamente no cabeçalho "Authorization".

**Fluxo geral do uso de um Token JWT em uma solicitação HTTP:**

1. **Obtenção do Token**: Antes de enviar uma solicitação para o servidor de recursos, o cliente deve obter um token de autenticação válido do servidor de autenticação. Isso geralmente envolve um processo de autenticação, como login ou autenticação de terceiros (por exemplo, usando redes sociais).
2. **Inclusão no Cabeçalho Authorization**: O token é então incluído no cabeçalho HTTP da solicitação. Para isso, o cliente adiciona um cabeçalho "Authorization" à solicitação. O valor desse cabeçalho é composto por um tipo de autenticação (como "Bearer") seguido de um espaço e, em seguida, o token em si.

   Exemplo:

   `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5`

3. **Envio da Solicitação**: A solicitação, incluindo o cabeçalho "Authorization", é então enviada para o servidor de recursos.
4. **Validação do Token**: No servidor de recursos, o token é extraído do cabeçalho "Authorization". O servidor de recursos, em seguida, valida o token para garantir que seja válido, não tenha expirado e que a solicitação tenha permissão para acessar os recursos desejados.
5. **Processamento da Solicitação**: Se o token for válido e autorizado, o servidor de recursos processará a solicitação e responderá de acordo.

O uso do cabeçalho "Authorization" é uma prática padronizada e segura para autenticar solicitações HTTP em APIs. Além disso, essa abordagem facilita a integração com bibliotecas e frameworks de desenvolvimento, uma vez que muitos deles oferecem suporte nativo para a manipulação de tokens no cabeçalho "Authorization".
