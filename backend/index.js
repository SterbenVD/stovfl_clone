import db from "./config/dbconf.js";
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
    console.log('Successfully Connected Database');
} catch (error) {
    console.error('Error: ', error);
}

app.listen(5172, () => console.log('Server running at port 5172'));
