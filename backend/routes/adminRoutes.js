const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// These are your admin credentials — change them to whatever you want
const ADMIN_EMAIL = "admin@healthhub.com";
const ADMIN_PASSWORD = "healthhub@2024";
const JWT_SECRET = "healthhub_secret_key";

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "7d" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;