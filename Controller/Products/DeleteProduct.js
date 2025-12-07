const objectId = require("mongodb").ObjectId;
const Product = require("../../Model/ProductUser");
const { handleError } = require("../../utility/ErrorHandler");

const DeleteSingleProduct = async (req, res) => {
  const { id } = req.params;
  if (objectId.isValid(id)) {
    return handleError(res, 400, "Invalid Id");
  }
  try {
    await Product.findOneAndDelete({ _id: id });
    res.status(200).json({ message: "Product Deleted" });
  } catch (error) {
    handleError(res, 500, "Internal Server Error");
  }
};

module.exports = { DeleteSingleProduct };
