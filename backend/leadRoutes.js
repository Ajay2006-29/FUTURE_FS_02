const express = require("express");
const Lead = require("./models/Lead");

const router = express.Router();

// Create lead
router.post("/create", async (req, res) => {
  const lead = await Lead.create(req.body);
  res.json(lead);
});

// Get all leads
router.get("/all", async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

// Update status
router.put("/update/:id", async (req, res) => {
  const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(lead);
});

// Add notes
router.put("/notes/:id", async (req, res) => {
  const lead = await Lead.findByIdAndUpdate(req.params.id, { notes: req.body.notes }, { new: true });
  res.json(lead);
});

module.exports = router;
