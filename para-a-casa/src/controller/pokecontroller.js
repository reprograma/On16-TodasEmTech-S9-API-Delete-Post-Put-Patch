const pokeJson = require("../models/pokedex.json")
const express = require("express")

const app = express()

app.use(express.json())

const getAll = (request, response) => {
    response.status(200).json([
        {
            "Pokemon": pokeJson
        }
    ])
}

const updateAll = (request, response) => {
    const idRequest = request.params.id
    let alteraPokemon = request.body

    pokemonFiltrado = pokeJson.find(poke => poke.id == idRequest)
    pokemonFiltrado = alteraPokemon

    response.status(200).json([{
        "message": "Todas as informações do seu pokemon foram alteradas",
        pokemonFiltrado
    }])
}

const updateStats = (request, response) =>{
    const idRequest = request.params.id
    let novoStats = request.body.stats
    
    pokemonFiltrado = pokeJson.find(poke => poke.id == idRequest)
    pokemonFiltrado.stats = novoStats

    response.status(200).json([{
        "message": "O stats do seu Pokemon foi alterado",
        pokemonFiltrado
    }])
}

const deletePokemon = (request, response) => {
    const idRequest = request.params.id
    const indicePokemon = pokeJson.findIndex(poke => poke.id == idRequest)

    pokeJson.splice(indicePokemon, 1)

    response.status(200).json([{
        "message": "Pokemon Deletado",
        "deletado": idRequest,
        pokeJson
    }])
}

// verificar como deleta o tipo
const deleteTipo = (request, response) =>{
    const tipoRequest = request.query.type
    const buscaTipo = pokeJson.filter(poke => poke.type == tipoRequest)

    for (let indice = 0; indice < pokeJson.length; indice ++) {
        const indicePokemon = pokeJson.indexOf(buscaTipo[indice]);
        pokeJson.splice(indicePokemon, 1)
    }

    response.status(200).json([{
        "message": "Tipo de Pokemon deletado",
        "deletado": tipoRequest,
        pokeJson
    }])
}   

module.exports = {
    getAll,
    updateAll,
    updateStats,
    deletePokemon,
    deleteTipo
}