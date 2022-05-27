// AS ROTAS E METODOS DE FILMES

// chamar o controller de filmes
const controller = require('../controller/filmesController')

const express = require('express') // chamando express
const { Router } = require('express')

// funcao de rotas do express
const router = express.Router()

// router. metodo http (rota, funcao)

router.get("/lista", controller.getAll)
router.put("/update/:id", controller.updateFilme)
router.patch("/change/:id", controller.updateTime)
router.delete("/delete/diretor/:director", controller.deleteDiretor)
router.delete("/delete/:id", controller.deleteFilme)


//exportando para ser usado no app.js
module.exports = router