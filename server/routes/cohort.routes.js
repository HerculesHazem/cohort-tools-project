const router = require("express").Router();
// const cohortsTemp = require("../cohorts.json");
const Cohort = require("../models/cohort.model");

router.get("/cohorts", (req, res) => {
  //   console.log(cohortsTemp);
  //   res.json(cohortsTemp);

  Cohort.find().then((cohorts) => {
    res.json(cohorts);
  });
});

module.exports = router;
