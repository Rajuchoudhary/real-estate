require("express-async-errors");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

const user = require("./routes/user");
const profile = require("./routes/profile");

const app = express();

//DB Setup
const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.log(err);
  });

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());

//Config Passport stratergy
require("./config/passport")(passport);

//API Route
app.use("/api/user", user);
app.use("/api/profile", profile);

// Hanlding unhandled promises
process.on("unhandledRejection", ex => {
  throw ex;
});

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started listing on Port: ${PORT}`);
});
