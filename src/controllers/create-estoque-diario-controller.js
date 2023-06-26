const { EstoqueDiarioModel } = require('../models/estoque-diario-model');

/**
 * Cria estoque e retorna o estoque
 */
class CreateEstoqueDiarioController {
    async create(request, response) {
        try {
            const { data, qtditens, entregadorId  } = request.body;

            // Cria estoque
            const estoqueDiario = await EstoqueDiarioModel.create({
                data: data,
                qtditens: qtditens,
                entregadorId: entregadorId
            });

            return response.status(201).json(estoqueDiario);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new CreateEstoqueDiarioController();