const { Model, DataTypes } = require("sequelize");

class EntregadorModel extends Model {
    static init(database) {
        super.init({
            nome: DataTypes.TEXT,
            cnh: DataTypes.TEXT,
            data: DataTypes.TEXT,
            hora: DataTypes.TEXT
        }, {
            tableName: 'entregador',
            modelName: 'Entregador',
            timestamps: false,
            sequelize: database
        });
    }
    static associate(models) {
        this.hasMany(models.EstoqueDiario, {foreignKey: 'entregadorId'})
    }
}

module.exports = { EntregadorModel };