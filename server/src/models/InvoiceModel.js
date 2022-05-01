'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Invoice extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Invoice.belongsToMany(models.Product, {
                through: 'InvoiceProduct',
                foreignKey: 'invoiceId'
            })
        }
    };

    Invoice.init({
        employeeId: DataTypes.INTEGER,
    }, {
        sequelize,              // We need to pass the connection instance
        modelName: 'Invoice',     // We need to choose the model name
    });

    // the defined model is the class itself
    return Invoice;
};