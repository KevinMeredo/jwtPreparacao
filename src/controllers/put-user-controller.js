const { UserModel } = require('../models/user-model');

class PutUserController {
    async update(request, response) {
        try {
            const {id} = request.params;

            const user = await UserModel.update(request.body, {
                where: { id: id }
              })

            return response.status(201).json(user);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new PutUserController();