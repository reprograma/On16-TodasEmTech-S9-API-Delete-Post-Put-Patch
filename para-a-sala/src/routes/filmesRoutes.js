const controller = require('../controller/filmeController')

const express = require('express')

//criar função de rotas de express

const router = express.Router()

// router. metodo http (rota, função)

router.patch("/update/:stats", controller.updateStats)
router.put("/change/:id", controller.updatePokemon)
router.patch("/update/:stats", controller.updateStats)


// exportando para ser usado no app.js

module.exports = router