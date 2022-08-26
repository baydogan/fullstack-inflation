import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./config/db.js";
import colors from "colors";

dotenv.config();

connectToMongo();

const app = express();

const PORT = process.env.PORT || 5001;


app.listen(PORT, () => console.log(`App is running on ${PORT}`.green));
