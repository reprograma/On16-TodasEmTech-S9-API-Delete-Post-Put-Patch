//AS ROTAS E METODOS DE FILMES

//chamar o controller de filmes
const controller = require('../controller/movieController')

//chamando o express
const express = require('express') 

//função de rotas do express
const router = express.Router()

//router.metodo http (rota, funcao)

router.get("/catalogo", controller.getAll)
router.patch("/update/:id", controller.updateTitle)
router.put("/change/:id", controller.updateMovie)
router.delete("/delete/title/:title", controller.deleteFilmePorTitulo) 
router.delete("/delete/:id", controller.deleteFilme)

//exportando para ser usado no app.js
module.exports = router