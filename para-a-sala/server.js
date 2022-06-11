const app = require("./src/app") //chamando o arquivo app que esta no src - routes

const PORT = 1313 //PORTA que vai usar declarar em letra maiuscula

//iniciando o servidor
app.listen(PORT , ()=>{
    console.log(`Este Servidor está na porta ${PORT}`)
})

/* pode usar este modelo acima de codigo ou  usar o modelo da aula 8
app.lister ( 1313, () => {
    console.log("servidor na porta 1313")
})
*/