const controller = require("../controller/pokedexController");

const express = require("express");

const router = express.Router();

router.get("/pokemonList", controller.getAllPoke);
router.put("/change/:id", controller.replacePokemon);
router.patch("/update/:id", controller.updateStats);
router.delete("/deleteId/:id", controller.deleteById);
router.delete("/deleteType/:type", controller.deleteByType);

module.exports = router;
