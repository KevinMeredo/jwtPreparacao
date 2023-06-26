const { EntregadorModel } = require('../models/entregador-model');

/**
 * Encontra entregador e retorna o entregador
 */
class FindAllEntregadorController {
    async findAll(request, response) {
        try {
            const entregadores = await EntregadorModel.findAll();

            return response.status(201).json(entregadores);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new FindAllEntregadorController();