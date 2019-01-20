const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
    minlength: 15,
    maxlength: 300
  },
  address: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  mapLocation: {
    lat: { type: String, required: true },
    lng: { type: String, required: true }
  },
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  city: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  zip: {
    type: Number,
    required: true
  },
  propertyType: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  beds: {
    type: Number,
    required: true
  },
  baths: {
    type: Number,
    required: true
  },
  area: {
    type: Number,
    required: true
  },
  garages: {
    type: Number,
    required: true
  },
  features: {
    ac: { type: Boolean, default: false },
    gym: { type: Boolean, default: false },
    bar: { type: Boolean, default: false },
    internet: { type: Boolean, default: false },
    microwave: { type: Boolean, default: false },
    smoking: { type: Boolean, default: false },
    fireplace: { type: Boolean, default: false },
    toaster: { type: Boolean, default: false },
    tennis: { type: Boolean, default: false },
    tv: { type: Boolean, default: false }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
