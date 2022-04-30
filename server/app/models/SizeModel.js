import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Size = db.define('size', {
    name: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Size;