'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Size extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Size.belongsToMany(models.Product, {
                through: 'SizeProduct',
                foreignKey: 'sizeId'
            });
        }
    };

    Size.init({
        name: DataTypes.STRING,
    }, {
        sequelize,              // We need to pass the connection instance
        modelName: 'Size',     // We need to choose the model name
    });

    // the defined model is the class itself
    return Size;
};