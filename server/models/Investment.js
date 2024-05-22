// models/Investment.js
const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
  ticker: { type: String, required: true },
  quantity: { type: Number, required: true },
  purchasePrice: { type: Number, required: true },
});

module.exports = mongoose.model('Investment', investmentSchema);
