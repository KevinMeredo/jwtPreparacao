const { EstoqueDiarioModel } = require('../models/estoque-diario-model');

/**
 * Encontra estoques e retorna os estoques
 */
class FindAllEstoqueDiarioController {
    async findAll(request, response) {
        try {
            const estoques = await EstoqueDiarioModel.findAll();

            return response.status(201).json(estoques);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new FindAllEstoqueDiarioController();