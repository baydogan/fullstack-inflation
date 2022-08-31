const express = require("express");
const { getAllProducts, getProductById } = require("../controllers/Product");



const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/:id").get(getProductById);

module.exports = router;
