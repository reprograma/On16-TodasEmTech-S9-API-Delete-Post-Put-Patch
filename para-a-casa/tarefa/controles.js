

module.exports = {
    pokedex,
    updatePoke,
    updateName,
    updateStats,
    deletePoke,
}  

const pokedexJson = require("../models/pokedex.json")
const express = require("express")
const app = express()

app.use(express.json())

const pokedex = (req, res) => {
    res.status(200).json([
        {
            "Pokemon": ``,
            pokedexJson

        }
    ])
}
const updatePoke = (req, res) => {
    const idReq = req.params.id
    let upPokemon = req.body
    let varrePokedex = pokedexJson.find(pokemon => pokemon.id == idReq)
    pokedexJson.splice(varrePokedex, idReq, upPokemon)
    res.status(200).json([{
        "message": "Atualizado com sucesso!",
        "Mudança: ": idReq,
        pokedexJson
    }])
}

const updateName = (req, res) => {
    const nameReq = req.query.name
    let newName = req.body.name

    findPoke = pokedexJson.find(pokemon => pokemon.name.toLocaleLowerCase().includes(nameReq))
    findPoke.name = newName

    res.status(200).json([{
        "message": "Alterado!",
        "novo nome": nameReq,
        pokedexJson
    }])
}


const updateStats = (req, res) =>{
    const idReq = req.params.id
    let newSs = req.body.stats
    findPoke = pokedexJson.find(po => po.id == idReq)
    findPoke.stats = newSs

    res.status(200).json([{
        "message": "Atualizado!",
        "alterado": findPoke,
        pokedexJson
    }])
}


const deletePoke = (req, res) => {
    const idRequest = req.params.id
    const num = pokedexJson.find(item => item.id.includes(idRequest))
    pokedexJson.splice(num, 1)
    res.status(200).json([{
        "message": "Inválido",
        "Inválido": idRequest,
        pokedexJson
    }])
}

