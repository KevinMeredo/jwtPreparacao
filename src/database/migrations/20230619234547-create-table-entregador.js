'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('entregador', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            nome: Sequelize.TEXT,
            cnh: Sequelize.TEXT,
            data: Sequelize.TEXT,
            hora: Sequelize.TEXT
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('entregador');
    }
};