const { hashSync } = require("bcryptjs")
const connection = require("../database/connection")
const { DataTypes } = require('sequelize')


const Usuario = connection.define(
    "usuarios", {
        nome: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password_hash: {
            type: DataTypes.STRING
        },
        sexo: {
            type: DataTypes.STRING
        },
        data_nascimento: {
            type: DataTypes.DATE
        },
        endereco: {
            type: DataTypes.STRING
        }
    }
)

Usuario.beforeSave((usuario) => {

    usuario.password_hash = hashSync(usuario.password_hash, 10) 
    return usuario
 })

module.exports = Usuario