const controller = require('../controller/filmeController')

const express = require('express') // chamando express

// funcao de rotas do express
const router = express.Router()

// router. metodo http (rota, funcao)

router.get("/catalogo", controller.getAll)
router.patch("/update/:id", controller.updateTitle)
router.put("/change/:id", controller.updateMovie)
router.delete("/delete/:id", controller.deleteFilme)
router.delete("/delete/title/:title", controller.deleteFilmePorTitulo)

//exportando para ser usado no app.js
module.exports = router

