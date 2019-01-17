const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//load profile model
const Profile = require("../models/Profile");

//load validation function
const validateUpdateProfile = require("../validation/profile");

//@Route /api/profile/update
router.post(
  "/update",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateUpdateProfile(req.body);

    //check validation
    if (!isValid) {
      return res.status(400).send(errors);
    }

    //get all fields
    const profileDetails = {
      user: req.user.id,
      name: req.body.name,
      country: req.body.country,
      address: req.body.address,
      about: req.body.about,
      email: req.body.email,
      mobile: req.body.mobile,
      skype: req.body.skype,
      website: req.body.website,
      socialMedia: {
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        linkedin: req.body.linkedin
      }
    };

    console.log(req.user.id);

    const profile = await Profile.findOne({
      user: mongoose.Types.ObjectId(req.user.id)
    });

    console.log("profile", profile);

    if (!profile) {
      const newProfile = await new Profile(profileDetails).save();

      res.status(200).send(newProfile);
    } else {
      const newProfile = await Profile.findOneAndUpdate(
        { user: mongoose.Types.ObjectId(req.user.id) },
        { $set: profileDetails },
        { new: true }
      );

      res.status(200).send(newProfile);
    }
  }
);

//@Route api/profile/:id
router.get("/:id", async (req, res) => {
  console.log("id = ", req.params.id);

  const profile = await Profile.findOne({
    user: mongoose.Types.ObjectId(req.params.id)
  }).populate("user", ["-password"]);
  res.status(200).send(profile);
});
module.exports = router;
