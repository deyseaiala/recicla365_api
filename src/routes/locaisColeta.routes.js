const { Router } = require('express')
const LocalColetaController = require('../controllers/LocalColetaController')
const auth = require('../middlewares/auth')

const locaisColetaRoutes = new Router()


locaisColetaRoutes.post("/", auth, LocalColetaController.criarLocal)
locaisColetaRoutes.get("/", auth, LocalColetaController.listarLocais)
locaisColetaRoutes.get("/:id", auth, LocalColetaController.listarUmLocal)
locaisColetaRoutes.delete("/:id", auth, LocalColetaController.deletar)
locaisColetaRoutes.put("/:id", auth, LocalColetaController.atualizar)
locaisColetaRoutes.get("/:id/maps", auth, LocalColetaController.buscarLinkGoogle)

module.exports = locaisColetaRoutes