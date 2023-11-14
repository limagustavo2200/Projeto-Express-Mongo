// FUNÇÃO PARA CONECTAR NO BANCO DE DADOS - MONGODB
import mongoose from "mongoose"
import 'dotenv/config'


 console.log("oi")
async function conectaNaDataBase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection
}

export default conectaNaDataBase