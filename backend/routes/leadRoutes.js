const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

// Customer submits inquiry → saves to DB
router.post("/", async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json({ message: "Inquiry submitted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Admin fetches all inquiries
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin updates status (new → contacted → closed)
router.patch("/:id", async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    res.json(lead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;