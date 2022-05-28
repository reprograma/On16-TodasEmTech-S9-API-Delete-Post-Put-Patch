const controller = require('../controller/pokeController')

const express = require('express')

const router = express.Router()


//rotas
router.put('/update/:id', controller.updateAll)
router.patch('/stats/:id', controller.updateStats)
router.delete('/delete/type', controller.deletePokemonType)
router.delete('/delete/:id', controller.deletePokemon)





module.exports = router