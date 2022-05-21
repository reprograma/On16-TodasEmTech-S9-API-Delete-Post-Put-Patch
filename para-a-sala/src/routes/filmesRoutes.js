const controller = require("../controller/filmeController");

const express = require("express");

const router = express.Router();

router.get("/catalogo", controller.getAll);
router.patch("/update/:id", controller.updateTitle);
router.put("/change/:id", controller.updateMovie);
router.delete("/delete/:id", controller.deleteFilme)

module.exports = router;
