import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Product from "./ProductModel.js";

const { DataTypes } = Sequelize;

const Supplier = db.define('supplier', {
    name: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING,
        length: 20,
    },
    email: {
        type: DataTypes.STRING,
        length: 100,
    },
    representative: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

Supplier.hasMany(Product);

export default Supplier;