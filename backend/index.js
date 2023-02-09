import db from "./config/database.js";
import express from "express";
// import userRoutes from "./routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser);
// app.use('/', routes);

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database: ', error);
}

app.listen(5172, () => console.log('Server running at port 5172'));
