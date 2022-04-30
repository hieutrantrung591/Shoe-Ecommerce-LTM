import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const ImportExport = db.define('import_export', {
    import_export: {
        type: DataTypes.BOOLEAN
    }
}, {
    freezeTableName: true
});

export default ImportExport;