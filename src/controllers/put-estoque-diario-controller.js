const { EstoqueDiarioModel } = require('../models/estoque-diario-model');

class PutEstoqueDiarioController {
    async update(request, response) {
        try {
            const {id} = request.params;

            const estoqueDiario = await EstoqueDiarioModel.update(request.body, {
                where: { id: id }
              })

            return response.status(201).json(estoqueDiario);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new PutEstoqueDiarioController();