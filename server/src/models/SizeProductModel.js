'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SizeProduct extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    };

    SizeProduct.init({
    }, {
        sequelize,              // We need to pass the connection instance
        modelName: 'SizeProduct',     // We need to choose the model name
    });

    // the defined model is the class itself
    return SizeProduct;
};