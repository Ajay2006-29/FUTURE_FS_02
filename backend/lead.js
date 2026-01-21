const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  source: { type: String, default: "Website" },
  status: { type: String, default: "New" },
  notes: { type: String, default: "" }
});

module.exports = mongoose.model("Lead", leadSchema);
