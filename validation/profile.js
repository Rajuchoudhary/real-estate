const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateUpdateProfile(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.about = !isEmpty(data.about) ? data.about : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.mobile = !isEmpty(data.mobile) ? data.mobile : "";
  data.skype = !isEmpty(data.skype) ? data.skype : "";
  data.website = !isEmpty(data.website) ? data.website : "";
  data.facebook = !isEmpty(data.facebook) ? data.facebook : "";
  data.twitter = !isEmpty(data.twitter) ? data.twitter : "";
  data.linkedin = !isEmpty(data.linkedin) ? data.linkedin : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!isEmpty(data.name)) {
    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
      errors.name = "Name must be between 2 and 30 characters";
    }
  }

  if (Validator.isEmpty(data.country)) {
    errors.country = "Please select a country";
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = "please insert your address";
  }
  if (!isEmpty(data.address)) {
    if (!Validator.isLength(data.address, { min: 15, max: 100 })) {
      errors.address = "Address must be atleast 15 characters";
    }
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.mobile)) {
    errors.mobile = "Mobile number is required";
  }

  if (!Validator.isLength(data.mobile, { min: 10, max: 10 })) {
    errors.mobile = "please enter valid mobile number";
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Not a valid URL";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
