const app = require("./src/app") 

const PORT = 8080 //PORTA que vai usar declarar em letra maiuscula

//iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor do GhibliFilms está na porta GARATOOOO
     ${PORT}`)
})
