const express = require("express");

const router = express.Router();

router.get("/", require("./../Controllers/Users").getUsers);

// To insert our data
router.post("/userId", (req, res) => {
  res.send("Data Insert Succesfully in users.js");
});

//  To Delete User data

router.delete("/", (req, res) => {
  res.send("Data deletes Succesfully in users.js");
});

module.exports = router;
