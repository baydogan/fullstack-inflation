import express from "express";
import dotenv from "dotenv";
import colors from 'colors'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log(`App is running on ${PORT}`.green));
