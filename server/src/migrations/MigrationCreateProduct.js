'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('product', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            categoryId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Category',
                    key: 'id'
                }
            },
            supplierId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Supplier',
                    key: 'id'
                },
            },
            brandId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Brand',
                    key: 'id'
                },
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
        return queryInterface.dropTable('product');
    }
}