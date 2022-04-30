import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Invoice = db.define('invoice', {
    totalPaid: {
        type: DataTypes.FLOAT
    }
},{
    freezeTableName:true
});

export default Invoice;