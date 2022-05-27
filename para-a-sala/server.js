const app = require("./src/app"); // chama o arquivo app.js

const PORT = 1313; // configura a porta

app.listen(PORT, () => {
    console.log("Servidor na porta 1313")
})