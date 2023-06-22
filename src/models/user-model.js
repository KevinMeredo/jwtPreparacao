const { Model, DataTypes } = require("sequelize");

class UserModel extends Model {
    static init(database) {
        super.init({
            nome: DataTypes.TEXT,
            senha: DataTypes.TEXT
        }, {
            tableName: 'users',
            modelName: 'User',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        this.hasMany(models.Task, { foreignKey: 'userId' });
        this.belongsToMany(models.Task, {through: UserTasks})
    }
}

module.exports = { UserModel };