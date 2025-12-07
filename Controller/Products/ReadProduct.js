const Product = require("../../Model/ProductUser");

const GetProducts = async (req, res) => {
  try {
    const result = await Product.find();

    res.status(200).json({
      statues: 200,
      success: true,
      message: "All Products",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const GetSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.findById(id);

    res.status(200).json({
      statues: 200,
      success: true,
      message: "Single Product",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  GetProducts,
  GetSingleProduct,
};
