const controller = require("../controller/ghibliController")

const express = require("express")
const { Router } = require('express')

const routes = express.Router()

routes.get("/catalogo", controller.getAll)
routes.put("/alteraQuaseTudo/:id", controller.alteraQuaseTudo)
routes.patch("/alteraDuracao/:id", controller.alteraDuracao)
routes.delete("/deletaFilmePorId/:id", controller.deletaFilmePorId)
routes.delete("/deletaFilmePorDiretor/:id", controller.deletaFilmePorDiretor)

module.exports = routes