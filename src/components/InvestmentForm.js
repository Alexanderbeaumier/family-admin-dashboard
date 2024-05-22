import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

const InvestmentForm = () => {
  const [ticker, setTicker] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [currentPrice, setCurrentPrice] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/investments', { ticker, quantity, purchasePrice });
    setTicker('');
    setQuantity('');
    setPurchasePrice('');
    setCurrentPrice(null);
  };

  const fetchCurrentPrice = async (ticker) => {
    try {
      const response = await axios.get(`/api/investments/price/${ticker}`);
      setCurrentPrice(response.data.price);
    } catch (error) {
      console.error('Error fetching current price:', error);
      setCurrentPrice(null);
    }
  };

  const handleTickerChange = (e) => {
    const newTicker = e.target.value;
    setTicker(newTicker);
    if (newTicker.length >= 1) {
      fetchCurrentPrice(newTicker);
    } else {
      setCurrentPrice(null);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Ticker"
        value={ticker}
        onChange={handleTickerChange}
        required
      />
      {currentPrice !== null && (
        <Typography variant="body1">
          Current Price: ${currentPrice}
        </Typography>
      )}
      <TextField
        label="Quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <TextField
        label="Purchase Price"
        type="number"
        value={purchasePrice}
        onChange={(e) => setPurchasePrice(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">Add Investment</Button>
    </Box>
  );
};

export default InvestmentForm;
