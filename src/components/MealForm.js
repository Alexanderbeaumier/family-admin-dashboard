import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const MealForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ingredientsArray = ingredients.split(',').map(ingredient => ingredient.trim());
    await axios.post('/api/meals', { name, date, ingredients: ingredientsArray });
    setName('');
    setDate('');
    setIngredients('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Meal Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <TextField
        label="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">Add Meal</Button>
    </Box>
  );
};

export default MealForm;
