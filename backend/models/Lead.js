const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  productInterest: { type: String },
  message: { type: String },
  status: {
    type: String,
    enum: ["new", "contacted", "closed"],
    default: "new"
  },
}, { timestamps: true });

module.exports = mongoose.model("Lead", leadSchema);