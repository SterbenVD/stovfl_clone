import { Sequelize } from "sequelize";

const db = new Sequelize("cqadb", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",
  logging: console.log,
});

// Syncing all models
// await sequelize.sync();
// console.log("All models were synchronized successfully.");

export default db;
