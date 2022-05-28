# 📍 **VS CODE : no terminal**
<<<<<<< HEAD

- Entrar na pasta da tarefa da sala = cd para-a-sala
- Instalar as dependencias = npm i

---
# 📍 **VSCODE :**
- **Criar** o arquivo **```.gitignore```** dentro da pasta **```para-a-sala```** e inserir a informação : **```node_modules```**
- **Dentro** de **```para-a-sala/src``` criar** as seguintes pastas : 

1. **```controller```**
2. **```routes```**

---
# 📍 **VS CODE : Ir no arquivo ```app.js``` dentro da pasta ```para-a-sala/src``` :**

```javascript
//centralizando o conteúdo da aplicação - Rota raiz
const express = require('express') //importando o express

//importe da continuação das rotas de filmes
const filmesRoutes = require("./routes/filmeRoutes")

//executo o express
const app = express() 

//uso o bodyparser
app.use(express.json()) 

//criar uma rota raiz
app.use("/filmes", filmesRoutes)

//exportando para usar o server.js
module.exports = app 
``` 
---
# 📍 **VS CODE :  Ir no arquivo ```server.js``` dentro da pasta ```para-a-sala```** : 

```javascript
//chamando o arquivo app
const app = require('./src/app') 

//configurando a porta
const PORT = 1313 

app.listen( PORT, () => {
	console.log(`Olá, estou na porta ${PORT}`)
	})
```
---
# 📍 **VS CODE :  na pasta ```controller``` que esta dentro da pasta ```para-a-sala/src```**
- **CRIAR** um arquivo chamado **```filmeController.js```** e inserir o código : 

```javascript
//acessando endereço do banco/json
const filmesJson = require('../models/filmes-barbie.json')

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

//Atualizar o título do filme buscando pelo id
const updateTitle = (request, response) => {

    /*guardo o id que foi enviado no request na constante idRequest (pq params? pq id é especifico e eu uso params para buscas especificas)*/
    const idRequest = request.params.id

    /*guardo o titulo que foi enviado no body da requisiçao (pq body? pq pra put, patch e post eu PRECISO passar um body)*/
    let novoTitulo = request.body.title

   //preciso filtrar o meu "banco de dados" (nesse caso é o Json mockado) para encontrar o id que o usuário digitou
   filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    //Uma parte especifica do filme, no caso o título, será alterada com a nova informação enviada (o novo titulo)
    filmeFiltrado.title = novoTitulo

    //Mando uma response dizendo que está tudo correto e envio o filme com a alteração
    response.status(200).json([{
        "mensagem": "seu filme foi atualizado",
        filmeFiltrado
    }])
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
        //se quiser que retorne apenas o filme alterado, teria que ter sido criada uma variavel em filmesJson.splice
    }])
}

//Deletar um filme por id
const deleteFilme = (request, response ) => {

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

//Deletar um filme por titulo
const deleteFilmePorTitulo = (request, response ) => {

    //titulo que quero deletar
    const titleRequest = request.params.title.toLowerCase()

    const indexTitle = filmesJson.findIndex( filme => filme.title.toLowerCase() == titleRequest)

    filmesJson.splice(indexTitle,1)

    response.status(200).json([{

        "mensagem" : "O filme foi deletado",
        "deletado" : titleRequest,
        filmesJson
    }])
}

//exportando todas as funções do controller para serem usadas no filmesRoutes.js
module.exports = {
    getAll,
    updateTitle,
    updateMovie,
    deleteFilme,
    deleteFilmePorTitulo,

}
```
---
## 📍 **VS CODE : Ir na pasta *```ROUTES```* que fica dentro da pasta ```para-a-sala/src```**

- **CRIAR** o arquivo **```filmeRoutes.js```** e inserir o código : 

 ```javascript
//AS ROTAS E METODOS DE FILMES

//chamar o controller de filmes
const controller = require('../controller/filmeController')

//chamando o express
const express = require('express') 

//função de rotas do express
const router = express.Router()

//router.metodo http (rota, funcao)

router.get("/catalogo", controller.getAll)
router.patch("/update/:id", controller.updateTitle)
router.put("/change/:id", controller.updateMovie)
router.delete("/delete/title/:title", controller.deleteFilmePorTitulo) //coloquei essa rota de delete antes da delete/:id + subrota 'title' para não dar conflito 
router.delete("/delete/:id", controller.deleteFilme)

//exportando para ser usado no app.js
module.exports = router
```
---
# 📍 **POSTMAN**

### ✔️ **Buscar o catálogo de filmes**
- **GET:** localhost:1313/filmes/catalogo
- **SEND**

### ✔️ **Alterar o título pelo ID do filme**
- **PATCH:** localhost:1313/filmes/:id 
- *TROCAR **:id** pelo id desejado*
- *Ir em : **Body -> raw -> Json** e digitar a info abaixo :*
- { "title" : ```"INSERIRNOVOTITULO"``` }
- **SEND**

### ✔️ **Modificar TODO o body**
- **PUT:** localhost:1313/filmes/change/:id 
- *TROCAR **:id** pelo id desejado*
- *Ir em : **Body -> raw -> Json** e digitar a info abaixo :*
- { inserir todo o body com as alterações desejadas}

```
exemplo : {	
	    "id": "3",
      	"topic": "Comedia",
      	"title": "Barbie novo filme",
      	"content": "Barbie em novas aventuras"
      }
```

- ⚠️ **COLOCAR TODAS AS INFORMAÇÕES DO BODY, INCLUSIVE O ID (mas NÃO alterar o ID)** - ️*Ao fazer essa mudança, os itens do antigo body que não estiverem no novo body, serão deletados*
- **SEND**

### ✔️ **Deleta o filme por título** - *(coloquei antes da busca por id para não ter conflito de rota)*

- **DELETE:** localhost:1313/filmes/delete/title/titulo%20do%20meu%20filme
- ***TROCAR**  ```titulo%20do%20meu%20filme``` pelo titulo do filme que você quer deletar, lembrando que o %20 simboliza os espaços*
- **SEND**

### ✔️ **Deleta o filme por ID**
- **DELETE:** localhost:1313/filmes/delete/:id 
- na rota *TROCAR **:id** pelo id do filme que quer deletar*
- **SEND**


Resuminho lindo que nossa querida [May](https://github.com/Maysafig) criou.

=======
>>>>>>> 9bab97180b314b6790bfeb95a55a51e6524a59c7

- Entrar na pasta da tarefa da sala = cd para-a-sala
- Instalar as dependencias = npm i

---
# 📍 **VSCODE :**
- **Criar** o arquivo **```.gitignore```** dentro da pasta **```para-a-sala```** e inserir a informação : **```node_modules```**
- **Dentro** de **```para-a-sala/src``` criar** as seguintes pastas : 

1. **```controller```**
2. **```routes```**

---
# 📍 **VS CODE : Ir no arquivo ```app.js``` dentro da pasta ```para-a-sala/src``` :**

```javascript
//centralizando o conteúdo da aplicação - Rota raiz
const express = require('express') //importando o express

//importe da continuação das rotas de filmes
const filmesRoutes = require("./routes/filmeRoutes")

//executo o express
const app = express() 

//uso o bodyparser
app.use(express.json()) 

//criar uma rota raiz
app.use("/filmes", filmesRoutes)

//exportando para usar o server.js
module.exports = app 
``` 
---
# 📍 **VS CODE :  Ir no arquivo ```server.js``` dentro da pasta ```para-a-sala```** : 

```javascript
//chamando o arquivo app
const app = require('./src/app') 

//configurando a porta
const PORT = 1313 

app.listen( PORT, () => {
	console.log(`Olá, estou na porta ${PORT}`)
	})
```
---
# 📍 **VS CODE :  na pasta ```controller``` que esta dentro da pasta ```para-a-sala/src```**
- **CRIAR** um arquivo chamado **```filmeController.js```** e inserir o código : 

```javascript
//acessando endereço do banco/json
const filmesJson = require('../models/filmes-barbie.json')

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

//Atualizar o título do filme buscando pelo id
const updateTitle = (request, response) => {

    /*guardo o id que foi enviado no request na constante idRequest (pq params? pq id é especifico e eu uso params para buscas especificas)*/
    const idRequest = request.params.id

    /*guardo o titulo que foi enviado no body da requisiçao (pq body? pq pra put, patch e post eu PRECISO passar um body)*/
    let novoTitulo = request.body.title

   //preciso filtrar o meu "banco de dados" (nesse caso é o Json mockado) para encontrar o id que o usuário digitou
   filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    //Uma parte especifica do filme, no caso o título, será alterada com a nova informação enviada (o novo titulo)
    filmeFiltrado.title = novoTitulo

    //Mando uma response dizendo que está tudo correto e envio o filme com a alteração
    response.status(200).json([{
        "mensagem": "seu filme foi atualizado",
        filmeFiltrado
    }])
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
        //se quiser que retorne apenas o filme alterado, teria que ter sido criada uma variavel em filmesJson.splice
    }])
}

//Deletar um filme por id
const deleteFilme = (request, response ) => {

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

//Deletar um filme por titulo
const deleteFilmePorTitulo = (request, response ) => {

    //titulo que quero deletar
    const titleRequest = request.params.title.toLowerCase()

    const indexTitle = filmesJson.findIndex( filme => filme.title.toLowerCase() == titleRequest)

    filmesJson.splice(indexTitle,1)

    response.status(200).json([{

        "mensagem" : "O filme foi deletado",
        "deletado" : titleRequest,
        filmesJson
    }])
}

//exportando todas as funções do controller para serem usadas no filmesRoutes.js
module.exports = {
    getAll,
    updateTitle,
    updateMovie,
    deleteFilme,
    deleteFilmePorTitulo,

}
```
---
## 📍 **VS CODE : Ir na pasta *```ROUTES```* que fica dentro da pasta ```para-a-sala/src```**

- **CRIAR** o arquivo **```filmeRoutes.js```** e inserir o código : 

 ```javascript
//AS ROTAS E METODOS DE FILMES

//chamar o controller de filmes
const controller = require('../controller/filmeController')

//chamando o express
const express = require('express') 

//função de rotas do express
const router = express.Router()

//router.metodo http (rota, funcao)

router.get("/catalogo", controller.getAll)
router.patch("/update/:id", controller.updateTitle)
router.put("/change/:id", controller.updateMovie)
router.delete("/delete/title/:title", controller.deleteFilmePorTitulo) //coloquei essa rota de delete antes da delete/:id + subrota 'title' para não dar conflito 
router.delete("/delete/:id", controller.deleteFilme)

//exportando para ser usado no app.js
module.exports = router
```
---
# 📍 **POSTMAN**

### ✔️ **Buscar o catálogo de filmes**
- **GET:** localhost:1313/filmes/catalogo
- **SEND**

### ✔️ **Alterar o título pelo ID do filme**
- **PATCH:** localhost:1313/filmes/:id 
- *TROCAR **:id** pelo id desejado*
- *Ir em : **Body -> raw -> Json** e digitar a info abaixo :*
- { "title" : ```"INSERIRNOVOTITULO"``` }
- **SEND**

### ✔️ **Modificar TODO o body**
- **PUT:** localhost:1313/filmes/change/:id 
- *TROCAR **:id** pelo id desejado*
- *Ir em : **Body -> raw -> Json** e digitar a info abaixo :*
- { inserir todo o body com as alterações desejadas}

```
exemplo : {	
	    "id": "3",
      	"topic": "Comedia",
      	"title": "Barbie novo filme",
      	"content": "Barbie em novas aventuras"
      }
```

- ⚠️ **COLOCAR TODAS AS INFORMAÇÕES DO BODY, INCLUSIVE O ID (mas NÃO alterar o ID)** - ️*Ao fazer essa mudança, os itens do antigo body que não estiverem no novo body, serão deletados*
- **SEND**

### ✔️ **Deleta o filme por título** - *(coloquei antes da busca por id para não ter conflito de rota)*

- **DELETE:** localhost:1313/filmes/delete/title/titulo%20do%20meu%20filme
- ***TROCAR**  ```titulo%20do%20meu%20filme``` pelo titulo do filme que você quer deletar, lembrando que o %20 simboliza os espaços*
- **SEND**

### ✔️ **Deleta o filme por ID**
- **DELETE:** localhost:1313/filmes/delete/:id 
- na rota *TROCAR **:id** pelo id do filme que quer deletar*
- **SEND**


Resuminho lindo que nossa querida [May](https://github.com/Maysafig) criou.
