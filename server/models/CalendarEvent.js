// models/CalendarEvent.js
const mongoose = require('mongoose');

const calendarEventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  notes: { type: String, required: false },
});

module.exports = mongoose.model('CalendarEvent', calendarEventSchema);
