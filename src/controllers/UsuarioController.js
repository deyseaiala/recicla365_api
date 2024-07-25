const Usuario = require("../models/Usuario")

const regexCpf = new RegExp(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
const regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

class UsuarioController{

    async criarUsuario(request, response){
        try {
            const dados = request.body 

            if(!dados.nome || !dados.email || !dados.password || !dados.data_nascimento || !dados.cpf  ){
                return response.status(400)
                .json({mensagem: "Todos com * são obrigatórios, por favor complete os dados"}) 
            }

            if(regexEmail.test(dados.email) === false){
                return response.status(400)
                .json({ mensagem: "O email está incorreto, por favor insira um email válido" })
            }

            if(regexCpf.test(dados.cpf) === false){
                return response.status(400)
                .json({ mensagem: "O CPF está incorreto, por favor insira um CPF válido" })
            }

            if(dados.password.length <8 || dados.password.length >16){
                return response.status(400)
                .json({mensagem: "A senha deve ter no mínimo 8 e no máximo 16 caracteres" })
            }

            const emailExistente = await Usuario.findOne({
                where: {email: dados.email}
            })

            const cpfExistente = await Usuario.findOne({
                where: {cpf: dados.cpf}
            })

            if(emailExistente || cpfExistente){
                return response.status(409)
                .json({ mensagem: "Já existe usuário com esse email ou CPF"})
            }

            const novoUsuario = await Usuario.create({
                nome: dados.nome,
                email: dados.email,
                password: dados.password,
                sexo: dados.sexo,
                data_nascimento: dados.data_nascimento,
                endereco: dados.endereco,
                cpf: dados.cpf
            })

            response.status(201)
            .json({
                nome: novoUsuario.nome,
            })
            

        } catch (error) {
            console.log(error)
            response.status(500).json({mensagem: "Erro ao criar novo usuário"})
        }

    }

}

module.exports = new UsuarioController()