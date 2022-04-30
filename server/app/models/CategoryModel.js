import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Product from "./ProductModel.js"

const { DataTypes } = Sequelize;

const Category = db.define('category',{
    name:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});

Category.hasMany(Product);
 
export default Category;