import { Sequelize } from "sequelize";

const db = new Sequelize('cqadb', 'project', 'hvam', {
    host: "localhost",
    dialect: "mysql"
});

export default db;