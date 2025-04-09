const express = require("express");
const router = express.Router();
const {  saveUniversity, getSavedUniversities } = require("../controllers/userController");

// Route to save a university
router.post("/users/:userId/save-university", saveUniversity);
router.get("/users/:userId/saved-universities", getSavedUniversities);

module.exports = router;