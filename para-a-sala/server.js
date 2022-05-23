const app = require("./src/app") //chamando o arquivo app

const PORT = 1313 //PORTA

//iniciando o servidor
app.listen(PORT , ()=>{
    console.log(`alo bb? to na porta ${PORT}`)
})
