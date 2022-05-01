'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Employee extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Employee.hasMany(models.ImportExport, {
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                foreignKey: 'employeeId'
            });
            Employee.hasMany(models.Warehouse, {
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                foreignKey: 'employeeId'
            });
            Employee.hasMany(models.User, {
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                foreignKey: 'employeeId'
            });
        }
    };
    Employee.init({
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        dob: DataTypes.DATE,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        gender: DataTypes.BOOLEAN,
        position: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Employee',
    });
    return Employee;
};