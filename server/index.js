const express = require("express");

const userRoutes = require("./routes/User")
const config = require("./config")
const productRoutes = require("./routes/Product")


config()

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`.green);
});
