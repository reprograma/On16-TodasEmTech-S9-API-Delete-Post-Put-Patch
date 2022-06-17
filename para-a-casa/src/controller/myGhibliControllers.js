const ghiFilmesJson = require("../models/ghiblifilms.json")
const express = require("express")
const app = express() //executar o express

app.use(express.json()) // fazendo o body parser

// retornara todos os filmes aqui está sendo usado o verbo GET
const getAll = (request, response) => {
  response.status(200).json([
    {
      "filmes": ghiFilmesJson
    }
  ])
}

// alterar os dados do filme exceto o id vou usar o PUT para alterar 
const updateTodos = (request, response) => {

  const idRequest = request.params.id
  let ghiFilmeRequest = request.body

  let indiceLocalizado = ghiFilmesJson.findIndex(filme => filme.id == idRequest)

  /*slice é um metodo de array serve para substituir o item a partir do dado que ele encontra -  O número 1 e a quantidade de lista que desejamos alterar */
  ghiFilmesJson.splice(indiceLocalizado, 1, ghiFilmeRequest)

  response.status(200).json([
      {
          "Aviso": "Atenção!!!! Os dados do filme foram atualizados, EXCETO o id 📌",
          ghiFilmesJson
      }
  ])
}

// para alterar o Running-Time 
const updateTime = (request, response) => {

  const idRequest = request.params.id
  let novoTime = request.body.running_time

  filmeFiltrado = ghiFilmesJson.find(filme => filme.id == idRequest)
  filmeFiltrado.running_time = novoTime


  response.status(200).json([{

      "Aviso": "O Score do seu filme foi atualizado ⌛",
      filmeFiltrado

  }])
}

//Deletar o diretor
const deleteDiretor = (request, response)=>{
  
  const idRequest = request.params.director.toLowerCase()

  const indiceDiretor = ghiFilmesJson.findIndex(filme => filme.director.toLowerCase() == idRequest)
   
  ghiFilmesJson.splice(indiceDiretor, 1)

  response.status(200).json([
      {
          "Aviso": " 🎦Diretor foi deletado como solicitado",
          "deletado": idRequest,
          ghiFilmesJson
      }
  ])
}

// Deletar o id
const deleteId = (request, response)=>{
  
  const idRequest = request.params.id.toLowerCase()

  const indiceId = ghiFilmesJson.findIndex(filme => filme.director.toLowerCase() == idRequest)

  
  ghiFilmesJson.splice(indiceId, 1)

  response.status(200).json([
      {
          "Aviso": "Id ✅ foi deletado com sucesso ✨ ",
          "deletado": idRequest,
          ghiFilmesJson
      }
  ])
}

module.exports = {
  getAll,
  updateTodos,
  updateTime,
 deleteDiretor,
 deleteId
 
}

/*  POSTMAN - retorna todos os filmes 
GET -  localhost:8080/filmes/catalogo
  */ 

 /*  POSTMAN - ALTERAR O SCORE DO FILME
 PATCH - localhost:8080/filmes/update/ade9a694-b7ec-4af9-a536-389c57c865b2
 BODY - RAW - JSON
 {
    "running_time": "90"
 }
  */ 

 /*  POSTMAN - ALTERAR TODOS OS DADOS EXCETO ID atenção muito cuidado com os dados que informar para não sumir dados errados
PUT -  localhost:8080/filmes/change/ade9a694-b7ec-4af9-a536-389c57c865b2
BODY - RAW - JSON
{
   "id": "ade9a694-b7ec-4af9-a536-389c57c865b2",
        "title": " Vento",
        "original_title": "nao sei ler chines",
        "original_title_romanised": "Kaze ",
        "description": "Após os Sete Dias de Fogo, ",
        "director": "Mel Pires",
        "producer": "Nilva Takahata",
        "release_date": "2012-03-11",
        "running_time": 66
}
  */ 

/* POSTMAN - DELETAR O ID
DELETE -  localhost:8080/filmes/delete/ade9a694-b7ec-4af9-a536-389c57c865b2
obs: não precisa acessar o Body porque será deletado apenas o ID.

*/


