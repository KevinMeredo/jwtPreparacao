const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UserModel } = require('../models/user-model.js');
const { TOKEN_SECRET, SALT } = require('../../ambiente');

/**
 * Criar usuário e retorna um token de acesso
 */
class SignupUserController {
    async signup(request, response) {
        try {
            const { nome, senha } = request.body;

            // Validar parâmetros
            if (!nome || !senha) {
                return response.status(400).json({
                    error: 'Nome e senha são obrigatórios!'
                });
            }

            // Criptografa senha
            const passwordHashed = await bcrypt.hash(senha, SALT);

            // Cria usuário
            const user = await UserModel.create({
                nome,
                senha: passwordHashed,
            });

            if (!user) {
                return response.status(400).json({
                    error: 'Houve um erro ao criar usuário'
                });
            }

            // Gera e retorna access token
            const accessToken = jwt.sign(
                { id: user.id },
                TOKEN_SECRET,
                { expiresIn: '30m' }
            );

            return response.status(201).json({
                accessToken
            });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new SignupUserController();