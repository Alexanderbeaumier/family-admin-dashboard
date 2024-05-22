// models/Meal.js
const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  ingredients: { type: [String], required: true },
});

module.exports = mongoose.model('Meal', mealSchema);
