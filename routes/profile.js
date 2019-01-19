const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//load profile model
const Profile = require("../models/Profile");
const User = require("../models/User");

//load validation function
const validateUpdateProfile = require("../validation/profile");

//@Route api/profile/
// router.get(
//   "/",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     const profile = await Profile.findOne({
//       user: mongoose.Types.ObjectId(req.user.id)
//     }).populate("user", ["-password"]);
//     res.status(200).send(profile);
//   }
// );

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
      country: req.body.country,
      address: req.body.address,
      about: req.body.about,
      mobile: req.body.mobile,
      skype: req.body.skype,
      website: req.body.website,
      socialMedia: {
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        linkedin: req.body.linkedin
      }
    };

    const profile = await Profile.findOne({
      user: mongoose.Types.ObjectId(req.user.id)
    });

    if (!profile) {
      const newProfile = await new Profile(profileDetails).save();
      res.status(200).send(newProfile);
    } else {
      const updateUser = await User.findByIdAndUpdate(req.user.id, {
        name: req.body.name,
        email: req.body.email
      });
      const newProfile = await Profile.findOneAndUpdate(
        { user: mongoose.Types.ObjectId(req.user.id) },
        { $set: profileDetails },
        { new: true }
      ).populate("user", ["-password"]);
      res.status(200).send(newProfile);
    }
  }
);

//@Route api/profile/:id
router.get("/:id", async (req, res) => {
  console.log("user id", req.params.id);

  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    const profile = await Profile.findOne({
      user: mongoose.Types.ObjectId(req.params.id)
    }).populate("user", ["-password"]);
    res.status(200).send(profile);
    console.log(profile);
  } else {
    res.status(400).send("Not found");
  }
});

// @Route api/profile/user/current
router.get(
  "/user/current",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    console.log("current id = ", req.user.id);

    const profile = await Profile.findOne({
      user: mongoose.Types.ObjectId(req.user.id)
    }).populate("user", ["-password"]);
    res.status(200).send(profile);
    // console.log(profile);
  }
);
module.exports = router;
