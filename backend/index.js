import express from "express";
import cors from "cors";
import router from "express";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(router);

app.listen(process.env.PORT, () => console.log("Server up dan Running..."));
