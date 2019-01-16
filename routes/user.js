const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const passport = require("passport");

//Load validation function
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

//Load Agent Model
const Agent = require("../models/Agent");

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

  const agent = await Agent.findOne({ email: email });

  if (agent) {
    errors.email = "Email already exists";
    res.status(400).send(errors);
  } else {
    const newAgent = new Agent({
      name,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);
    newAgent.password = await bcrypt.hash(newAgent.password, salt);
    await newAgent.save();
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

  const agent = await Agent.findOne({ email: email });
  if (!agent) {
    errors.email = "user not found";
    res.status(400).send(errors);
  } else {
    const isMatch = await bcrypt.compare(password, agent.password);
    if (isMatch) {
      // res.status(200).send("success");

      const payload = {
        id: agent.id,
        name: agent.name,
        email: agent.email
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

//@Route api/user/current
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).send(req.user);
  }
);

module.exports = router;
