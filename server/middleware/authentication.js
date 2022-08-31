const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protectUser = async (req, res, next) => {
  if (!req.headers["authorization"]) return next(createError.Unauthorized());
  const token = req.headers["authorization"];

  if (token) {
    try {
      const tokenBody = token.slice(7);
      const decoded = jwt.verify(tokenBody, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401).send({ message: "Something went wrong" });
    }
  }
};

module.exports = protectUser;
