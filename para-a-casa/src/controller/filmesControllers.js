// Na parte de controllers é onde fazemos a lógica:


// Acessando o banco/json
const filmesJson = require('../models/ghiblifilms.json')
const express = require('express')
const app = express()

app.use(express.json()) // Execução do body parser


// Aplicando lógica da rota 00[GET]: Listar todo o json ghiblifilms.json

const getListarTudo = (request, response) => {

    response.status(200).json([{

        "filmes": filmesJson
    }])
}


// Aplicando lógica da rota 1 [PUT]: Uma rota que seja possível alterar 
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

// Aplicando lógica da rota 2 [PATCH]: Uma rota que seja possível alterar 
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

// Aplicando lógica da rota 3 [DELETE]: Uma rota que seja possível excluir filme por Id (params)

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

// Aplicando lógica da rota 4 [DELETE]: Uma rota que seja possível excluir filmes por diretor (director)
// [OBS]: ainda em dúvida nessa rota

const deletaFilmePorDiretor = (request, response) => {
    //id que quero deletar
    const idRequest = request.params.director.toLowerCase()

    //pegando o indice(index) da tarefa q vai ser deletada
    const indiceFilme = filmesJson.findIndex(filme => filme.director.toLowerCase() == idRequest)

    //retira a tarefa da array de tarefas a partir do seu indice
    //ARRAY.SPLICE(INDICE, NUMERO DE ITENS DELETADOS, ITEM A SER ADICIONADO)
    //quando splice a gente so coloca o indice e 1, estamo retirando somente o tem
    filmesJson.splice(indiceFilme, 1)

    response.status(200).json([{
        "message": "Filme deletado com sucesso",
        "director": idRequest,
        filmesJson
    }])
}

//const deletaFilmePorDiretor = (request, response) => {
//    const diretorRequest = request.query.director.toLowerCase()
//    const indiceFilmesEncontrados = filmesJson.filter(filme => filme.director.toLowerCase().includes(diretorRequest) == diretorRequest)
//    filmesJson.splice(indiceFilmesEncontrados, 1)
//    response.status(200).json([{
//        "message": "Filme deletado com sucesso!",
//        "deletada": diretorRequest,
//        filmesJson
//    }])
//}

module.exports = {
    getListarTudo,
    alterarTodosDados,
    alterarDuracao,
    deletaFilmePorId,
    deletaFilmePorDiretor
}