const { EntregadorModel } = require('../models/entregador-model');

class PutEntregadorController {
    async update(request, response) {
        try {
            const {id} = request.params;

            const entregador = await EntregadorModel.update(request.body, {
                where: { id: id }
              })

            return response.status(201).json(entregador);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new PutEntregadorController();