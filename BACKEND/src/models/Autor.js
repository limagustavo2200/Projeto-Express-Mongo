import mongoose from "mongoose";

//Construção do modelo de autores
const autorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String }

}, { versionKey: false })

const autor = mongoose.model('autores', autorSchema)

export { autor, autorSchema }

