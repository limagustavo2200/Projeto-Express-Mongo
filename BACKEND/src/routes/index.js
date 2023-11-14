import express from 'express'
import livros from './livrosRoutes.js'
import autores from './autoresRoutes.js'

const routes = (app) => {
    // Rota principal
    app.route('/').get((req, res) => res.status(200).send("Curso de Node.js"))

    // Middleware para processar JSON e rotas específicas para livros e autores
    app.use(express.json(), livros, autores)
}


export default routes