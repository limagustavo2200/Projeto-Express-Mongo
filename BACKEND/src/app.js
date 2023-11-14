import express from 'express'
import conectaNaDataBase from './config/dbConnect.js'
import routes from './routes/index.js'

// Chamando a função para conectar ao banco de dados
const conexao = await conectaNaDataBase()

//Verificando erro ao conectar no banco de dados
conexao.on('Error', (erro) => {
    console.error('Erro de conexao', erro)
})

conexao.once('open', () => {
    console.log('Conexao com o banco feito com sucesso!')
})


const app = express()
routes(app)



export default app;
