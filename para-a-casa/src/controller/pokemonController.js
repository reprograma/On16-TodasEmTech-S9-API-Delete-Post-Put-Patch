const pokemonsJson = require("../models/pokedex.json")
const express = require("express")
const { request, response } = require("../app")
const app = express()

app.use(express.json())

const getAll = (request, response) => {

  response.status(200).json([
    {
      "Mensagem": pokemonsJson
    }
  ])

}

const updateStats = (request, response) => {

  const idRequest = request.params.id
  let novaEstatistica = request.body.stats

  pokemonFiltrado = pokemonsJson.find(pokemon => pokemon.id == idRequest)

  pokemonFiltrado.stats = novaEstatistica

  response.status(200).json([
    {
      "mensagem": "A estatística do seu pokemon foi atualizada",
      pokemonFiltrado
    }
  ])
}

const updatePokemon = (request, response) => {

  const idRequest = request.params.id
  let pokemonRequest = request.body

  let indexEncontrado = pokemonsJson.findIndex(pokemon => pokemon.id == idRequest)

  pokemonsJson.splice(indexEncontrado, 1, pokemonRequest)

  response.status(200).json([
    {
      "mensagem": "pokemon atualizado",
      pokemonsJson
    }
  ])
}

const deletePokemonId = (request, response) => {

  
  const idRequest = request.params.id

  const indicePokemon = pokemonsJson.findIndex(pokemon => pokemon.id == idRequest)

  pokemonsJson.splice(indicePokemon, 1)

  response.status(200).json([
    {
      "mensagem": "Pokemon deletado a partir de Id",
      "deletado": idRequest,
      pokemonsJson
    }
  ])  
  
}

const deletePokemonTipo = (request, response) => {
  
  const tipoRequest = request.query.tipo 

  const pokemonFiltradoTipo = pokemonsJson.filter(pokemon => pokemon.type.includes(tipoRequest))

  for(let i = 0; i < pokemonFiltradoTipo.length; i++) {

    const indicePokemonTipo = pokemonsJson.findIndex(pokemon => pokemon.id == pokemonFiltradoTipo[i].id)

    pokemonsJson.splice(indicePokemonTipo, 1)    

  } 
  
  response.status(200).json([
    {
      "mensagem": "Pokemon deletado a partir de tipo",
      "deletado": tipoRequest,
      pokemonsJson
    }
  ])
}

module.exports = {
  getAll,
  updateStats,
  updatePokemon,
  deletePokemonId,
  deletePokemonTipo
}
 



