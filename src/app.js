import express from "express";
import cors from "cors";
import { servicesRouter } from "./components";
import * as dotenv from "dotenv"
import connect from "./db/database"

export const app = express();
dotenv.config()


app.use(cors());
connect(process.env.MONGODB_URL)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", servicesRouter);
