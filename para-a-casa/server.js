//chamando o arquivo app
const app = require('./src/app') 

//configurando a porta
const PORT = 1313 

app.listen( PORT, () => {
	console.log(`Hey there, I'm listening on'${PORT}`)
	})