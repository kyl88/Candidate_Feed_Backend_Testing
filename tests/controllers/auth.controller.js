const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { UserModel } = require("../controllers/model/user.model");
const keys = require("");

// @route POST api/auth/signup
// @desc Signup new user
// @access Public

const signup = asyncHandler(async (req, res) => {

  const {
    email,
    password,
    role,
    independentGoal,
    hiringGoals,
    phoneNumber,
    timeline,
    budget,
  } = req.body;

  // Find email that may exist
  const user = await UserModel.findOne({ email });
  //Check if email already exists
  if (user) {
    res.status(409).json({ message: "Email already exists" });
    return;
  }
  // Create new user
  const newUser = new UserModel({
    email,
    password,
    signUpMethod: "local",
  });
  // Save user
  const userPayload = {
    id: newUser._id,
    email: newUser.email,
  };
  await newUser.save();
  return jwt.sign(
    userPayload,
    keys.secretOrKey,
    { expiresIn: 3600 },
    // Callback function to assign token
    (err, token) => {
      res.json({
        success: true,
        token: "Bearer " + token,
        user: newUser,
      });
    }
  );
});
// @route POST api/auth/verifyEmail
// @desc check for existing email
// @access Public
const verifyEmail = asyncHandler(async (req, res) => {
  const { email } = req.body;
  // Find user by email
  const user = await UserModel.findOne({ email });
  // If user doesn't exist, reply not found
  if (!user) {
    res
      .status(404)
      .json({ userFound: false, message: "This email address does not exist" });
    return;
  }
  // Respond with user email
  if (user) res.status(200).json({ userFound: true, email });
});
// @route POST api/auth/login
// @desc Login user and return JWT token
// @access Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Find user by email
  const user = await UserModel.findOne({ email });
  // If user doesn't exist
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  // Check weather the user signed up using google strategy
  if (user.signUpMethod === "google") {
    res.status(400).json({
      message: "Use google authentication to login",
    });
    return;
  }
  // Check password
  await user.comparePassword(password, (err, isMatch) => {
    // Password matched
    if (isMatch) {
      // Create JWT Payload
      const userPayload = {
        id: user._id,
        email: user.email,
      };
      // Sign Token
      return jwt.sign(
        userPayload,
        keys.secretOrKey,
        { expiresIn: 3600 },
        // Callback function to assign token
        (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token,
            user,
          });
        }
      );
    }
    // Password did not match
    return res.status(400).json({ message: "Password incorrect" });
  });
});
// @route GET api/auth/google/callback
// @desc sign token for google user sign in
// @access Public
const googleCallback = (req, res) => {
  // User payload
  const userPayload = {
    id: req.user.id,
    email: req.user.email,
  };
  // Sign Token
  return jwt.sign(
    userPayload,
    keys.GOOGLE_CLIENT_SECRET,
    { expiresIn: 3600 },
    // Callback function to assign token
    (err, token) => {
      res.json({
        success: true,
        token: "Bearer " + token,
      });
    }
  );
};

const AuthController = {
    login,
    signup,
    verifyEmail,
    googleCallback,
  };
  module.exports = AuthController;