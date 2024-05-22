import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';

const HomePage = () => {
  const [summary, setSummary] = useState({
    tasks: 0,
    investments: 0,
    allowances: 0,
    events: 0,
    meals: 0,
    groceryList: [],
  });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const [tasksRes, investmentsRes, allowancesRes, eventsRes, mealsRes] = await Promise.all([
          axios.get('/api/tasks'),
          axios.get('/api/investments'),
          axios.get('/api/allowances'),
          axios.get('/api/calendar'),
          axios.get('/api/meals'),
        ]);

        const groceryList = mealsRes.data.reduce((list, meal) => {
          return list.concat(meal.ingredients);
        }, []);

        setSummary({
          tasks: tasksRes.data.length,
          investments: investmentsRes.data.length,
          allowances: allowancesRes.data.length,
          events: eventsRes.data.length,
          meals: mealsRes.data.length,
          groceryList: Array.from(new Set(groceryList)), // Remove duplicates
        });
      } catch (error) {
        console.error('Error fetching summary:', error);
      }
    };

    fetchSummary();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Family Admin Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Tasks</Typography>
          <Typography variant="body1">Total Tasks: {summary.tasks}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Investments</Typography>
          <Typography variant="body1">Total Investments: {summary.investments}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Allowances</Typography>
          <Typography variant="body1">Total Allowances: {summary.allowances}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Calendar Events</Typography>
          <Typography variant="body1">Total Events: {summary.events}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Meals</Typography>
          <Typography variant="body1">Total Meals: {summary.meals}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Grocery List</Typography>
          <ul>
            {summary.groceryList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
