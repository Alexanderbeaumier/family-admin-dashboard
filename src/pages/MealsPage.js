// src/pages/MealsPage.js
import React from 'react';
import MealForm from '../components/MealForm';

const MealsPage = () => {
  return (
    <div className="page">
      <h1>Manage Meal Plans</h1>
      <MealForm />
    </div>
  );
};

export default MealsPage;
