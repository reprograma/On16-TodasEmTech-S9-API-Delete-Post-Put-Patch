const controller = require("../controller/todolistController");

const express = require("express");

const router = express.Router();

router.get("/taskList", controller.getAllTasks);
router.put("/change/:id", controller.replaceTasks);
router.patch("/update/:id", controller.modifyCategoryName);
router.delete("/deleteId/:id", controller.deleteById);
router.delete("/deleteCategory/:category-name", controller.deleteByCategory);

module.exports = router;
