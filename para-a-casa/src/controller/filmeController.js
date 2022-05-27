//acessando endereço do banco/json
const filmesJson = require('../models/ghiblifilms.json')

const express = require('express')

//executar o express
const app = express()

//fazendo o body parser
app.use(express.json()) 

const getAll = (request, response) => {

    response.status(200).json([
        {
            "filmes" : filmesJson
        }
    ])
}

//Alterar todas as informações do filme buscando pelo id
const updateMovie = (request, response) => {

    const idRequest = request.params.id 
    let filmeRequest = request.body

    //o Index Retorna o indice do array no primeiro elemento que for true
    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)

    //Splice remove um elemento a partir do indexEncontrado. E no lugar dele é colocado a request passada (filmeRequest) 
    filmesJson.splice(indexEncontrado, 1, filmeRequest)

    //Mando uma response dizendo que está tudo correto e envio o filme com a alteração
    response.status(200).json([{
        "mensagem": "seu filme foi atualizado",
        filmesJson
    }])
}


//Atualizar o tempo de duração do filme buscando pelo id
const updateTime = (request, response) => {

    /*guardo o id que foi enviado no request na constante idRequest (pq params? pq id é especifico e eu uso params para buscas especificas)*/
    const idRequest = request.params.id

    /*guardo o titulo que foi enviado no body da requisiçao (pq body? pq pra put, patch e post eu PRECISO passar um body)*/
    let newTime = request.body.running_time

   //preciso filtrar o meu "banco de dados" (nesse caso é o Json mockado) para encontrar o id que o usuário digitou
   filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    //Uma parte especifica do filme, no caso o título, será alterada com a nova informação enviada (o novo titulo)
    filmeFiltrado.running_time = newTime

    //Mando uma response dizendo que está tudo correto e envio o filme com a alteração
    response.status(200).json([{
        "mensagem": "seu filme foi atualizado",
        filmeFiltrado
    }])
}



//Deletar um filme por id
const deleteMovie = (request, response ) => {

    //id que quero deletar
    const idRequest = request.params.id

    //Pegar o index(indice) do filme que será deletado
    const indexFilme = filmesJson.findIndex( filme => filme.id == idRequest)

    //retira o filme do array de filmes a partir do index indicado
    //array.splice(index, numero de coisas que serão deletadas, item que vou adicionar)
    
    filmesJson.splice(indexFilme, 1) //pra deletar não precisa adicionar nenhum item

    response.status(200).json([{
        "mensagem" : "O filme foi deletado",
        "deletado" : idRequest,
        filmesJson
    }])
}



//Deletar um filme por diretor

const deleteFilmePorDiretor = (request, response) => {

    const directorRequest = request.query.director // Uso do query para quando o retorno vai ser mais de apenas um, como no caso do ID

    const diretoresFiltrados = filmesJson.filter(filme => filme.director.includes(directorRequest));

    // Estrutura for para percorrer todo array
    for (indice = 0; indice < diretoresFiltrados.length; indice++) {
        
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
    getAll,
    updateMovie,
    updateTime,
    deleteMovie,
    deleteFilmePorDiretor
}