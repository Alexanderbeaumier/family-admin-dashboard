// src/pages/AllowancesPage.js
import React from 'react';
import AllowanceForm from '../components/AllowanceForm';

const AllowancesPage = () => {
  return (
    <div className="page">
      <h1>Manage Allowances</h1>
      <AllowanceForm />
    </div>
  );
};

export default AllowancesPage;
