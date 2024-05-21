const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const studentSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  linkedinUrl: {
    type: String,
    required: true,
  },

  languages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Languages",
    },
  ],
  program: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  cohort: {
    type: Schema.Types.ObjectId,
    ref: "Cohort",
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Student = model("Student", studentSchema);

module.exports = Student;
