const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Add new task
router.post('/', async (req, res) => {
  const { task, dueDate, assignedTo, priority } = req.body;
  const newTask = new Task({ task, dueDate, assignedTo, priority });
  await newTask.save();
  res.status(201).json(newTask);
});

// Get all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Update a task
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedTask);
});

// Delete a task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.status(204).send();
});

module.exports = router;
