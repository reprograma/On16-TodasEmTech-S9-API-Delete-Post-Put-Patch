
const express = require("express")
const dexRoutes = require("./routes/dexroutes")
const app = express()

app.use(express.json())
app.use("/pokedex", dexRoutes)

module.exports = app  