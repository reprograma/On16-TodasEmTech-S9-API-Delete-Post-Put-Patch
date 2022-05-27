const app =  require ('./src/app') // chamando o arquivo app

const PORT = 1212

app.listen(PORT,() =>{
    console.log(`e aí pessoal. tô na porta ${PORT}`)
})
