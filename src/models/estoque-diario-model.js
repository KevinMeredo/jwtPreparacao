const { Model, DataTypes } = require("sequelize");

class EstoqueDiarioModel extends Model {
    static init(database) {
        super.init({
            data: DataTypes.TEXT,
            qtdeitens: DataTypes.INTEGER,
        }, {
            tableName: 'estoqueDiario',
            modelName: 'EstoqueDiario',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        this.belongsTo(models.Entregador, {foreignKey: 'entregadorId'})
    }
}

module.exports = { EstoqueDiarioModel };