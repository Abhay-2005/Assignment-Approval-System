const express = require("express");
const router = express.Router();

// temporary login route (to stop crash)
router.post("/login", (req, res) => {
  res.json({ message: "Auth route working" });
});

module.exports = router;
