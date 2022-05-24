// AS ROTAS DE FILMES GHIBLI

const controller = require('../controller/filmesControllers.js') //chamar o controller de filmes
const express = require('express') // Chamando express


// função de rotas do express
const router = express.Router()

// router. metodo http (rota, funcao)
router.get("/catalogoGhibli", controller.getListarTudo)
router.put("/atualizarTodosDados/:id", controller.alterarTodosDados)
router.patch("/atualizarDuracao/:id", controller.alterarDuracao)
router.delete("/deleteId/:id", controller.deletaFilmePorId)
router.delete("/deleteDirector/:director", controller.deletaFilmePorDiretor)   // ainda em dúvida

// exportando para ser usado no app.js
module.exports = router