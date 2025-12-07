const Product = require("../../Model/ProductUser");

const CreateItem = async (req, res) => {
  const {
    productName,
    productModel,
    productPrice,
    productImage,
    productDescription,
    productCategory,
    productBrand,
    productRating,
    productQuantity,
  } = req.body;

  if (
    !productName ||
    !productModel ||
    !productPrice ||
    !productImage ||
    !productDescription ||
    !productCategory ||
    !productBrand ||
    !productRating ||
    !productQuantity
  ) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  try {
    const newProduct = await Product.create({
      productName,
      productModel,
      productPrice,
      productImage,
      productDescription,
      productCategory,
      productBrand,
      productRating,
      productQuantity,
      createdAt: new Date().toISOString,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { CreateItem };
