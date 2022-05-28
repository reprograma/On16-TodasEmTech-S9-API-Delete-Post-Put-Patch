const app = require("./src/app") //chamando o arquivo app

const PORT = 3000 //PORTA

//iniciando o servidor
app.listen(PORT , ()=>{
    console.log(`Olá, servidor rodando na porta ${PORT}`)
})