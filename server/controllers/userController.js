import User from "../models/userModel.js";

// @desc    Fetch all users
// @route   GET /api/users
// @access  Public

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    
  }
};

export { getUsers };
