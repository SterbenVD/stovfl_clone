import { Sequelize } from "sequelize";

const db = new Sequelize('cqadb', 'project', 'hvam', {
    host: "localhost",
    dialect: "mysql",
    logging: console.log,
    // define: {
    //     freezeTableName: true,
    //     timestamps: false
    // }
});

export default db;