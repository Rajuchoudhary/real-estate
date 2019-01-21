const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  about: {
    type: String
  },
  country: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true,
    minlength: 15,
    maxlength: 100
  },
  mobile: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  skype: {
    type: String
  },
  website: {
    type: String
  },
  socialMedia: {
    facebook: {
      type: String,
      default: "www.facebook.com"
    },
    twitter: {
      type: String,
      default: "www.twitter.com"
    },
    linkedin: {
      type: String,
      default: "www.linkedin.com"
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});
const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
