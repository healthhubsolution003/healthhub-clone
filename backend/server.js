const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
 
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");
const leadRoutes = require("./routes/leadRoutes");
const adminRoutes = require("./routes/adminRoutes");
 
dotenv.config();
 
// Connect Database
connectDB();
 
const app = express();
 
// Middleware
app.use(cors());
app.use(express.json());
 
// API Routes
app.use("/api/leads", leadRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/admin", adminRoutes);
 
// Test Route
app.get("/", (req, res) => {
  res.send("HealthHub API Running...");
});
 
// Start Server
const PORT = process.env.PORT || 5000;
 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 