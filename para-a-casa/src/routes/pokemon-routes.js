const controller = require("../controller/pokemon-controller");

const express = require("express");

const router = express.Router();

router.get("/pokedex", controller.pokedex);

router.put("/update/:id", controller.updatePokemon);

router.patch("/update/stats/:id", controller.updateStats);

router.delete("/delete/:id", controller.deletePokemonId);

router.delete("/delete", controller.deletePokemonType);

module.exports = router;
