const controller = require("../controller/ghiblifilmsController");

const express = require("express");

const router = express.Router();

router.get("/ghiblifilmsList", controller.getAllMovie);
router.put("/change/:id", controller.replaceMovie);
router.patch("/update/:id", controller.modifyDuration);
router.delete("/deleteId/:id", controller.deleteById);
router.delete("/deleteDirector/:director", controller.deleteByDirector);

module.exports = router;
