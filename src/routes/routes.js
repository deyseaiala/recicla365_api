const { Router } = require('express')
const usuariosRoutes = require('./usuarios.routes')
const locaisColetaRoutes = require('./locaisColeta.routes')

const routes = new Router()

routes.use('/usuarios', usuariosRoutes)
routes.use('/locaisColeta', locaisColetaRoutes)


module.exports = routes 