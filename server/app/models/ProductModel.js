import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Invoice from "./InvoiceModel.js";
import InvoiceProduct from "./InvoiceProductModel.js";
import Size from "./SizeModel.js";
import SizeProduct from "./SizeProductModel.js";
import Image from "./ImageModel.js";
import ImportExport from "./ImportExportModel.js";
import ImportExportProduct from "./ImportExportProductModel.js";

const { DataTypes } = Sequelize;

const Product = db.define('product', {
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

Product.belongsToMany(Invoice, { through: InvoiceProduct });
Product.belongsToMany(Size, { through: SizeProduct });
Product.belongsToMany(ImportExport, { through: ImportExportProduct });
Product.hasMany(Image);

export default Product;