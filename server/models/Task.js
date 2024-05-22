// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: { type: String, required: true },
  dueDate: { type: Date, required: true },
  assignedTo: { type: String, required: true },
});

module.exports = mongoose.model('Task', taskSchema);
