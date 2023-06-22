const { Model, DataTypes } = require("sequelize");

class TaskSpecificationModel extends Model {
    static init(database) {
        super.init({
            especificacao: DataTypes.TEXT,
        }, {
            tableName: 'taskSpecification',
            modelName: 'TaskSpecification',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        this.belongsTo(models.Task, { foreignKey: 'taskId' });
    }
}

module.exports = { TaskSpecificationModel };