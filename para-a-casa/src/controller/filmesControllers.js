
const filmesJson = require('../models/ghiblifilms.json')
const express = require('express')
const app = express()

app.use(express.json()) // Execução do body parser


// Aplicando lógica da rota [GET]: Listando todo o json ghiblifilms.json

const getListarTudo = (request, response) => {

    response.status(200).json([{

        "filmes": filmesJson
    }])
}

// Aplicando lógica do [PUT]: uma rota que seja possível alterar 
// todos os dados(menos Id)

const alterarTodosDados = (request, response) => {

    const idRequest = request.params.id
    let filmeRequest = request.body

    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)

    // [Splice] -> Método para substituição de array
    // Está removendo UM elemento a partir de INDEX ENCONTRADO, e add o FILME REQUEST no lugar.
    filmesJson.splice(indexEncontrado, 1, filmeRequest)

    // Enviar uma response para informar que está tudo OK

    response.status(200).json([{
        "message": "filme atualizado",
        filmesJson
    }])
}

// Aplicando lógica do [PATCH]: Uma rota que seja possível alterar 
// a duração e/ou score do filme

const alterarDuracao = (request, response) => {

    const idRequest = request.params.id
    let novaDuracao = request.body.running_time

    // filtrando o meu banco/json para encontrar o id que a pessoa digitou
    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)
    // depois disso, o meu filme a parte especifica da duração será alterada pelo novo dado que foi enviado
    filmeFiltrado.running_time = novaDuracao

    // Não esquecer de mandar uma response informando que ta tudo ok e envio o filme com a alteração
    response.status(200).json([{

        "mensagem": "seu filme foi atualizado",
        filmeFiltrado

    }])

}

// Aplicando lógica do [DELETE]: Uma rota que seja possível excluir filme por Id (params)

const deletaFilmePorId = (request, response) => {

    // id que quero deletar
    const idRequest = request.params.id
    // Pegar o índice do filme que vai ser deletado
    const indiceFilme = filmesJson.findIndex(filme => filme.id == idRequest)

    // Retirando o filme da array de filmes a partir do indice dado
    filmesJson.splice(indiceFilme, 1)

    response.status(200).json([{
        "message": "Filme deletado, com sucesso!",
        "deletado": idRequest,
        filmesJson
    }])
}

// Aplicando lógica do [DELETE]: Uma rota que seja possível excluir filmes por diretor (director)

const deleteFilmePorDiretor = (request, response) => {

    const directorRequest = request.query.director // Uso do query para quando o retorno vai ser mais de apenas um, como no caso do ID

    const diretoresFiltrados = filmesJson.filter(filme => filme.director.includes(directorRequest));

    // Estrutura for para percorrer todo array
    for (indice = 0; indice < diretoresFiltrados.length; indice++) {
        console.log(indice, filmesJson[indice])

        const index = filmesJson.indexOf(diretoresFiltrados[indice]);
        filmesJson.splice(index, 1);
    }

    response.status(200).json([{
        "message": "Filmes deletados com sucesso",
        "deletado": directorRequest,
        filmesJson
    }])

}



module.exports = {
    getListarTudo,
    alterarTodosDados,
    alterarDuracao,
    deletaFilmePorId,
    deleteFilmePorDiretor
}