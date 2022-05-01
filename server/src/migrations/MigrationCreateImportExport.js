'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('import_export', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true
            },
            importExport: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            employeeId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Employee',
                    key: 'id'
                },
            },
            warehouseId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('import_export');
    }
}