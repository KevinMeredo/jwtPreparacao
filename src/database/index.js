const { Sequelize } = require('sequelize');
const configDatabase = require('./config');

const { UserModel } = require('../models/user-model');
const { EntregadorModel } = require('../models/entregador-model');
const { EstoqueDiarioModel } = require('../models/estoque-diario-model');

const database = new Sequelize(configDatabase);

// init models
UserModel.init(database);
EntregadorModel.init(database);
EstoqueDiarioModel.init(database)

// relacionamentos
EntregadorModel.associate(database.models);
EstoqueDiarioModel.associate(database.models);

module.exports = database;