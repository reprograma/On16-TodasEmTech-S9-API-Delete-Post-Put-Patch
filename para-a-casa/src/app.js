const express = require("express")
const ghibliRouter = require("./routes/ghibliRouter")
const app = express()

app.use(express.json())
app.use("/filmesGhibli", ghibliRouter)

module.exports = app
