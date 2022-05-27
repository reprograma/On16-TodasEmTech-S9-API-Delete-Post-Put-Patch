const pokeJson = require('../models/pokedex.json')

const express = require('express')

const app = express()

app.use(express.json())

const updateAll = (request, response) => {
    const idRequest = request.params.id
    let upPokemon = request.body

    let pokemonFilter = pokeJson.find(pokemon => pokemon.id == idRequest)

    pokeJson.splice(pokemonFilter, idRequest, upPokemon)

    response.status(200).json([{
        "mensagem": "Todas as informações do seu pokemon foram alteradas",
        "alterado": idRequest,
        pokeJson
    }])
}

const updateStats = (request, response) =>{

    const idRequest = request.params.id
    let newStats = request.body.stats
    
    pokemonFind = pokeJson.find(pokemon => pokemon.id == idRequest)
    pokemonFind.stats = newStats

    response.status(200).json([{
        "mensagem": "Status Atualizado",
        "alterado": pokemonFind,
        pokeJson
    }])
}


const deletePokemon = (request, response) => {

    const idRequest = request.params.id
    const indicePokemon = pokeJson.findIndex(poke => poke.id == idRequest)

    pokeJson.splice(indicePokemon, 1)

    response.status(200).json([{
        "mensagem": "Pokemon Deletado",
        "deletado": idRequest,
        pokeJson
    }])
}

// const deletePokemonType = (request, response) => {

//     const typeRequest = request.query.type 

//     const typeFilter = pokeJson.filter(pokemon => pokemon.type.includes(typeRequest))

//     for (index = 0; index < typeFilter.lenght; index++) {

//         const indexPokemon = pokeJson.indexOf(typeFilter[index])
//         pokeJson.splice(indexPokemon, 1)

//     }

//     response.status(200).json([
//         {
//             "mensagem" : "Pokemon deletado com sucesso",
//             "deletado" : typeRequest,
//             pokeJson
//         }
//     ])
// }

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
    updateAll,
    updateStats,
    deletePokemon,
    deletePokemonType
}