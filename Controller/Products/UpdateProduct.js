const { handleError } = require("../../utility/ErrorHandler");
const Product = require("../../Model/ProductUser");

const objectId = require("mongodb").ObjectId;
const SingleProductUpdate = async (req, res) => {
  const { id } = req.params;
  const { productQuantity } = req.body;

  const productId = id.trim().replace(/\s/g, "");

  if (!objectId.isValid(productId)) {
    return handleError(res, 400, "Invalid ID");
  }

  try {
    const updated = await Product.findOneAndUpdate(
      { _id: "6935a40d3deed1d176618c8e" },
      { $set: { productQuantity: productQuantity } },
      { new: true }
    );

    console.log(updated);

    res.status(200).json({ message: "Product updated successfully" });
  } catch (err) {
    handleError(res, 500, err);
  }
};

module.exports = { SingleProductUpdate };
