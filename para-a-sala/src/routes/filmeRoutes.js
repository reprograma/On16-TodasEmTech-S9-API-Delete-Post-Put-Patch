//AS ROTAS E METODOS DE FILMES

//chamar o controller de filmes
const controller = require('../controller/filmeController')

const express = require('express') //chamando o express
const { routes } = require('../app')

//função de rotas do express
const router = express.Router()

//router. metodo http (rota, funcao)

router.get("/catalogo", controller.getAll)

//exportando para ser usado no app.js
module.exports = router