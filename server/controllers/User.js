const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// @desc    Register user
// @route   POST /api/users/
// @access  Public

const registerUser = async (req, res, next) => {
  const { email, username, password, first, last } = req.body;

  const emailExist = await User.findOne({ email });
  const userNameExist = await User.findOne({ "login.username": username });

  if (emailExist) {
    res.status(400).send({ message: "Email already exists" });
  } else if (userNameExist) {
    res.status(400).send({ message: "Username already exists" });
  } else {
    try {
      const user = await User.create({
        email,
        login: {
          username,
          password,
        },
        name: {
          first,
          last,
        },
      });

      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
        });
      } else {
        res.status(400);
        throw new Error("Invalid user data");
      }
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }
};

// @desc    Auth user
// @route   POST /api/users/login
// @access  Public

const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        user_name: user.login.username,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private

const getUserProfile = async (req, res) => {
  try {
    const userProfile = await User.findById(req.user._id);

    if (userProfile) {
      res.json({ userProfile });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc    Fetch all users
// @route   GET /api/users
// @access  Public

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {}
};

module.exports = {
  getUsers,
  registerUser,
  authUser,
  getUserProfile,
};
