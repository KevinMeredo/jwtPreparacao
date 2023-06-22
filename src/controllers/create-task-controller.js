const { TaskModel } = require('../models/task-model');

/**
 * Cria tarefa e retorna a tarefa
 */
class CreateTaskController {
    async create(request, response) {
        try {
            const { userId } = request;

            // Cria Tarefa
            const task = await TaskModel.create({
                userId
            });

            return response.status(201).json(task);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new CreateTaskController();