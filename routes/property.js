const express = require("express");
const router = express.Router();
const passport = require("passport");

//Load Property model
const Property = require("../models/Property");

//Load property validator
const validatePropertyInput = require("../validation/property");

//@Route /api/property/add
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validatePropertyInput(req.body);

    if (!isValid) {
      return res.status(400).send(errors);
    }

    const PropertyDetails = {
      user: req.user.id,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      address: req.body.address,
      country: req.body.country,
      state: req.body.state,
      city: req.body.city,
      zip: req.body.zip,
      propertyType: req.body.propertyType,
      status: req.body.status,
      beds: req.body.beds,
      baths: req.body.baths,
      area: req.body.area,
      garages: req.body.garages,
      features: {
        ac: req.body.ac ? true : false,
        gym: req.body.gym ? true : false,
        bar: req.body.bar ? true : false,
        internet: req.body.internet ? true : false,
        microwave: req.body.microwave ? true : false,
        smoking: req.body.smoking ? true : false,
        fireplace: req.body.fireplace ? true : false,
        toaster: req.body.toaster ? true : false,
        tennis: req.body.tennis ? true : false,
        tv: req.body.tv ? true : false
      }
    };

    const property = await Property.findOne({ title: PropertyDetails.title });

    if (property) {
      return res.status(400).send("property should have unique title.");
    } else {
      const newProperty = await new Property(PropertyDetails).save();

      res.status(200).send(newProperty);
    }
  }
);

module.exports = router;
