import mongoose from "mongoose";

const productSchema = mongoose.Schema();

const Product = mongoose.model("Product", productSchema);

export default Product;
