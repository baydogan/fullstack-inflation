import connectToMongo from "../config/db.js";
import dotenv from "dotenv";
import colors from "colors";
import { users } from "../mockData/users.js";
import User from "../models/userModel.js";

dotenv.config();

connectToMongo();

const importData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);
    console.log("Data imported".green.inverse);
    process.exit(1)
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1)
  }
};

importData();
