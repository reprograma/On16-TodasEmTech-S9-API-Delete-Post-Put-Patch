const pokeJson = require('../models/pokedex.json')

const express = require('express')

const app = express()

app.use(express.json())

const getAllPokedex = (request, response) => {

    response.status(200).json(pokeJson)
};

const updateAll = (request, response) => {
    const idRequest = request.params.id
    let upPokemon = request.body

    let pokemonFilter = pokeJson.find(pokemon => pokemon.id == idRequest)

    pokeJson.splice(pokemonFilter, idRequest, upPokemon)

    if (pokemonFilter > -1){
        response.status(200).json([{
        "message": "Pokemon alterado",
        idRequest,
        pokeJson
    }])
    } else{
        response.status(404).json({
            "message": "Pokemon não encontrado"
        })
    }
}

const updateStats = (request, response) =>{

    const idRequest = request.params.id
    let newStats = request.body.stats
    
    pokemonFind = pokeJson.find(pokemon => pokemon.id == idRequest)
    pokemonFind.stats = newStats

    response.status(200).json([{
        "message": "Status alterado",
        pokemonFind,
        pokeJson
    }])
}


const deletePokemon = (request, response) => {

    const idRequest = request.params.id
    const indicePokemon = pokeJson.findIndex(poke => poke.id == idRequest)

    pokeJson.splice(indicePokemon, 1)

    response.status(200).json([{
        "message": "Pokemon deletado",
        idRequest,
        pokeJson
    }])
}


const deletePokemonType = (request, response) => {

    const typeRequest = request.query.type

    const typeFilter = pokeJson.filter(pokemon => pokemon.type.includes(typeRequest))

    for (index = 0; index < typeFilter.length; index++) {

        const pokeIndex = pokeJson.indexOf(typeFilter[index]) 
        pokeJson.splice(pokeIndex, 1) 
    }
    
    response.status(200).json([
        {
            'message':'tipos deletados',
            'deletados': typeRequest,
            pokeJson
        }
    ])
}





module.exports = {
    getAllPokedex,
    updateAll,
    updateStats,
    deletePokemon,
    deletePokemonType
}
