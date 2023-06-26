const { Router } = require('express');

const signupUserController = require('./controllers/signup-user-controller');
const signinUserController = require('./controllers/signin-user-controller');

const createEstoqueDiarioController = require('./controllers/create-estoque-diario-controller');
const createEntregadorController = require('./controllers/create-entregador-controller');

const findAllEntregadorController = require('./controllers/findAll-entregador-controller');
const findAllUserController = require('./controllers/findAll-user-controller');
const findAllEstoqueDiarioController = require('./controllers/findAll-estoque-diario-controller');

const putUserController = require('./controllers/put-user-controller');
const putEntregadorController = require('./controllers/put-entregador-controller');
const putEstoqueDiarioController = require('./controllers/put-estoque-diario-controller');

const deleteUserController = require('./controllers/delete-user-controller')
const deleteEntregadorController = require('./controllers/delete-entregador-controller')
const deleteEstoqueDiarioController = require('./controllers/delete-estoque-diario-controller')

const { authMiddleware } = require('./middlewares/auth-middleware');

const routes = Router();

// Users
routes.post('/user/signup', signupUserController.signup);
routes.post('/user/sigin', signinUserController.signin);
routes.get('/user', authMiddleware,findAllUserController.findAll);
routes.put('/user/:id', authMiddleware,putUserController.update);
routes.delete('/user/:id', authMiddleware,deleteUserController.destroy)

// EstoqueDiario
routes.post('/estoqueDiario', authMiddleware, createEstoqueDiarioController.create);
routes.get('/estoqueDiario', authMiddleware, findAllEstoqueDiarioController.findAll)
routes.put('/estoqueDiario/:id', authMiddleware,putEstoqueDiarioController.update);
routes.delete('/estoqueDiario/:id', authMiddleware,deleteEstoqueDiarioController.destroy)

// Entregador
routes.post('/entregador', authMiddleware, createEntregadorController.create);
routes.get('/entregador', authMiddleware,findAllEntregadorController.findAll);
routes.put('/entregador/:id', authMiddleware,putEntregadorController.update);
routes.delete('/entregador/:id', authMiddleware,deleteEntregadorController.destroy)

module.exports = { routes };