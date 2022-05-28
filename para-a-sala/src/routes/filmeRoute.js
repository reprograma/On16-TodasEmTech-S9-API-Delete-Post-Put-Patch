//Rodas e métodos de filmes
// 1º vai precisar chamar o controller de filmes

const controller = require('../controller/filmeController')

const express = require('express')

//função de rotas dentro do express
const router = express.Router()

//router. método http (roda,função)
router.get('/catalogo', controller.getAll)
router.patch('/update/:id', controller.updateTitle)
router.put('/change/:id', controller.updateMovie)
router.delete('/delete/:id', controller.deleteFilme)

module.exports = router