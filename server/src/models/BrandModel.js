'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Brand extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Brand.hasMany(models.Product, {
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                foreignKey: 'brandId'
            });
        }
    };

    Brand.init({
        name: DataTypes.STRING,
    }, {
        sequelize,              // We need to pass the connection instance
        modelName: 'Brand',     // We need to choose the model name
    });

    // the defined model is the class itself
    return Brand;
};