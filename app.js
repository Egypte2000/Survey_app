require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const surveyRoutes = require('./routes/surveyRoutes');
const authRoutes = require('./routes/authRoutes'); // Added this line

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit the process if unable to connect
  });

// Simple homepage route
app.get('/', (req, res) => {
  res.send('Welcome to the Survey App API!');
});

// Auth routes
app.use('/api/auth', authRoutes); // Added auth routes here

// Survey routes
app.use('/api/surveys', surveyRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
