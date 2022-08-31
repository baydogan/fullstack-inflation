import connectToMongo from "../config/db.js";
import dotenv from "dotenv";
import colors from "colors";
import { users } from "../data/users.js";
import { products } from "../data/products.js";
import User from "../models/User.js";
import Product from "../models/Product.js";

dotenv.config();
connectToMongo();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    await User.insertMany(users);

    const adminUser = await User.findOne({});


    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data imported".green.inverse);
    process.exit(1);
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

importData();
