const { Sequelize } = require('sequelize');
const configDatabase = require('./config');

const { UserModel } = require('../models/user-model');
const { TaskModel } = require('../models/task-model');

const database = new Sequelize(configDatabase);

// init models
UserModel.init(database);
TaskModel.init(database);

// relationships
UserModel.associate(database.models);
TaskModel.associate(database.models);

module.exports = database;