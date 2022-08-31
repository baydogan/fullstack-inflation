const jwt = require("jsonwebtoken");

module.exports = generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: Math.floor(Date.now() / 1000 + 60 * 60),
  });
};

