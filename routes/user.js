const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const passport = require("passport");

//Load validation function
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

//Load User Model
const User = require("../models/User");

router.get("/extra", (req, res) => {
  res.send("hi there");
});

// @Route api/user/register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  //validate registration detail
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) return res.status(400).send(errors);

  //check if user already exists

  const user = await User.findOne({ email: email });

  if (user) {
    errors.email = "Email already exists";
    res.status(400).send(errors);
  } else {
    const newUser = new User({
      name,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save();
    res.status(200).send({ name, email });
  }
});

//@Route api/user/login
router.post("/login", async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).send(errors);
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    errors.email = "user not found";
    res.status(400).send(errors);
  } else {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      // res.status(200).send("success");

      const payload = {
        id: user.id,
        name: user.name,
        email: user.email
      };

      const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 });

      res
        .status(200)
        .send({ payload: payload, success: true, token: "Bearer " + token });
    } else {
      res.status(400).send("password incorrect!");
    }
  }
});

module.exports = router;
