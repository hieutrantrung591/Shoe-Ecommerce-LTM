import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Image = db.define('image', {
    url: {
        type: DataTypes.STRING
    },
    isThumbnail: {
        type: DataTypes.BOOLEAN
    }
}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();

export default Image;