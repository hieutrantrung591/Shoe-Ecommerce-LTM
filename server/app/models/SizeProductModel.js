import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const SizeProduct = db.define('size_product', {
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();

export default SizeProduct;