const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { sendEmailNodemailer } = require("../util/sendmail");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a user
const signupUser = async (req, res) => {
  const { email, password, firstName, lastName, address, contactNumber } =
    req.body;

  try {
    const user = await User.signup(
      email,
      password,
      firstName,
      lastName,
      address,
      contactNumber
    );

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const generateToken = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const resetKey = Math.floor(Math.random() * 8001) + 1000;
      console.log("user id", user._id);
      User.findByIdAndUpdate(user._id)
        .then((existingData) => {
          //Assign updated value from request to exiting company
          existingData.resetKey = resetKey;
          //Save the changes from request to database
          existingData
            .save()
            .then(() => {
              sendEmailNodemailer(
                email,
                "Reset Key for your account",
                "This is your reset key : " + resetKey
              );
            })
            .catch((error) => res.status(400).json("Error: " + error));
        })
        .catch((error) => res.status(400).json("Error: " + error));
    }
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const resetPassword = async (req, res) => {
  const { email, password, resetKey } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (user.resetKey === resetKey) {
        User.findByIdAndUpdate(user._id)
          .then(async (existingData) => {
            //Assign updated value from request to exiting company
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            existingData.password = await hashPassword;
            existingData.resetKey = Math.floor(Math.random() * 8001) + 1000;
            //Save the changes from request to database
            await existingData
              .save()
              .then(() => {
                res.status(200).json({ message: "Password Reset Successfull" });
              })
              .catch((error) => res.status(400).json("Error: " + error));
          })
          .catch((error) => res.status(400).json("Error: " + error));
      } else {
        res.status(400).json({ message: "Reset key not matched" });
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then((existingUser) => {
      existingUser.firstName = req.body.firstName;
      existingUser.lastName = req.body.lastName;
      existingUser.address = req.body.address;
      existingUser.contactNumber = req.body.contactNumber;
      if(req.body.profileImage){
        existingUser.profileImage = req.body.profileImage;
      }
      existingUser
        .save()
        .then((updatedUser) => res.json(updatedUser))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

const deleteUser = async (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((deletedUser) => {
      res.json(deletedUser);
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

module.exports = {
  signupUser,
  loginUser,
  generateToken,
  resetPassword,
  getUser,
  deleteUser,
  updateUser,
};
