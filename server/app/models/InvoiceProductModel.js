import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const InvoiceProduct = db.define('invoice_product', {
    cost: {
        type: DataTypes.FLOAT
    },
    quantity: {
        type: DataTypes.INTEGER
    }
},{
    freezeTableName:true
});

export default InvoiceProduct;