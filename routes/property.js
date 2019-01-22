const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const passport = require("passport");

//Load Property model
const Property = require("../models/Property");

//Load property validator
const validatePropertyInput = require("../validation/property");

//add new property
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
      imgUrl: req.body.imgUrl,
      price: req.body.price,
      description: req.body.description,
      address: req.body.address,
      mapLocation: {
        lat: req.body.lat,
        lng: req.body.lng
      },
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
      return res
        .status(400)
        .send({ title: "property should have unique title." });
    } else {
      const newProperty = await new Property(PropertyDetails).save();

      res.status(200).send(newProperty);
    }
  }
);

//update property
//@Route /api/property/update
router.post(
  "/update",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validatePropertyInput(req.body);

    if (!isValid) {
      return res.status(400).send(errors);
    }

    const PropertyDetails = {
      title: req.body.title,
      imgUrl: req.body.imgUrl,
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

    console.log("new data", PropertyDetails);

    const property = await Property.findOne({ _id: req.body.id });

    if (property) {
      const newProperty = await Property.findByIdAndUpdate(
        req.body.id,
        { $set: { ...PropertyDetails } },
        { new: true }
      );

      res.status(200).send(newProperty);
    } else {
      res.status(400).send("not found");
    }
  }
);

//delete property
//@Route /api/property/delete
router.delete(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    console.log(req.query.id);

    const message = await Property.findByIdAndDelete({ _id: req.query.id });

    if (message) {
      res.status(200).send({ msg: "deleted" });
    } else {
      res.status(400).send({ msg: "wrong" });
    }
  }
);

//get all properties
//@Route /api/property
router.get("/all", async (req, res) => {
  const currentPage = req.query.currentPage;
  const pageSize = req.query.pageSize;
  const filter = req.query.selectedFilter;
  // console.log("page size", currentPage, pageSize);

  if (filter === "rent" || filter === "sale") {
    const propertiesList = await Property.find({ status: filter })
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize * 1)
      .sort({ date: -1 })
      .populate("user", ["-password"]);
    res.status(200).send(propertiesList);
  }
  if (filter === "all") {
    const propertiesList = await Property.find()
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize * 1)
      .sort({ date: -1 })
      .populate("user", ["-password"]);
    res.status(200).send(propertiesList);
  }
});

//get property with id
//@Route /api/property/:id

router.get("/:id", async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    const propertyDetail = await Property.findOne({
      _id: req.params.id
    }).populate("user", ["-password"]);
    console.log(propertyDetail);

    if (propertyDetail) {
      return res.status(200).send(propertyDetail);
    } else {
      return res.status(400).send({ msg: "no found" });
    }
  } else {
    res.status(400).send("Not found");
  }
});

//get total property count
//@Route /api/property/
router.get("/", async (req, res) => {
  if (req.query.filter === "rent" || req.query.filter === "sale") {
    const totalCount = await Property.find({
      status: req.query.filter
    }).countDocuments();
    res.status(200).send({ totalCount: totalCount });
  }
  if (req.query.filter === "all") {
    const totalCount = await Property.find().countDocuments();
    res.status(200).send({ totalCount: totalCount });
  }
});
module.exports = router;
