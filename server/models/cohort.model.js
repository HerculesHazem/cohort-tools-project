const mongoose = require("mongoose");
const { format } = require("morgan");
const { Schema, model } = mongoose;

const cohortSchema = new Schema({
  inProgress: {
    type: Boolean,
    required: true,
  },
  cohortSlug: {
    type: String,
    required: true,
    unique: true,
  },
  cohortName: {
    type: String,
    required: true,
  },
  program: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  campus: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  programManager: {
    type: Schema.Types.ObjectId,
    ref: "ProgramManager",
  },
  leadTeacher: {
    type: Schema.Types.ObjectId,
    ref: "LeadTeacher",
  },
  totalHours: {
    type: Number,
    required: true,
  },
});

const Cohort = model("Cohort", cohortSchema);

module.exports = Cohort;
