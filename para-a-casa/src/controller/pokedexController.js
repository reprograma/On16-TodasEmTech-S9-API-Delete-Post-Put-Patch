const pokedex = require("../models/pokedex.json")
const express = require("express")
const app = express()

app.use(express.json())

const updatePoke = (req, res) => {
    const idRequest = req.params.id
    const pokeRequest = req.body

    const pokemonFiltrado = pokedex.findIndex( pokemon => pokemon.id == idRequest)
    pokedex.splice(pokemonFiltrado, 1, pokeRequest)
    
    res.status(200).json([{
        "message": "pokemon atualizado",
        pokedex
    }])
}

const updateStats = (req, res) => {

    const idRequest = req.params.id
    const novoStats = req.body

    const pokemonFiltrado = pokedex.find(pokemon => pokemon.id == idRequest)
    pokemonFiltrado.stats = novoStats
    
    res.status(200).json([{

        "mensagem": "stats alterados",
        pokemonFiltrado
    }])
}

const deletePokeById = (req, res) => {
    const idRequest = req.params.id
    
    const pokeEncontrado = pokedex.findIndex(pokemon => pokemon.id == idRequest)
    pokedex.splice(pokeEncontrado, 1)

    res.status(200).json([{
        "message": "pokemon excluído!",
        pokedex
    }])
}

const deletePokeByType = (req, res) => {
    const typeRequest = req.query.type 
    const pokemonsEncontrados = pokedex.filter(pokemon => pokemon.type.includes(typeRequest))
    for (i = 0; i < pokemonsEncontrados.length; i++){
        const index = pokedex.indexOf(pokemonsEncontrados[i])
        pokedex.splice(index, 1)
    }
    
    res.status(200).json([{
        "message": "tipo deletado",
        pokedex
    }])
}

module.exports = {
    updateStats,
    updatePoke,
    deletePokeById,
    deletePokeByType
}