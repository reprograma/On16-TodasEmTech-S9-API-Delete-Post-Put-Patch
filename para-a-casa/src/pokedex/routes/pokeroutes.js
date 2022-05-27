const controller = require('../controller/pokeController')

const express = require('express')

const router = express.Router()


router.get('/', controller.getAllPokedex)
router.put('/update/:id', controller.updateAll)
router.patch('/stats/:id', controller.updateStats)
router.delete('/delete/:id', controller.deletePokemon)
router.delete('/deletes/type', controller.deletePokemonType)





module.exports = router