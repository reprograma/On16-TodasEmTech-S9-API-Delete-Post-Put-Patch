<<<<<<< HEAD
//AS ROTAS E MÉTODOS DE FILMES_ROUTES

//chamar o CONTROLLER  de filmes
const controller = require('../controller/filmeController')

const express = require('express') // chamando express
=======
// AS ROTAS E METODOS DE FILMES

// chamar o controller de filmes
const controller = require('../controller/filmeController')

const express = require('express') // chamando express
const { Router } = require('express')
>>>>>>> 9bab97180b314b6790bfeb95a55a51e6524a59c7

// funcao de rotas do express
const router = express.Router()

// router. metodo http (rota, funcao)
<<<<<<< HEAD
=======

>>>>>>> 9bab97180b314b6790bfeb95a55a51e6524a59c7
router.get("/catalogo", controller.getAll)
router.patch("/update/:id", controller.updateTitle)
router.put("/change/:id", controller.updateMovie)
router.delete("/delete/:id", controller.deleteFilme)
<<<<<<< HEAD

//exportando para ser usado no app.js
module.exports = router
=======
router.delete("/delete/title/:title", controller.deleteFilmePorTitulo)

//exportando para ser usado no app.js
module.exports = router

>>>>>>> 9bab97180b314b6790bfeb95a55a51e6524a59c7
