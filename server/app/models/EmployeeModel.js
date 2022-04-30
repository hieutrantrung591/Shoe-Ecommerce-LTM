import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import ImportExport from "./ImportExportModel.js";
import Invoice from "./InvoiceModel.js";
import User from "./UserModel.js"

const { DataTypes } = Sequelize;

const Employee = db.define('employee',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    dob: {
        type: DataTypes.STRING
    },
    position: {
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});
 
Employee.hasMany(ImportExport);
Employee.hasMany(Invoice);
Employee.hasMany(User);
 
export default Employee;