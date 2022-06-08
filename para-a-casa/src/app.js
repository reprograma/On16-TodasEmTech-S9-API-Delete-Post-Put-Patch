const express = require("express")

const pokemonRoutes = require("./routes/pokemonRoutes")

const app = express()

app.use(express.json())

app.use("/pokemon", pokemonRoutes)

module.exports = app