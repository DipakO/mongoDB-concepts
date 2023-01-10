const express = require("express");
const mongoose = require("./db");
const app = express();

const PORT = 2000;

mongoose.on("connected", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("mongoDB Connected!");
  }
});

app.listen(PORT, () => {
  console.log("Server is Start");
});

app.get("/", (req, res) => {
  res.send("<h1>This is created by using express js</h1>");
});

// routes

app.use("/users", require("./routes/Users"));
