# API REST

# Introdução

Uma Interface de Programação de Aplicativos para a web, ou simplesmente APIs, são  uma peça fundamental na interconexão e na colaboração de sistemas de software pela internet. As APIs HTTP, mais especificamente são como pontes invisíveis que permitem que diferentes aplicativos, plataformas e serviços comuniquem-se e compartilhem dados de maneira eficiente através do protocolo HTTP (Hypertext Transfer Protocol). Nos últimos anos, o universo das APIs HTTP tem vivenciado um crescimento exponencial, impulsionado pela necessidade de integração entre sistemas web e expansão de ecossistemas digitais.

As APIs  são o meio de caminho entre o banco de dados e o cliente em sistemas de software. Ela recebe as solicitações do cliente, executa a lógica de negócios, como autenticação e autorização, e traduz essas solicitações em comandos compreensíveis para o banco de dados. Posteriormente, a API recebe as respostas do banco de dados e as retorna de forma estruturada ao cliente. Além de facilitar a comunicação, a API oferece benefícios essenciais, como segurança, abstração dos detalhes técnicos do banco de dados e flexibilidade para realizar alterações no sistema sem afetar diretamente o cliente.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/a55f46b2-a30e-4bc1-9e31-ed54a81d01f4/Untitled.png)

## Protocolo HTTP

O Protocolo HTTP (Hypertext Transfer Protocol) é uma linguagem padronizada que permite a comunicação entre clientes e servidores na web. Ele opera sobre o protocolo TCP (Transmission Control Protocol) e define como as mensagens são formatadas e transmitidas, facilitando a recuperação de recursos, como páginas da web e dados, por meio de URLs. As solicitações HTTP são geralmente compostas por métodos, como GET, POST, PUT e DELETE, que determinam a ação a ser realizada no servidor, e os cabeçalhos, que contêm informações adicionais sobre a solicitação. As respostas do servidor incluem códigos de status para indicar o sucesso ou a falha da solicitação e o conteúdo desejado. O HTTP é a base da World Wide Web e é amplamente utilizado em APIs, pois oferece uma estrutura consistente e eficiente para a comunicação entre sistemas distribuídos na internet. Isso permite que aplicativos e serviços interajam de maneira previsível, o que é fundamental para a integração e a interoperabilidade em um ambiente web global.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/323e8996-a1d0-4ac7-84fb-fbc5e7a36030/Untitled.png)

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

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/54a5e7ca-05ea-47ff-b72b-5bb9f2f8238c/Untitled.png)

### Links Uteis

[HTTP Status Dogs](https://httpstatusdogs.com)

## Banco de Dados e Mapeamento usando ODM e ORM

ORM (Object-Relational Mapping) e ODM (Object-Document Mapping) são padrões de mapeamento que facilitam a interação entre sistemas de software  e bancos de dados relacionais (no caso do ORM) ou bancos de dados NoSQL orientados a documentos (no caso do ODM). A principal motivação para o uso de objetos de mapeamento é a abstração do banco de dados permitindo interagir com o banco de dados sem precisar escrever SQL diretamente. Outra motivação é que o código ORM é frequentemente independente do banco de dados subjacente, permitindo uma mudança mais fácil de um banco de dados para outro.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/986aa8f3-36ca-44e3-81ae-ea6de53a147a/Untitled.png)

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

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/974bbbb1-6459-4dca-b5c9-8aa56c7fa994/Untitled.png)

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
      await bd.sync({ force: false });// sincroniza o banco
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

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/c3391842-3dc8-4e67-96c9-de944e362e15/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/123b9f29-ec7b-4cef-a348-f6b498678846/2751de96-eb95-4920-8069-dc201c9cd919/Untitled.png)

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
        primaryKey: true,//define que esta coluna é a chame primária
        autoIncrement: true,//incrmenta o id em uma unidade evitando duplicidade de chave primaria
        allowNull: false, //define que este atributo não pode ser vazio
      },
      usuario: {
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
      }
    },
    {
      timestamps: false, //desabilita o armazenamento de datas em que foi criado e atualizado
    }
  );
  
  module.exports = User;
```

Para entender melhor o funcionamento e os tipos de dados acesse a documentação do sequelize no link abaixo.

[Getting Started | Sequelize](https://sequelize.org/docs/v6/getting-started/)

### Criando o CRUD da API através de funções controller

Agora vamos criar as funções que são responsáveis por receber as requisições processa-las recuperando as informações do banco de dados e retornar um json como resposta para o cliente. Crie um arquivo **userController.js** na pasta **controller**.
