const mongoose = require("mongoose");

const URI = "mongodb+srv://admin:DT5GikCyM2NnBD2l@cluster0.diwhw3w.mongodb.net/fullstack-inflation";

const connectToMongo = async () => {
  try {
    const conn = await mongoose.connect(URI);
    console.log(` 'Connected to MongoDB' ${conn.connection.host}`.cyan);
  } catch (error) {
    console.log(`${error}`.red);
  }
};

module.exports = () => {
  connectToMongo()
};
