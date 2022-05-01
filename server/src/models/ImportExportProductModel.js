'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ImportExportProduct extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            ImportExportProduct.belongsTo(models.ImportExport, { 
                foreignKey: 'importExportId'
            });

            ImportExportProduct.belongsTo(models.Product, { 
                foreignKey: 'productId'
            })
        }
    };

    ImportExportProduct.init({
        importExportId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        cost: DataTypes.FLOAT,
        quantity: DataTypes.INTEGER,
    }, {
        sequelize,              // We need to pass the connection instance
        modelName: 'ImportExportProduct',     // We need to choose the model name
    });

    // the defined model is the class itself
    return ImportExportProduct;
};