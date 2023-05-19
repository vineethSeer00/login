const bcrypt = require("bcrypt");
const userAuth = require("../models/userSchema");

exports.register = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all the required information.",
      });
    }
    const existingUser = await userAuth.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists.",
      });
    }
    const newUser = await userAuth.create({
      name,
      email,
      password
    });

    return res.status(200).json({
      success: true,
      message: "User registered successfully.",
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: "Please provide all the required information.",
      });
    }

    const existingUser = await userAuth.findOne({ email });
    if (!existingUser) {
      return res.status(409).json({
        success: false,
        message: "No User  exists.",
      });
    }

    const isMatch = await existingUser.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Password Not Correct.",
      });
    } else {
      return res.status(200).json({
        success: true,
        existingUser
      });
    }
  } catch (error) {
    console.log(error);
  }
};
