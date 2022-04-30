import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import ImportExport from "./ImportExportModel.js";

const { DataTypes } = Sequelize;

const Warehouse = db.define('warehouse', {
    name:{
        type: DataTypes.STRING
    },
    address:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});
 
Warehouse.hasMany(ImportExport);

export default Warehouse;