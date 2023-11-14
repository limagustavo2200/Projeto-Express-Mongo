import 'dotenv/config'
import app from './src/app.js'

//Instanciando um servidor na porta 3000
const PORT = 3000;

app.listen(PORT, () =>{
    console.log("Servidor rodando com sucesso na porta 3000!")
})
