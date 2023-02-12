import db from "./config/database.js";
import express from "express";
// import routes from "./config/routes.js";
import cors from "cors";

const port = 5172;
const app = express();
app.use(cors());
app.use(express.json());
// app.use('/', routes);

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database: ', error);
}

app.listen(port, () => console.log(`Server running at port ${port}`));
