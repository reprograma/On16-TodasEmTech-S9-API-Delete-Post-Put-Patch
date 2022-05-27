//Só entra as rotas e métodos de filmes

//chamar o controller de filmes
const controller = require('../controller/filmeController')

const express = require('express') //chamando express

const router = express.Router() //função de rotas do express

//route. metodo http (rota, função)

router.get('/catalogo', controller.getAll)
router.patch('/update/:id', controller.updateTitle)
router.put('/change/:id', controller.updateMovie)
router.delete('/delete/:id', controller.deleteFilme)

//exportando para ser usado no app.js
module.exports = router
