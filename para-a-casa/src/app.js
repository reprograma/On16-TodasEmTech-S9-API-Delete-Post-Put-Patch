const express = require("express")
const pokedexRoutes = require("./routes/pokedex-routes")
const app = express()
app.use(express.json())

app.use("/", pokedexRoutes)
module.exports = app