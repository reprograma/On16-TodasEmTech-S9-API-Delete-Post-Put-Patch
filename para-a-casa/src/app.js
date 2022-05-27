const express = require("express")

const ghibliRota = require("./routes/ghibliRoutes")

const app = express()

app.use(express.json ())

app.use("/ghiblifilms", ghibliRota)

module.exports = app