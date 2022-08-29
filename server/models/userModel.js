import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
      number: { type: Number, required: true },
      name: { type: String, required: true },
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    postcode: {
      type: Number,
      required: true,
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
    date: { type: Date, default: new Date(), required: true },
    age: { type: Number, required: true },
  },
  phone: {
    type: String,
    required: true,
  },
  picture: {
    large: { type: String, required: true },
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

const User = mongoose.model("User", userSchema);

export default User;
