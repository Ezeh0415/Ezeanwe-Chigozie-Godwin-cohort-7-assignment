const { handleError } = require("../../utility/ErrorHandler");
const bcrypt = require("bcrypt");
const User = require("../../Model/UserSchema");
const generateToken = require("../../Middleware/JWT-Token");

const Signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return handleError(res, null, "All inputs are required", 400);
  }

  if (password.length < 6) {
    return handleError(
      res,
      null,
      "Password must be at least 6 characters",
      400
    );
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return handleError(res, null, "Email already exists", 400);
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hash,
    });

    const token = await generateToken(user);

    res.status(201).json({
      success: true,
      message: "User created",
      data: user,
      token,
    });
  } catch (error) {
    return handleError(res, null, error.message, 500);
  }
};

module.exports = { Signup };
