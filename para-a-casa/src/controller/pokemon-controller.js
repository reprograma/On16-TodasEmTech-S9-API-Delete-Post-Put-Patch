const pokemonJson = require("../models/pokedex.json");
const express = require("express");
const app = express();

app.use(express.json());

const pokedex = (request, response) => {
  response.status(200).json([
    {
      pokemons: pokemonJson,
    },
  ]);
};

// ALTERAR TODOS OS DADOS DE UM POKEMON (MENOS ID) - put

const updatePokemon = (request, response) => {
  const idRequest = request.params.id;
  const pokemonRequest = request.body;

  const foundIndex = pokemonJson.findIndex(
    (pokemon) => pokemon.id == idRequest
  );

  pokemonJson.splice(foundIndex, 1, pokemonRequest);

  response.status(200).json([
    {
      message: "Pokemon updated!",
      pokemonJson,
    },
  ]);
};

// ALTERAR STATS DE UM POKEMON - patch

const updateStats = (request, response) => {
  const idRequest = request.params.id;
  const newStats = request.body.stats;

  const filteredPokemon = pokemonJson.find((pokemon) => pokemon.id == idRequest);
  filteredPokemon.stats = newStats;

  response.status(200).json([
    {
      message: "Stats updated!",
      pokemonJson,
    },
  ]);
};

// EXCLUIR POKEMON POR ID - delete

const deletePokemonId = (request, response) => {
  const idRequest = request.params.id;

  const foundIndex = pokemonJson.findIndex(
    (pokemon) => pokemon.id == idRequest
  );

  pokemonJson.splice(foundIndex, 1);

  response.status(200).json([
    {
      message: "Pokemon deleted by ID.",
      deleted: idRequest,
      pokemonJson,
    },
  ]);
};

// EXCLUIR POKEMON POR TIPO - delete (exclui apenas pokemons com um único tipo)

const deletePokemonType = (request, response) => {
  const typeRequest = request.query.type;

  const filteredPokemon = pokemonJson.filter((pokemon) =>
    pokemon.type.includes(typeRequest)
  );

  for (let i = 0; i < filteredPokemon.length; i++) {
    const index = pokemonJson.indexOf(filteredPokemon[i]); //compara elementos de pesquisa com elementos do array

    pokemonJson.splice(index, 1);
  }

  response.status(200).json([
    {
      message: "Pokemons deleted by Type.",
      deleted: typeRequest,
      filteredPokemon,
      pokemonJson,
    },
  ]);
};

module.exports = {
  pokedex,
  updatePokemon,
  updateStats,
  deletePokemonId,
  deletePokemonType,
};
