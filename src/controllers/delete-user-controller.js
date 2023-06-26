const { UserModel } = require('../models/user-model');

class DeleteUserController {
    async destroy(request, response) {
        try {
            const {id} = request.params;

            const user = await UserModel.destroy({
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

module.exports = new DeleteUserController();