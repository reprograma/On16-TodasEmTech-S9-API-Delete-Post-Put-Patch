const controller = require("../controller/habittrackerController");

const express = require("express");

const router = express.Router();

router.get("/habittrackerList", controller.getAllHabits);

module.exports = router;
