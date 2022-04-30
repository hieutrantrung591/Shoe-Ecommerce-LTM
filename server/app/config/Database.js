import { Sequelize } from "sequelize";
 
const db = new Sequelize('poseidon_shoe', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;