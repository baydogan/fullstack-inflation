import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: Math.floor(Date.now() / 1000 + 60 * 60),
  });
};

export default generateToken