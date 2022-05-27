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

// TO CHANGE ALL DATA OF A POKEMON (EXCEPT ID) - put

const updatePokemon = (request, response) => {
  const idRequest = request.params.id;
  const pokemonRequest = request.body;

  const foundIndex = pokemonJson.findIndex(
    (pokemon) => pokemon.id === parseInt(idRequest)
  );

  pokemonJson.splice(foundIndex, 1, pokemonRequest);

  response.status(200).json([
    {
      message: "Pokemon updated!",
      pokemonJson,
    },
  ]);
};

/** 
const newPokeJson = pokemonJson.map((pokemon) => {
    if (pokemon.id === idRequest) {
      return {
        ...pokemon,
        ...pokemonRequest,
      };
    }
    return pokemon;
  });
*/

// TO CHANGE POKEMON'S STATS - patch

const updateStats = (request, response) => {
  const idRequest = request.params.id;
  const newStats = request.body.stats;

  const filteredPokemon = pokemonJson.find(
    (pokemon) => pokemon.id === parseInt(idRequest)
  );
  filteredPokemon.stats = newStats;

  response.status(200).json([
    {
      message: "Stats updated!",
      pokemonJson,
    },
  ]);
};

// DELETE POKEMON BY ID - delete

const deletePokemonId = (request, response) => {
  const idRequest = request.params.id;

  const foundIndex = pokemonJson.findIndex(
    (pokemon) => pokemon.id === parseInt(idRequest)
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

// DELETE POKEMON BY TYPE - delete

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

/**
const updatedJson = pokemonJson.filter(pokemon => !pokemon.type.includes(typeRequest));
*/

module.exports = {
  pokedex,
  updatePokemon,
  updateStats,
  deletePokemonId,
  deletePokemonType,
};
