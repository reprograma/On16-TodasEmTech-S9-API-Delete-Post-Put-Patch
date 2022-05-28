const express = require('express')

const moviesRoutes = require('./routes/ghibliRoutes')

const app = express()

app.use(express.json())

app.use('/movies', moviesRoutes)

module.exports = app