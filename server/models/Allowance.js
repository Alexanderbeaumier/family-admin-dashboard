// models/Allowance.js
const mongoose = require('mongoose');

const allowanceSchema = new mongoose.Schema({
  familyMember: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Allowance', allowanceSchema);
