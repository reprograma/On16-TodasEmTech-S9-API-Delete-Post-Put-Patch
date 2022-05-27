//AS ROTAS E METODOS DE FILMES

//chamar o controller de filmes
const controller = require('../controller/filmeController')

//chamando o express
const express = require('express') 

//função de rotas do express
const router = express.Router()

//router.metodo http (rota, funcao)

router.get("/catalogo", controller.getAll)
router.put("/change/:id", controller.updateMovie)
router.patch("/update/:id", controller.updateTime)
router.delete("/delete/director", controller.deleteFilmePorDiretor)
router.delete("/delete/:id", controller.deleteMovie)


//exportando para ser usado no app.js
module.exports = router