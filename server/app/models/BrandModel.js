import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Product from "./ProductModel.js"

const { DataTypes } = Sequelize;

const Brand = db.define('brand',{
    name:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});
 
Brand.hasMany(Product, { onDelete: 'SET NULL', onUpdate: 'CASCADE' });
 
export default Brand;