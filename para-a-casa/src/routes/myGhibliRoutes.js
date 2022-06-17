const myControl = require('../controller/myGhibliControllers')

const express = require('express') 

const myrouter = express.Router()//funcao rotas

// router. metodo http (rota, funcao)

myrouter.get("/catalogo", myControl.getAll)
myrouter.put("/change/:id", myControl.updateTodos)
myrouter.patch("/update/:id", myControl.updateTime)
myrouter.delete("/delete/:director", myControl.deleteDiretor)
myrouter.delete("/delete/:id", myControl.deleteId)

module.exports = myrouter


/*  POSTMAN - rotas testadas e funcionando
myrouter.get("/catalogo", myControl.getAll) ok
myrouter.patch("/update/:id", myControl.updateTime) ok
myrouter.put("/change/:id", myControl.updateTodos)OK

 */