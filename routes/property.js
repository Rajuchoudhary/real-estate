const express = require("express");
const router = express.Router();
const passport = require("passport");

//Load property validator
const validatePropertyInput = require("../validation/property");

//@Route /api/property/add
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePropertyInput(req.body);

    if (!isValid) {
      return res.status(400).send(errors);
    }

    console.log(req.body);
    res.status(200).send({ added: "successfully!" });
  }
);

module.exports = router;
