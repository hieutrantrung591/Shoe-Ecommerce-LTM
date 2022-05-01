'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ImportExport extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            ImportExport.belongsToMany(models.Product, {
                through: 'ImportExportProduct',
                foreignKey: 'importExportId'
            });

            ImportExport.belongsTo(models.Employee, { 
                foreignKey: 'employeeId' 
            });
            ImportExport.belongsTo(models.Warehouse, { foreignKey: 'warehouseId' });
        }
    };

    ImportExport.init({
        importExport: DataTypes.BOOLEAN,
        employeeId: DataTypes.INTEGER,
        warehouseId: DataTypes.INTEGER,
    }, {
        sequelize,              // We need to pass the connection instance
        modelName: 'ImportExport',     // We need to choose the model name
    });

    // the defined model is the class itself
    return ImportExport;
};