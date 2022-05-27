//Rotas e métodos de filmes

// chamo o controller de filmes

const controller = require("../controller/filmeController")

const express = require("express") // chamando express

// função de rotas do express
const router = express.Router()

//router, metodo http(rota, funcao)
router.get("/catalogo", controller.getAll)
router.patch("/update/:id", controller.updateTitle)
router.put("/change/:id", controller.updateMovie)
router.delete("/delete/:id", controller.deleteFilme)

//exportando para ser usa
module.exports = router
