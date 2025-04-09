const express = require("express");
const { getAllUniversities, getUniversityById, searchUniversities, getUniversities} = require("../controllers/universities.controller.js");

const router = express.Router();

router.get("/", getAllUniversities);
router.get("/search", searchUniversities);
router.get("/all", getUniversities);
router.get("/:id", getUniversityById);

module.exports = router;
