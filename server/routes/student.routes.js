const express = require("express");
const studentsTempory = require("../students.json");

// Import necessary modules

// Create a router instance
const router = express.Router();

// Define your student route
router.get("/students", (req, res) => {
  // Your logic for handling the student route goes here
  console.log(studentsTempory);
  res.json(studentsTempory);
  //   res.send("This is the students route");
});

// Export the router
module.exports = router;
