require("express-async-errors");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const user = require("./routes/user");

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

//API Route
app.use("/api/user", user);
// app.use("/agent", agent);

// Hanlding unhandled promises
process.on("unhandledRejection", ex => {
  throw ex;
});

// Home Route
app.get("/", (req, res) => {
  res.send("Backend server is listing on port 5000");
});

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started listing on Port: ${PORT}`);
});
