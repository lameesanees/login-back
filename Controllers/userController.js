// authController.js

// Import userSchema or model
const users = require("../Models/userSchema");
const jwt = require('jsonwebtoken');

// Register logic
exports.register = async (req, res) => {
  // Accept data from client
  const { username, email, password } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      res.status(406).json("User Already Exists");
    } else {
      // Create a new user
      const newUser = new users({
        username,
        email,
        password,  
      });
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(500).json("Registration Failed");
  }
};

// Login logic
exports.login = async (req, res) => {
  // Accept data from client
  const { email, password } = req.body;
  try {
    // Check if email and password match in the database
    const existingUser = await users.findOne({ email, password });
    if (existingUser) {

      // If user exists, generate a JWT token
      const token = jwt.sign({ userId: existingUser._id }, "superkey");
      res.status(200).json({ existingUser, token });
    } else {
      res.status(404).json("Invalid email or password");
    }
  } catch (err) {
    res.status(500).json("Login failed" + err);
  }
};




