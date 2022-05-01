'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('image', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true
            },
            url: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            isThumbnail: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            productId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Product',
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
        return queryInterface.dropTable('image');
    }
}