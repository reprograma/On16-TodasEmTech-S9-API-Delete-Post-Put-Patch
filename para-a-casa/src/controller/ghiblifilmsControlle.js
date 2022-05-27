const ghiblifilms = require('../models/ghiblifilms.json')

const express = require('express')
const { request, response } = require('../app')

const app = express()

app.use(express.json())

const getAll = (request,response) => {
    response.status(200).json([
        {
            "filmes":ghiblifilms
        }
    ])
}

module.exports = {
    getAll
}