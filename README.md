# SEMANA 09  {REPROGRAMA} ON 16 API - DELETE-PUT-PATCH

# Aula Ministrada por Mayhhara Morais
# O QUE APRENDI 🖍 :
<img src="https://c.tenor.com/WHOwHxdVSQIAAAAC/capoo-capoo-type.gif" />

* Fonte imagem: Site Tenor


#### HTTP 

* PUT - Serve para substituir dados existente, uma curiosidade é que ele é idempotente, ou seja pode chama-lo várias vezes que terá o mesmo efeito, não altera  ou adiciona p.Ex: usa quando vai mudar todo o corpo do trecho do código ou parte do código. Conforme documentação indica que este verbo deve ser passado todos os dados do recurso preeenchidos, independente de quais dados de fato será editado. 

* PATCH modifica somente uma propriedade do objeto e preserva as demais. Executa de forma elegante ao contrário do PUT, basta enviar o dado que será alterado acompanhado do Id como parâmetro para execução perfeita do comando.

* DELETE usado para remover o recurso, dado ou array, utiliza com passagem de Id, OBS: tem que haver muito cuidado ao passar  o código no body para não deletar os demais itens do BD.

#### ARQUITETURA M.V.C
<img src="https://miro.medium.com/max/1000/0*c5XhjwVwWL8fzMUc" />
 O M.V.C. é uma arquitetura de softwares a qual facilita a troca de informações entre a interface do  usuário aos dados que estão alocados no Banco, facilitando o retorno da requisição de forma rápida e dinâmica, contribuindo assim na otimização das API'S.

* MODEL => É uma classe que gerencia e controla a forma como os dados irão se comportar por meio das funções, lógica e regras de negócios, onde fica alojado os dados. Recebe as informações vinda do Controller válida as mesma estando correta retorna com  a resposta.

* VIEWS => Apresenta as informações de forma visual ao usuário, trata-se da parte Front-End,  nesta camada deve ser aplicados os recursos ligados a aparência como mensagens, botões ou telas.p.exemplo campo de input, formulário e pesquisa.

* CONTROLLER => É uma camada muito importante, trata-se da parte lógica , sua responsabilidade é intermediar as requisições enviadas pelo View(front-End) com as responstas fornecidas pelo Model

#### ROUTER
* É um gerenciador (manipulador) de rotas, é nele que cria as rotas de forma modularizada assim o arquivo fica separado organizado.


#### NPM

-Init para iniciar o pacote do projeto e criar a pasta package.json;
- Express um framework para facilitar o desenvolvimetno das aplicações backend;
- Nodemon uma biblioteca que auxilia o servidor a reiniciar automaticamente, evitando a quebra do código;
 - Install para instalar todas as dependências no projeto.

#### Postman 🎞 :
- Criar nova Collection;
- Verificar status do projeto;
- Verificar Rotas;
- Executar os testes das API'S  e requisições do projeto.

#### NODE.JS:
- Criar novo Servidor

#### Criar Rotas com GET
* Retornar todos os registros;
* Retornar um tipo de registro especifico;
* Retornar por array (exemplo: id, título, diretor);

#### Criar Rotas por POST
* Cadastrar novo item.

#### - Métodos
* find 
* filter
* includes
* toLoCaseLowerCase

#### - Requisições
* Request - é o pedido que um cliente realiza no servidor;

* Response - é a resposta do servidor retornando ao pedido do cliente.

#### - Códigos Http
* 100 - Informativos
* 200 - Puro sucesso
* 300 - Redirecionamentos
* 400 - Deu Ruim, não autorizados ou seja Erro do cliente ao realizar a requisição
* 500 - Lostttt, deu ruim de novo ou seja Erro no lado do servidor o recurso solicitado nao foi encontrado no servidor.
## Direfença entre req.params e req.query

* req.params são os parâmetros da URL do endpoint, utilizado para definir a rota p.ex:  API/pessoas/:id 
Obs: Neste projeto estamos referindo ao formato Json  na API Rest, a qual não tem views, e retornará somente dados.

*OBS: para utilizar o params tem que usar :id



* req.query  são os parâmetros enviados após a interrogação, este são utilizado para consultar e filtrar.



#### Linguagem e Ferramentas
	
 <img src=" https://camo.githubusercontent.com/510a057988cb5216f5d297ee202f6a08fa179798926cea28e95910f6b8ca5535/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d61726b646f776e2d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d6d61726b646f776e266c6f676f436f6c6f723d7768697465" />

<img src="https://camo.githubusercontent.com/0fad77ddd85292b8800107c5a51df2f64ff5126a0fe6dfa1eb7d4977032918e2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652532306a732d3333393933333f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f6465646f746a73266c6f676f436f6c6f723d7768697465" />
<img src="https://camo.githubusercontent.com/879423585ed087f3c973857c43ba7e7d84f52c993d2c937055726339fbf921d9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666f722d7468652d6261646765266c6f676f3d506f73746d616e266c6f676f436f6c6f723d7768697465" />
<img src="https://camo.githubusercontent.com/55037e0ff8e2c9df84ad631c3d0443a7316776ede7459a5872ccb336d7df2781/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e706d2d4342333833373f7374796c653d666f722d7468652d6261646765266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465"/>

<img src="https://camo.githubusercontent.com/42ada9cc774b9d2b4cf35691820a881d70657ae42c3a074f00c7e9add6352361/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f56697375616c5f53747564696f5f436f64652d3030373844343f7374796c653d666f722d7468652d6261646765266c6f676f3d76697375616c25323073747564696f253230636f6465266c6f676f436f6c6f723d7768697465" />

<img src="https://camo.githubusercontent.com/06c6858186510906c21d8c951168d55d976d7dfb9176ed6125c55b8a7de0baae/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4749542d4534344333303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974266c6f676f436f6c6f723d7768697465" />

<img src="https://camo.githubusercontent.com/84e40cc1b235376f4c7442551fecc84e99bbb6736ef470f7d8e7f9655393e2e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732532306a732d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d7768697465"/>


# CONTRIBUIÇÃO NILVA PIRES, acima explanei sobre os meus conhecimentos adquiridos nesta Semana do Reprograma.




# 📍 **VS CODE : no terminal**

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
