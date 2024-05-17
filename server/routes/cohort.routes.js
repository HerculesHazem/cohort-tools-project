const router = require("express").Router();
const cohortsTemp = require("../cohorts.json");

router.get("/cohorts", (req, res) => {
  console.log(cohortsTemp);
  res.json(cohortsTemp);
});

module.exports = router;
