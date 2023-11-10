import { autor } from "../models/Autor.js"
import livro from "../models/Livro.js"


class LivroController {
    static async listarLivros (req, res) {
        try{
            const listaLivros = await livro.find()
            res.status(200).json(listaLivros)
        }
        catch(erro){
            res.status(500).json({ message: `${erro.message} - FALHA NA REQUISIÇÃO`})
        }
    }

    static async listarLivroPorId (req, res) {
        try{
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado)
        }
        catch(erro){
            res.status(500).json({ message: `${erro.message} - FALHA NA REQUISIÇÃO DO LIVRO`})
        }
    }

    static async cadastrarLivro(req, res){
        const novoLivro = req.body
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor)
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } }
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({ message: "Criado com sucesso!", livro: livroCriado })   
        }
        catch(erro){
            res.status(500).json({ message: `${erro.message} - FLAHA AO CADASTRAR LIVRO ` })
        }
    }

    static async atualizarLivro (req, res) {
        try{
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: 'Livro atualizado!'})
        }
        catch(erro){
            res.status(500).json({ message: `${erro.message} - FALHA NA REQUISIÇÃO DO LIVRO`})
        }
    }

    static async excluirLivro (req, res) {
        try{
            const id = req.params.id
            await livro.findByIdAndDelete(id)
            res.status(200).json({ message: 'Livro excluido!'})
        }
        catch(erro){
            res.status(500).json({ message: `${erro.message} - FALHA NA EXCLUSÃO DO LIVRO`})
        }
    }


}




export default LivroController
