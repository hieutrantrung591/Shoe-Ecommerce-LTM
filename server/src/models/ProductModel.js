'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.hasMany(models.Image, { foreignKey: 'productId' });
            Product.belongsTo(models.Brand, { 
                foreignKey: 'brandId',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                foreignKey: 'productId'
            });
            Product.belongsTo(models.Category, { 
                foreignKey: 'categoryId',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                foreignKey: 'productId'
            });
            Product.belongsTo(models.Supplier, { 
                foreignKey: 'supplierId',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                foreignKey: 'productId'
            });
            Product.belongsToMany(models.Size, {
                through: 'SizeProduct',
                foreignKey: 'productId'
            })
            Product.belongsToMany(models.Invoice, {
                through: 'InvoiceProduct',
                foreignKey: 'productId'
            })
            Product.belongsToMany(models.ImportExport, {
                through: 'ImportExportProduct',
                foreignKey: 'productId'
            })
        }
    };

    Product.init({
        name: DataTypes.STRING,
        price: DataTypes.FLOAT,
        description: DataTypes.STRING,
        categoryId: DataTypes.INTEGER,
        supplierId: DataTypes.INTEGER,
        brandId: DataTypes.INTEGER,
    }, {
        sequelize,              // We need to pass the connection instance
        modelName: 'Product',     // We need to choose the model name
    });

    // the defined model is the class itself
    return Product;
};