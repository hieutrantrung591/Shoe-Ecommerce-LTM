import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Invoice from "./InvoiceModel.js";

const { DataTypes } = Sequelize;

const User = db.define('user',{
    name: {
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

User.hasMany(Invoice);

(async () => {
    await db.sync();
})();
 
export default User;