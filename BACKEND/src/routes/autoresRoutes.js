import express from "express"
import AutorController from "../controllers/autorController.js"

const routes = express.Router()
//Rotas para CRUD de autores

routes.get("/autores", AutorController.listarAutores)
routes.get("/autores/:id", AutorController.listarAutorPorId)
routes.post("/autores", AutorController.cadastrarAutor)
routes.put("/autores/:id", AutorController.atualizarAutor)
routes.delete("/autores/:id", AutorController.excluirAutor)

export default routes