// AS ROTAS E METODOS DE FILMES

// chamar o controller de filmes
const controller = require('../controller/filmeController')

const express = require('express') // chamando express

// funcao de rotas do express
const router = express.Router()

// router. metodo http (rota, funcao)

router.put("/change/:id", controller.updateMovie)
router.patch("/duration/:id", controller.movieDuration)
router.delete("/delete/:id", controller.deleteFilme)
router.delete("/delete/:director", controller.deleteDiretor)


module.exports = router


