const { Model, DataTypes } = require("sequelize");

class TaskModel extends Model {
    static init(database) {
        super.init({
            descricao: DataTypes.TEXT,
            dataPrevistaTermino: DataTypes.DATE,
        }, {
            tableName: 'task',
            modelName: 'Task',
            timestamps: true,
            sequelize: database
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'userId' });
        this.hasOne(models.TaskSpecification, { foreignKey: 'taskId' });
        this.belongsToMany(models.User, {through: UserTasks})
    }
}

module.exports = { TaskModel };