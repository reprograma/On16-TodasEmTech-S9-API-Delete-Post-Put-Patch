const express = require('express')

const pokedexRoutes = require('./routes/pokedexRoutes')

const app = express()

app.use(express.json())

app.use('/pokedex', pokedexRoutes) //rota raiz

module.exports = app