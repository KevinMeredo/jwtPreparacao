const { EstoqueDiarioModel } = require('../models/estoque-diario-model');

class DeleteEstoqueDiarioController {
    async destroy(request, response) {
        try {
            const {id} = request.params;

            const estoquediario = await EstoqueDiarioModel.destroy({
                where: { id: id }
              })

            return response.status(201).json(estoquediario);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new DeleteEstoqueDiarioController();