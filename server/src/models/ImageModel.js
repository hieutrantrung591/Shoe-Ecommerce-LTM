'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Image extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Image.belongsTo(models.Product, { 
                foreignKey: 'productId' 
            });
        }
    };

    Image.init({
        url: DataTypes.STRING,
        isThumbnail: DataTypes.BOOLEAN,
        productId: DataTypes.INTEGER,
    }, {
        sequelize,              // We need to pass the connection instance
        modelName: 'Image',     // We need to choose the model name
    });

    // the defined model is the class itself
    return Image;
};