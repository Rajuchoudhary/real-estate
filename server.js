require("express-async-errors");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const user = require("./routes/user");
const profile = require("./routes/profile");
const property = require("./routes/property");

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
app.use("/api/user/", user);
app.use("/api/profile/", profile);
app.use("/api/property/", property);

// Hanlding unhandled promises
process.on("unhandledRejection", ex => {
  throw ex;
});

//Server static assets if in production
if (process.env.NODE__ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started listing on Port: ${PORT}`);
});
