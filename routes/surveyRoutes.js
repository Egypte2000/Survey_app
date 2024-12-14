const express = require('express');
const { getSurveys, createSurvey, updateSurvey, deleteSurvey } = require('../controllers/surveyController');
const router = express.Router();

// Get all surveys
router.get('/', getSurveys);

// Create a new survey
router.post('/', createSurvey);

// Update a survey
router.put('/:id', updateSurvey);  // Add this route for updating surveys

// Delete a survey
router.delete('/:id', deleteSurvey);  // Add this route for deleting surveys

module.exports = router;
