import createError from "http-errors";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

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

// const protectUser = async (req, res, next) => {
//   const token = req.headers["authorization"];

//   if (token) {
//     try {
//       const tokenBody = token.slice(7);
//       const decoded = jwt.verify(tokenBody, process.env.JWT_SECRET);
//       req.user = await User.findById(decoded.id).select("-password");

//       next();
//     } catch (error) {
//       res.status(401).send({ message: "Something went wrong" });
//     }
//   }

//   if (!token) {
//     res.status(401).send({ message: 'Not authorized, no token' });
//   }

// };

export { protectUser };
