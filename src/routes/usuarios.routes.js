const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')

const usuariosRoutes = new Router()

usuariosRoutes.post("/", UsuarioController.criarUsuario)
usuariosRoutes.post("/login", UsuarioController.login)

module.exports = usuariosRoutes