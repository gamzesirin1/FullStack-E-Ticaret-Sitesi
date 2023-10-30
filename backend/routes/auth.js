const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const User = require("../models/User");

const generateRandomAvatar = () => {
  const randomAvatar = Math.floor(Math.random() * 70 + 1);
  return `https://i.pravatar.cc/300?img=${randomAvatar}`;
};

// create user
router.post("/register", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // email validation
    const checkEmail = await User.findOne({ email });

    if (checkEmail) {
      return res.status(400).json({ message: "Email adresi kullanılıyor." });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
      avatar: generateRandomAvatar(),
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
    console.log("err",error)
  }
});

// login user
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Hatalı email adresi." });
    }

    const checkPassword = bcrypt.compareSync(password, user.password);

    if (!checkPassword) {
      return res.status(400).json({ message: "Hatalı şifre." });
      
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
    console.log("err",error)
  }
});

module.exports = router;
