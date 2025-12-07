const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String },
  productModel: { type: String },
  productPrice: { type: Number },
  productImage: { type: String },
  productDescription: { type: String },
  productCategory: { type: String },
  productBrand: { type: String },
  productRating: { type: Number },
  productQuantity: { type: Number },
});

module.exports = mongoose.model("Product", productSchema);
