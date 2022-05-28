const ghiblifilmsJson = require("../model/ghiblifilms.json");
const express = require("express");
const app = express();

app.unsubscribe(express.json());

const getAllMovie = (req, res) => {
  res.status(200).json([
    {
      ghiblifilms: ghiblifilmsJson,
    },
  ]);
};

const replaceMovie = (req, res) => {
  const idRequest = req.params.id;

  let ghibliRequeri = req.body;

  let indexFound = ghiblifilmsJson.findIndex((movie) => movie.id == idRequest);

  ghiblifilmsJson.splice(indexFound, 1, ghibliRequeri);

  if (indexFound > -1) {
    res.status(200).json({
      message: "Filme substituído!",
      ghiblifilms: ghiblifilmsJson,
    });
  } else {
    res.status(404).json({
      message: "Esse filme não foi substituído!",
    });
  }
};

const modifyDuration = (req, res) => {
  const idRequest = req.params.id;

  let newRunningTime = req.body.running_time;

  ghiblifilmsFilter = ghiblifilmsJson.find((movie) => movie.id == idRequest);

  if (ghiblifilmsFilter) {
    ghiblifilmsFilter.running_time = newRunningTime;

    res.status(200).json({
      mensagem: "Tempo de Duração do filme modificada com sucesso!",
      ghiblifilms: ghiblifilmsJson,
    });
  } else {
    res.status(404).json({
      message: "A duração desse filme não foi modificado!",
    });
  }
};

const deleteById = (req, res) => {
  const idRequest = req.params.id;

  const deleteId = ghiblifilmsJson.findIndex((movie) => movie.id == idRequest);

  ghiblifilmsJson.splice(deleteId, 1);

  if (deleteId > -1) {
    res.status(200).json({
      message: "Filme deletado pelo id",
      deleted: idRequest,
      ghiblifilms: ghiblifilmsJson,
    });
  } else {
    res.status(404).json({
      message: "Esse filme não foi deletado!",
    });
  }
};

const deleteByDirector = (req, res) => {
  const directorRequest = req.query.director;

  const directorFilter = ghiblifilmsJson.filter((movie) =>
    movie.director.includes(directorRequest)
  );

  for (i = 0; i < directorFilter.length; i++) {
    const search = ghiblifilmsJson.indexOf(directorFilter[i]);
    ghiblifilmsJson.splice(search, 1);
  }

  if (directorFilter.length > 0) {
    res.status(200).json([
      {
        message: "Filme deletado pelo diretor!",
        deleted: directorRequest,
        ghiblifilms: ghiblifilmsJson,
      },
    ]);
  } else {
    res.status(404).json({
      message: "Esse filme não foi deletado!",
    });
  }
};

module.exports = {
  getAllMovie,
  replaceMovie,
  modifyDuration,
  deleteById,
  deleteByDirector,
};
