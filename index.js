const express = require("express");
const app = express();

// Home Route
app.get("/", (req, res) => {
  res.send("Backend server is listing on port 5000");
});

// Server Setup

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started listing on Port: ${PORT}`);
});
