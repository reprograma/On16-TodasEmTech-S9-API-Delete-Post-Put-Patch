const pokedexJson = require('../models/pokedex.json')
const express = require("express")
const app = express()

app.unsubscribe(express.json())

const getAll = (request, response) => {

  response.status(200).json([
    {
      Pokedex: pokedexJson,
    },
  ]);
};

const replacePokemon = (request, response) => {
  const idRequest = request.params.id
  let pokedexRequeri = request.body

  let indexEncontrado = pokedexJson.findIndex((poke) => poke.id == idRequest)

  pokedexJson.splice(indexEncontrado, 1, pokedexRequeri)

  if (indexEncontrado > -1) {
    response.status(200).json({
      message: "Pokemón encontrado!",
      deleted: indexEncontrado,
      pokedexJson,
    })
  } else {
    response.status(404).json({
      message: "Esse pokemon não foi encontrado",
    });
  }
}

const updateStats = (request, response) => {
  const idRequest = request.params.id

  let newStats = request.body.stats

  podekexFilter = pokedexJson.find((poke) => poke.id == idRequest)

  if (podekexFilter) {

    podekexFilter.stats = newStats

    response.status(200).json({
      mensagem: "Stats atualizado!",
      pokedexJson,
    })
  } else {
    response.status(404).json({
      message: "O status desse pokemon não foi modificado",
    })
  }
}


const deleteById = (request, response) => {
  const idRequest = request.params.id

  const deleteId = pokedexJson.findIndex((poke) => poke.id == idRequest)

  pokedexJson.splice(deleteId, 1)

  if (deleteId > -1) {
    response.status(200).json({
      message: "Pokemón deletado pelo id",
      deleted: idRequest,
      pokedexJson,
    })
  } else {
    response.status(404).json({
      message: "Esse pokemon não foi deletado",
    })
  }
}

const deleteByType = (request, response) => {
  const typeRequest = request.query.type;

  const typeFilter = pokedexJson.filter((poke) =>
    poke.type.includes(typeRequest)
  )

  for (i = 0; i < typeFilter.length; i++) {
    const search = pokedexJson.indexOf(typeFilter[i]);
    pokedexJson.splice(search, 1)
  }

  if (typeFilter.length > 0) {
    response.status(200).json([
      {
        message: "Pokemón deletado pelo tipo",
        deleted: typeRequest,
        pokedexJson,
      },
    ])
  } else {
    response.status(404).json({
      message: "Esse pokemon não foi deletado",
    })
  }
}

module.exports = {
  getAll,
  replacePokemon,
  updateStats,
  deleteById,
  deleteByType,
}