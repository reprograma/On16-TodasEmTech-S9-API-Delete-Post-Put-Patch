const controller = require('../controller/pokedexController')

const express = require('express')

const router = express.Router()

module.exports = router

router.get('/pokemons', controller.getAll)
router.put('/update/:id', controller.updatePokemon)
router.patch('/update/stats/:id', controller.updateStats)
router.delete('/delete/:id', controller.deletePokemonById)
router.delete('/deletes/type', controller.deletePokemonByType)


