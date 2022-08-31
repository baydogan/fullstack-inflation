const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  gender: {
    type: String,
    required: false,
  },
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true },
  },
  location: {
    street: {
      number: { type: Number, required: false },
      name: { type: String, required: false },
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    postcode: {
      type: Number,
      required: false,
    },
  },
  email: { type: String, required: true, unique: true },
  login: {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  registered: {
    date: { type: Date, default: new Date(), required: false },
    age: { type: Number, required: false },
  },
  phone: {
    type: String,
    required: false,
  },
  picture: {
    large: { type: String, required: false },
    medium: { type: String, required: false },
    thumbnail: { type: String, required: false },
  },
  isAdmin: false,
});

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.login.password);
};

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.login.password = await bcrypt.hash(this.login.password, salt);
});

module.exports = mongoose.model("User", userSchema);
