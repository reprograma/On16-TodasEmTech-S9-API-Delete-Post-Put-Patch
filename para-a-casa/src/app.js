const express = require('express')
const pokedexRouter = require("./router/pokedexRouter")
const app = express()

app.use(express.json())

app.use("/pokedex", pokedexRouter)



module.exports = app

