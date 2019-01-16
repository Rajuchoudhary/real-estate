const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const agentSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100
  }
});

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
