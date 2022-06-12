
const glicontrol = require('../controller/glibliControllers')

const express = require('express') 

const myrouter = express.Router()

// myrouter. metodo http (rota, funcao)

myrouter.get("/catalogo", glicontrol.getAll)

module.exports = myrouter