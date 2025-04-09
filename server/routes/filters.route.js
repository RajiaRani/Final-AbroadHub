const express = require("express");
const router = express.Router();
const University = require("../models/University.js");
// Filter by course name
router.get("/filter/course", async (req, res) => {
  const { courseName } = req.query;
  try {
    const filteredUniversities = await University.find({
      $or: [
        { 'UG.courseName': { $regex: courseName, $options: 'i' } },
        { 'PG.courseName': { $regex: courseName, $options: 'i' } },
        { 'PhD.courseName': { $regex: courseName, $options: 'i' } },
      ],
    });
    res.json(filteredUniversities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error filtering by course name" });
  }
});

// Filter by ranking
router.get("/filter/ranking", async (req, res) => {
  const { min, max } = req.query;
  try {
    const filteredUniversities = await University.find({
      ranking: { $gte: parseInt(min), $lte: parseInt(max) },
    });
    res.json(filteredUniversities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error filtering by ranking" });
  }
});

// Filter by tuition fees
router.get("/filter/fees", async (req, res) => {
  const { min, max } = req.query;
  try {
    const filteredUniversities = await University.find({
      fees: { $gte: min, $lte: max },
    });
    res.json(filteredUniversities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error filtering by fees"});
  }
});

// Filter by intake date
router.get("/filter/intake", async (req, res) => {
  const { intakeDate } = req.query;
  try {
    const filteredUniversities = await University.find({
      $or: [
        { 'UG.intakes.intakeDate': { $gte: new Date(intakeDate) } },
        { 'PG.intakes.intakeDate': { $gte: new Date(intakeDate) } },
        { 'PhD.intakes.intakeDate': { $gte: new Date(intakeDate) } },
      ],
    });
    res.json(filteredUniversities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error filtering by intake date" });
  }
});

// Filter by exams
router.get("/filter/exam", async (req, res) => {
  const { examName } = req.query;
  try {
    const filteredUniversities = await University.find({
      $or: [
        { 'UG.exams.examName': { $regex: examName, $options: 'i' } },
        { 'PG.exams.examName': { $regex: examName, $options: 'i' } },
        { 'PhD.exams.examName': { $regex: examName, $options: 'i' } },
      ],
    });
    res.json(filteredUniversities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error filtering by exam" });
  }
});

module.exports = router;
