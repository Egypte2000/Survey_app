const Survey = require('../models/surveyModel');

// Get all surveys
exports.getSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.json(surveys);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new survey
exports.createSurvey = async (req, res) => {
  try {
    const newSurvey = new Survey(req.body);
    const savedSurvey = await newSurvey.save();
    res.status(201).json(savedSurvey);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a survey
exports.updateSurvey = async (req, res) => {
  try {
    const updatedSurvey = await Survey.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSurvey) {
      return res.status(404).json({ error: 'Survey not found' });
    }
    res.json(updatedSurvey);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a survey
exports.deleteSurvey = async (req, res) => {
  try {
    const deletedSurvey = await Survey.findByIdAndDelete(req.params.id);
    if (!deletedSurvey) {
      return res.status(404).json({ error: 'Survey not found' });
    }
    res.json({ message: 'Survey deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
