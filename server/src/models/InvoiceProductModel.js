'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InvoiceProduct extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            InvoiceProduct.belongsTo(models.Invoice, {
                foreignKey: 'invoiceId'
            })

            InvoiceProduct.belongsTo(models.Product, {
                foreignKey: 'productId'
            })
        }
    };

    InvoiceProduct.init({
        invoiceId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        cost: DataTypes.FLOAT,
        quantity: DataTypes.INTEGER,
    }, {
        sequelize,              // We need to pass the connection instance
        modelName: 'InvoiceProduct',     // We need to choose the model name
    });

    // the defined model is the class itself
    return InvoiceProduct;
};