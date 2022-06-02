const filmesJson = require('../models/ghiblifilms.json')

const getAll = (_request, response) => {
    response.status(200).json([
        {
            "filmes" : filmesJson
        }
    ])
}

const updateTitle = (request, response) => {
    const idRequest = request.params.id

    const filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    const novoTitulo = request.body.title
    const novaDescricao = request.body.description

    filmeFiltrado.title = novoTitulo
    filmeFiltrado.description = novaDescricao

    response.status(200).json({
        "mensagem": "Seu filme foi atualizado!",
        filmeFiltrado
    })
}

const updateMovie = (request, response) => {
    const idRequest = request.params.id 
    let filmeRequest = request.body

    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)
    filmesJson[indexEncontrado] = filmeRequest

    response.status(200).json({
        "mensagem": "Seu filme foi atualizado",
        filme: filmesJson[indexEncontrado]
        
    })
}

const adicionaFilme = (req, res) => {
    let filmeRequest = req.body

    filmesJson.push(filmeRequest)

    res.status(200).json({
        "mensagem": "Seu filme foi adicionado",
        filme: filmeRequest
    })
}

const deleteFilme = (request, response ) => {
    
    const idRequest = request.params.id
    const indexFilme = filmesJson.findIndex( filme => filme.id == idRequest)
   
    filmesJson.splice(indexFilme, 1)

    response.status(200).json({
        "mensagem" : "O filme foi deletado",
        "deletado" : idRequest,
        filmesJson
    })
}

module.exports = {
    getAll,
    updateTitle,
    updateMovie,
    deleteFilme,
    adicionaFilme
}