const filmesJson = require("../models/filmes-barbie.json");
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
  const idRequest = request.params.id;
  let novoTitulo = request.body.title;

  filmeFiltrado = request.body.title;
  filmeFiltrado = filmesJson.find((filme) => filme.id == idRequest);

  filmeFiltrado.title = novoTitulo;
  response.status(200).json([
    {
      message: "seu filme foi atualizado",
      filmeFiltrado,
    },
  ]);
};

const updateMovie = (req, res) => {
  const idRequest = req.params.id;
  let filmeRequest = req.body;

  let indexEncontrado = filmesJson.findIndex((filme) => filme.id == idRequest);

  filmesJson.splice(indexEncontrado, 1, filmeRequest);
  res.status(200).json([
    {
      message: "filme atualizado",
      filmesJson,
    },
  ]);
};

const deleteFilme = (req, res) => {
 const idRequest = req.params.id

 const indiceFilme = filmesJson.findIndex(filme => filme.id == idRequest)

 filmesJson.splice(indiceFilme, 1)
 res.status(200).json([
    {
      message: "filme deletado gata",
      "deletado": idRequest,
      filmesJson,
    },
  ]);

}

module.exports = {
  getAll,
  updateTitle,
  updateMovie,
  deleteFilme
};
