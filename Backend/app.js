const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const adminDepartmentRoutes = require("./routes/adminDepartmentRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/admin", adminDepartmentRoutes);

// Test route (optional)
app.get("/", (req, res) => {
  res.send("Backend API is running");
});

module.exports = app;
