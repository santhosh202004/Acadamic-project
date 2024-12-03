const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middleware/auth');

// Booking Schema
const bookingSchema = new mongoose.Schema({
  vehicle: String,
  implement: String,
  date: Date,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
  // Add other fields if necessary
});

const Booking = mongoose.model('Booking', bookingSchema);

// Route to get bookings for the logged-in user
router.get('/user-bookings', authenticateUser, async (req, res) => {
  try {
    const userId = req.user._id; // Assuming req.user is populated by authenticateUser middleware
    const bookings = await Booking.find({ userId });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve bookings' });
  }
});

module.exports = { Booking, bookingRoutes: router };
