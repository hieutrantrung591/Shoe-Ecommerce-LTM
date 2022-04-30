import { Sequelize } from "sequelize";
 
const db  = new Sequelize('poseidon_shoe', 'root', 'root', {
    host: "localhost",
    dialect: "mysql",
    // logging: false
});

export default db;