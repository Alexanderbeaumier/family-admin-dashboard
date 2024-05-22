const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

// Add new meal
router.post('/', async (req, res) => {
  const { name, date, ingredients } = req.body;
  const newMeal = new Meal({ name, date, ingredients });
  await newMeal.save();
  res.status(201).json(newMeal);
});

// Get all meals
router.get('/', async (req, res) => {
  const meals = await Meal.find();
  res.json(meals);
});

// Update a meal
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedMeal = await Meal.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedMeal);
});

// Delete a meal
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Meal.findByIdAndDelete(id);
  res.status(204).send();
});

module.exports = router;
