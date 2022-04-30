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

(async () => {
    await db.sync();
})();

export default Invoice;