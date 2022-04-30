import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const ImportExportProduct = db.define('import_export_product', {
    cost: {
        type: DataTypes.FLOAT
    },
    quantity: {
        type: DataTypes.INTEGER
    }
},{
    freezeTableName:true
});

export default ImportExportProduct;