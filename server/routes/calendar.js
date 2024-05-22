const express = require('express');
const router = express.Router();
const CalendarEvent = require('../models/CalendarEvent');

// Add new calendar event
router.post('/', async (req, res) => {
  const { title, date, notes } = req.body;
  const newEvent = new CalendarEvent({ title, date, notes });
  await newEvent.save();
  res.status(201).json(newEvent);
});

// Get all calendar events
router.get('/', async (req, res) => {
  const events = await CalendarEvent.find();
  res.json(events);
});

// Update a calendar event
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedEvent = await CalendarEvent.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedEvent);
});

// Delete a calendar event
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await CalendarEvent.findByIdAndDelete(id);
  res.status(204).send();
});

module.exports = router;
