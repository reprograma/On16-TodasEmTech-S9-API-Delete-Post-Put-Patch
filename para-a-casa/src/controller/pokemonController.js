const pokedexJson = require('../models/pokedex.json')
const express = require('express')
const { request, response } = require('express')

const app = express()

app.use(express.json())

const updateAll = (request, response) => {

    const idRequest = request.params.id
    let pokemonRequest = request.body

    let indexEncontrado = pokedexJson.findIndex(pokemon => pokemon.id == idRequest)

    pokedexJson.splice(indexEncontrado, 1, pokemonRequest)

    response.status(200).json([
        {
            "mensagem": "Pokeminho atualizado",
            pokedexJson
        }
    ])
}

const updateStats = (request, response) => {

    const idRequest = request.params.id
    let newStats = request.body.stats

    pokemonEncontrado = pokedexJson.find(pokemon => pokemon.id == idRequest)

    pokemonEncontrado.stats = newStats

    response.status(200).json([
        {
            "mensagem": "stats atualizadas",
            pokemonEncontrado
        }
    ])
}

const deletePokeminho = (request, response) => {

    const idRequest = request.params.id
    let indicePokeminho = pokedexJson.findIndex(pokemon => pokemon.id == idRequest)

    pokedexJson.splice(indicePokeminho, 1)

    response.status(200).json([
        {
            "mensagem": "Poke eminho falecido",
            "infos do falecido": idRequest,
            pokedexJson
        }
    ])
}

const deleteNominho = (request, response) => {

    const idRequest = request.params.name

    let indicePokeminho = pokedexJson.findIndex(pokemon => pokemon.title == idRequest)

    pokedexJson.splice(indicePokeminho, 1)

    response.status(200).json([
        {
            "mensagem": "Pokename sem name",
            "o inominável": idRequest
        }
    ])
}

module.exports = {
    updateAll,
    updateStats,
    deletePokeminho,
    deleteNominho
}