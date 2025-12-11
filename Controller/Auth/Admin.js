const User = require("../../Model/UserSchema");

const mongoose = require("mongoose");

const Admin = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const user = await User.findById(id);

    if (!user) {
      res.status(400).json({ message: "user not found" });
    }

    user.role = "admin";
    await user.save();
    res.status(200).json({ message: "user role updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { Admin };
