const express = require("express")

const ghibliRouter = require("./router/ghiblirouter")
const app = express()

app.use(express.json())


app.use("/filmesGhibli", ghibliRouter)


module.exports = app
