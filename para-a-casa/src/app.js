const express = require('express')

const pokeRoutes = require('./routes/pokeRoutes')

const app = express()

app.use(express.json())

app.use('/pokedex', pokeRoutes)












module.exports = app