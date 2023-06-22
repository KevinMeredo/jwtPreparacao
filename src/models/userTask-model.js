const { Model, DataTypes } = require("sequelize");

class UserTaskModel extends Model {
    static init(database) {
        super.init({
        }, {
            tableName: 'userTasks',
            modelName: 'UserTasks',
            timestamps: false,
            sequelize: database
        });
    }
}

module.exports = { UserTaskModel };