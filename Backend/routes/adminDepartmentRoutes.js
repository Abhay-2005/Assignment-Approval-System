const express = require("express");
const Department = require("../models/Department");
const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

// Create Department
router.post("/departments", adminAuth, async (req, res) => {
  const { name, code } = req.body;

  if (!name || !code) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const exists = await Department.findOne({ code });
  if (exists) {
    return res.status(400).json({ message: "Department already exists" });
  }

  const department = await Department.create({
    name,
    code,
    createdBy: req.user.id
  });

  res.status(201).json({
    message: "Department created successfully",
    department
  });
});

// Get All Departments
router.get("/departments", adminAuth, async (req, res) => {
  const departments = await Department.find().sort({ createdAt: -1 });
  res.json(departments);
});

module.exports = router;
