const filmesJson = require("../models/filmes-barbie.json"); //acessa endereço do banco de dados
const express = require("express");
const app = express();

app.use(express.json());

const getAll = (request, response) => {
  response.status(200).json([
    {
      filmes: filmesJson,
    },
  ]);
};

const updateTitle = (request, response) => {
  // guardo o id que foi enviado no request na constante idRequest (pq params? pq id é especifico e eu uso params para buscas especificas)
  const idRequest = request.params.id;
  // guardo o titulo que foi enviado no body da requisiçao (pq body? pq pra put, patch e post eu PRECISO passar um body)
  let novoTitulo = request.body.title;

  // preciso filtrar o meu ''banco de dados'' para encontrar o id que a pessoa digitou
  filmeFiltrado = filmesJson.find((filme) => filme.id == idRequest);

  // depois disso, o meu filme a parte especifica do titulo será alterada pelo Novo Titulo que foi enviado
  filmeFiltrado.title = novoTitulo;

  // depois disso tudo, mando uma response dizendo q ta tudo OK e envio o filme com a alteraçao
  response.status(200).json([
    {
      mensagem: "seu filme foi atualizado",
      filmeFiltrado,
    },
  ]);
};

const updateMovie = (request, response) => {
  const idRequest = request.params.id;
  let filmeRequest = request.body;

  let indexEncontrado = filmesJson.findIndex((filme) => filme.id == idRequest);

  //remove UM elemento a partir do INDEX ENCONTRADO e adiciona o FILME REQUEST no lugar
  filmesJson.splice(indexEncontrado, 1, filmeRequest);

  response.status(200).json([
    {
      mensagem: "seu filme foi atualizado",
      filmesJson,
    },
  ]);
};

const deleteFilme = (request, response) => {
  const idRequest = request.params.id;

  let indexEncontrado = filmesJson.findIndex((filme) => filme.id == idRequest);

  //retira o filme da array de filmes a partir do índice determinado
  //ARRAY.splice(índice, número de coisas a serem deletadas, item a ser adicionado)
  filmesJson.splice(indexEncontrado, 1);

  response.status(200).json([
    {
      mensagem: "filme deletado",
      deletado: idRequest,
      filmesJson,
    },
  ]);
};

// para excluir uma propriedade: forEach;

module.exports = {
  getAll,
  updateTitle,
  updateMovie,
  deleteFilme
};
