const express = require('express')
const filmesRoutes = require("./routes/filmesRoutes")
const app = express()

// Realizando o body parser
app.use(express.json())

app.use("/ghibliFilmes", filmesRoutes)

module.exports = app