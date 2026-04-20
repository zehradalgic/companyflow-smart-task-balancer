const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  createCompany,
  createUser,
  findUserByEmail,
} = require("../models/userModel");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
      companyId: user.companyId,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

const register = async (req, res) => {
  try {
    const { companyName, fullName, email, password } = req.body;

    if (!companyName || !fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const existingUser = findUserByEmail(email);

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email.",
      });
    }

    const company = createCompany(companyName);
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = createUser({
      fullName,
      email,
      password: hashedPassword,
      role: "admin",
      companyId: company.id,
    });

    const token = generateToken(user);

    return res.status(201).json({
      success: true,
      message: "Company and admin account created successfully.",
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        companyId: user.companyId,
      },
      company,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Register failed.",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const user = findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = generateToken(user);

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        companyId: user.companyId,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login failed.",
      error: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};