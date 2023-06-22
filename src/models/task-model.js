const { Model, DataTypes } = require("sequelize");

class TaskModel extends Model {
    static init(database) {
        super.init({
            crn: DataTypes.TEXT,
        }, {
            tableName: 'task',
            modelName: 'Task',
            timestamps: true,
            sequelize: database
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'userId' });
    }
}

module.exports = { TaskModel };