'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('estoqueDiario', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            entregadorId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'entregador', key: 'id' },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            data: Sequelize.TEXT,
            qtdeitens: Sequelize.INTEGER,
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('estoqueDiario');
    }
};