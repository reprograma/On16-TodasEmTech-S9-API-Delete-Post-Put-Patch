// AS ROTAS E METODOS DE FILMES

// chama o controller de filmes

const controller = require("../controller/filmeController");

const express = require("express");

// função de rotas do express
const router = express.Router();

// router. método http (rota, funcao)

router.get("/catalogo", controller.getAll);

router.patch("/update/:id", controller.updateTitle);

router.put("/change/:id", controller.updateMovie);

router.delete("/delete/:id", controller.deleteFilme);

// exporta para ser usado no app.js
module.exports = router;
