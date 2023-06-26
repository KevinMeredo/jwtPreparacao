const { EntregadorModel } = require('../models/entregador-model');

/**
 * Cria entregador e retorna o entregador
 */
class CreateEntregadorController {
    async create(request, response) {
        try {
            const { nome, cnh, data, hora  } = request.body;

            // Cria Entregador
            const entregador = await EntregadorModel.create({
                nome: nome,
                cnh: cnh,
                data: data,
                hora: hora
            });

            return response.status(201).json(entregador);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new CreateEntregadorController();