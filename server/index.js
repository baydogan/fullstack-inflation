import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./config/db.js";
import colors from "colors";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectToMongo();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`.green);
});
