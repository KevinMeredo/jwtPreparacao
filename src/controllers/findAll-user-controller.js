const { UserModel } = require('../models/user-model');

/**
 * Encontra users e retorna os users
 */
class FindAllUserController {
    async findAll(request, response) {
        try {
            const users = await UserModel.findAll();

            return response.status(201).json(users);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new FindAllUserController();