const User = require("../models/User.js");
const University = require("../models/University");

// Controller function to save a university
exports.saveUniversity = async (req, res) => {
  const { userId } = req.params; // User ID from route parameters
  const { universityId } = req.body; // University ID from request body

  try {
    // Check if the university exists
    const university = await University.findById(universityId);
    if (!university) {
      return res.status(404).json({ message: "University not found"});
    }

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message:"User not found"});
    }

    // Check if the university is already saved
    const alreadySaved = user.saved_universities.some(
      (savedUni) => savedUni.university_id.toString() === universityId
    );
    if (alreadySaved) {
      return res.status(400).json({ message: "University already saved" });
    }

    // Save the university
    user.saved_universities.push({ university_id: universityId });
    await user.save();

    res.status(200).json({ message: "University saved successfully", savedUniversities: user.saved_universities });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message:"Error saving university"});
  }
};

exports.getSavedUniversities = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const user = await User.findById(userId).populate('saved_universities.university_id');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ savedUniversities: user.saved_universities });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching saved universities' });
    }
  };
  
