const express = require('express');
const router = express.Router();
const Investment = require('../models/Investment');
const axios = require('axios');

// Hardcode the API key (this is not recommended for production)
const apiKey = 'YOUR_API_KEY';  // Replace 'YOUR_API_KEY' with your actual Alpha Vantage API key

// Add new investment
router.post('/', async (req, res) => {
  const { ticker, quantity, purchasePrice } = req.body;
  const newInvestment = new Investment({ ticker, quantity, purchasePrice });
  await newInvestment.save();
  res.status(201).json(newInvestment);
});

// Get all investments
router.get('/', async (req, res) => {
  const investments = await Investment.find();
  res.json(investments);
});

// Get stock price
router.get('/price/:ticker', async (req, res) => {
  const { ticker } = req.params;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${apiKey}`);
    const price = response.data['Global Quote']['05. price'];
    res.json({ ticker, price });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching stock price' });
  }
});

// Update an investment
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedInvestment = await Investment.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedInvestment);
});

// Delete an investment
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Investment.findByIdAndDelete(id);
  res.status(204).send();
});

module.exports = router;
