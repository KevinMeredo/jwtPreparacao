'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('task', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'users', key: 'id' },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            descricao: Sequelize.TEXT,
            dataPrevistaTermino: Sequelize.DATE,
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('task');
    }
};