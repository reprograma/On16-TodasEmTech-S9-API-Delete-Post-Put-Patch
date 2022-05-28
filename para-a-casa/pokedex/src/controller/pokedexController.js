const pokedexJson = require("../model/pokedex.json");
const express = require("express");
const app = express();

app.unsubscribe(express.json());

const getAllPoke = (req, res) => {
  res.status(200).json([
    {
      Pokedex: pokedexJson,
    },
  ]);
};

const replacePokemon = (req, res) => {
  const idRequest = req.params.id;
  let pokedexRequest = req.body;

  let indexFound = pokedexJson.findIndex((poke) => poke.id == idRequest);

  pokedexJson.splice(indexFound, 1, pokedexRequest);

  if (indexFound > -1) {
    res.status(200).json({
      message: "Pokemón alterado!",
      Pokedex: pokedexJson,
    });
  } else {
    res.status(404).json({
      message: "Esse pokemon não foi alterado!",
    });
  }
};

const updateStats = (req, res) => {
  const idRequest = req.params.id;

  let newStats = req.body.stats;

  podekexFilter = pokedexJson.find((poke) => poke.id == idRequest);

  if (podekexFilter) {
    podekexFilter.stats = newStats;

    res.status(200).json({
      mensagem: "Stats atualizado!",
      Pokedex: pokedexJson,
    });
  } else {
    res.status(404).json({
      message: "O status desse pokemon não foi modificado",
    });
  }
};

const deleteById = (req, res) => {
  const idRequest = req.params.id;

  const deleteId = pokedexJson.findIndex((poke) => poke.id == idRequest);

  pokedexJson.splice(deleteId, 1);

  if (deleteId > -1) {
    res.status(200).json({
      message: "Pokemón deletado pelo id!",
      deleted: idRequest,
      Pokedex: pokedexJson,
    });
  } else {
    res.status(404).json({
      message: "Esse pokemon não foi deletado!",
    });
  }
};

const deleteByType = (req, res) => {
  const typeRequest = req.query.type;

  const typeFilter = pokedexJson.filter((poke) =>
    poke.type.includes(typeRequest)
  );

  for (i = 0; i < typeFilter.length; i++) {
    const search = pokedexJson.indexOf(typeFilter[i]);
    pokedexJson.splice(search, 1);
  }

  if (typeFilter.length > 0) {
    res.status(200).json([
      {
        message: "Pokemón deletado pelo tipo!",
        deleted: typeRequest,
        Pokedex: pokedexJson,
      },
    ]);
  } else {
    res.status(404).json({
      message: "Esse pokemon não foi deletado!",
    });
  }
};

module.exports = {
  getAllPoke,
  replacePokemon,
  updateStats,
  deleteById,
  deleteByType,
};
