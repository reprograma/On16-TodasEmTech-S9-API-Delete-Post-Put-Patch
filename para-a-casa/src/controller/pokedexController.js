const pokedexJson = require('../models/pokedex.json')
const express = require('express')
const app = express()

app.use(express.json())

const getAll = (request, response) => {

    response.status(200).json([
        {
            "pokedex": pokedexJson
        }
    ])
}


const updatePokemon = (request, response) => {
    
    const idRequest = request.params.id

    let pokemonRequest = request.body

    let indexEncontrado = pokedexJson.findIndex(pokemon => pokemon.id == idRequest)

    pokedexJson.splice(indexEncontrado, 1, pokemonRequest)

    response.status(200).json ([
        {
            'message':'pokemon atualizado',
            pokedexJson
        }
    ])
}


const updateStats = (request, response) => {

    const idRequest = request.params.id

    let newStats = request.body.stats

    pokemonFind = pokedexJson.find(pokemon => pokemon.id == idRequest)

    pokemonFind.stats = newStats

    response.status(200).json ([
        {
            'message': 'stats atualizado',
            pokedexJson
        }
    ])
}

const deletePokemonById = (request, response) => {

    const idRequest = request.params.id

    const indicePokemon = pokedexJson.findIndex(pokemon => pokemon.id == idRequest)

    pokedexJson.splice(indicePokemon, 1)

    response.status(200).json([
        {
            'message':'pokemon deletado',
            'deletado': idRequest,
            pokedexJson
        }
    ])
}

const deletePokemonByType = (request, response) => {

    const typeRequest = request.query.type

    //entra no json de pokemons e procura o que a pessoa inseriu no typeRequest para deletar
    const filteredTypes = pokedexJson.filter(pokemon => pokemon.type.includes(typeRequest))

    //para percorrer todo o array é preciso utilizar um for
    //enquanto o índice for menor que o tamanho do array, executar o código
    for (i = 0; i < filteredTypes.length; i++) {

        const index = pokedexJson.indexOf(filteredTypes[i]) 
        pokedexJson.splice(index, 1) //apaga o que foi encontrado a partir do índice
    }
    
    response.status(200).json([
        {
            'message':'tipos deletados',
            'deletados': typeRequest,
            pokedexJson
        }
    ])
}



module.exports = {
    getAll,
    updatePokemon,
    updateStats,
    deletePokemonById,
    deletePokemonByType
}