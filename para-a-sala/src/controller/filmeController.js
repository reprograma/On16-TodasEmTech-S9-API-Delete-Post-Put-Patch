<<<<<<< HEAD
//acessando endereço do banco/json
const filmesJson = require('../models/filmes-barbie.json') 

const express = require('express')
const app = express() //executar o expressar

app.use(express.json()) //fazendo o body parser

const getAll = (request, response) => {
    response.status(200).json([{
        "filmes": filmesJson
    }])
}

//declaro minha constante de atualizar o titulo do filme
const updateTitle = (request, response) => {

    //guardo o id que foi enviado no request na constante idRequest 
    const idRequest = request.params.id //request.params é usado apenas para coisas bem específicas, tipo id, que cada um tem um diferente
    //guardo o titulo que foi enviado no body da requisicao(pq body? pq pra put, patch e posy )
=======
/// acessando endereço do banco/json
const filmesJson = require('../models/filmes-barbie.json')
const express = require('express')
const app = express() //executar o express

app.use(express.json()) // fazendo o body parser

const getAll = (request, response) => {

    response.status(200).json([
        {
            "filmes": filmesJson
        }
    ])

}

// declaro minha constante de atualizar o titulo do filme 
const updateTitle = (request, response) => {

    // guardo o id que foi enviado no request na constante idRequest (pq params? pq id é especifico e eu uso params para buscas especificas) 
    const idRequest = request.params.id
    // guardo o titulo que foi enviado no body da requisiçao (pq body? pq pra put, patch e post eu PRECISO passar um body)
>>>>>>> 9bab97180b314b6790bfeb95a55a51e6524a59c7
    let novoTitulo = request.body.title

    // preciso filtrar o meu ''banco de dados'' para encontrar o id que a pessoa digitou
    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

<<<<<<< HEAD
    //// depois disso, o meu filme a parte especifica do titulo será alterada pelo Novo Titulo que foi enviado
=======
    // depois disso, o meu filme a parte especifica do titulo será alterada pelo Novo Titulo que foi enviado
>>>>>>> 9bab97180b314b6790bfeb95a55a51e6524a59c7
    filmeFiltrado.title = novoTitulo

    // depois disso tudo, mando uma response dizendo q ta tudo OK e envio o filme com a alteraçao
    response.status(200).json([{
<<<<<<< HEAD
        "mensagem": "Seu filme foi atualizado",
        filmeFiltrado
=======

        "mensagem": "seu filme foi atualizado",
        filmeFiltrado

>>>>>>> 9bab97180b314b6790bfeb95a55a51e6524a59c7
    }])
}

const updateMovie = (request, response) => {

    const idRequest = request.params.id
    let filmeRequest = request.body

    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)

    // oq isso esta fazendo???
    // esta removendo UM elemento, a partir de iNDEX ENCONTRADO, e adicionando o FILME REQUEST no lugar.
    filmesJson.splice(indexEncontrado, 1, filmeRequest)

<<<<<<< HEAD
    response.status(200).json([{
        "message": "filme atualizado",
        filmesJson
    }])
}

const deleteFilme = (request, response) => {

    //id que quero deletar
    const idRequest = request.params.id

    //pegar o indice(index) do filme que vai ser deletado
    const indiceFilme = filmesJson.findIndex(filme => filme.id == idRequest)

    //método splice retira o filme da array de filmes a partir do indice que eu disser
    //array.splice: pegar o indice, numero de coisas e item que vou adicionar)
    filmesJson.splice(indiceFilme, 1) //não precisa colocar o que vou adicionar pq nao vou adicionar nada

    response.status(200).json([{
        "message": "Filme deletado com sucesso", 
        "deletado": idRequest,
        filmesJson
    }])
}

=======
    response.status(200).json([
        {
            "message": "filme atualizado",
            filmesJson
        }
    ])
}

const deleteFilme = (request, response) => {
    
    // id que quero deletar
    const idRequest = request.params.id
    
    // pegar o indice(index) do filme que vai ser deletado
    const indiceFilme = filmesJson.findIndex(filme => filme.id == idRequest)
    
    // retira o filme da array de filmes a partir do indice que eu disser 
    // ARRAY.SPLICE(INDICE, NUMERO DE COISAS QUE VOU DELETAR, ITEM QUE VOU ADICIONAR)
    filmesJson.splice(indiceFilme, 1)
    
    response.status(200).json([{
        "message": "filme deletado, mona",
        "deletado": idRequest,
        filmesJson
    }])

    }

    const deleteFilmePorTitulo = (request, response)=>{
        //id que quero deletar
        const idRequest = request.params.title.toLowerCase()
    
        //pegando o indice(index) da tarefa q vai ser deletada
        const indiceFilme = filmesJson.findIndex(filme => filme.title.toLowerCase() == idRequest)
    
        //retira a tarefa da array de tarefas a partir do seu indice
        //ARRAY.SPLICE(INDICE, NUMERO DE ITENS DELETADOS, ITEM A SER ADICIONADO)
        //quando splice a gente so coloca o indice e 1, estamo retirando somente o tem
        filmesJson.splice(indiceFilme, 1)
    
        response.status(200).json([
            {
                "message": "filme deletado com sucesso",
                "deletada": idRequest,
                filmesJson
            }
        ])
    }


//exportando todas os funções do controller para ser usada no filmesRoutes.js
>>>>>>> 9bab97180b314b6790bfeb95a55a51e6524a59c7
module.exports = {
    getAll,
    updateTitle,
    updateMovie,
<<<<<<< HEAD
    deleteFilme
=======
    deleteFilme,
    deleteFilmePorTitulo
>>>>>>> 9bab97180b314b6790bfeb95a55a51e6524a59c7
}
