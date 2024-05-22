import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const AllowanceForm = () => {
  const [familyMember, setFamilyMember] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/allowances', { familyMember, amount, date });
    setFamilyMember('');
    setAmount('');
    setDate('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Family Member"
        value={familyMember}
        onChange={(e) => setFamilyMember(e.target.value)}
        required
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
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
      <Button type="submit" variant="contained" color="primary">Add Allowance</Button>
    </Box>
  );
};

export default AllowanceForm;
