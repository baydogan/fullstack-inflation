import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

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

// @desc    Fetch all users
// @route   GET /api/users
// @access  Public

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {}
};

export { getUsers, authUser };
