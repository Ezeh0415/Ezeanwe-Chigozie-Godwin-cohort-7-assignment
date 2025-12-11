const User = require("../../Model/UserSchema");

const AllUsers = async (req, res) => {
  try {
    console.log(req.user); // <--- You can access it here

    const id = req.user.id;

    console.log(id); // <--- You can access it here

    const existingUser = await User.findById(id);

    if (existingUser.role !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }

    const users = await User.find().select("-password");
    res.json({ users });
  } catch (err) {
    res.status(500).json({ message: "Server error", err: err.message });
  }
};

module.exports = { AllUsers };
