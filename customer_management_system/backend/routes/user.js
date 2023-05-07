const express = require("express");

// controller functions
const {
  loginUser,
  signupUser,
  generateToken,
  resetPassword,
  getUser,
  deleteUser,
  updateUser
} = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

router.post("/signup", signupUser); // signup route

router.post("/generateresetkey", generateToken);

router.post("/resetpassword", resetPassword);

router.post("/getuser", getUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
