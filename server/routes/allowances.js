const express = require('express');
const router = express.Router();
const Allowance = require('../models/Allowance');

// Add new allowance
router.post('/', async (req, res) => {
  const { familyMember, amount, date } = req.body;
  const newAllowance = new Allowance({ familyMember, amount, date });
  await newAllowance.save();
  res.status(201).json(newAllowance);
});

// Get all allowances
router.get('/', async (req, res) => {
  const allowances = await Allowance.find();
  res.json(allowances);
});

// Update an allowance
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedAllowance = await Allowance.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedAllowance);
});

// Delete an allowance
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Allowance.findByIdAndDelete(id);
  res.status(204).send();
});

module.exports = router;
