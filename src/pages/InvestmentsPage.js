// src/pages/InvestmentsPage.js
import React from 'react';
import InvestmentForm from '../components/InvestmentForm';

const InvestmentsPage = () => {
  return (
    <div className="page">
      <h1>Manage Investments</h1>
      <InvestmentForm />
    </div>
  );
};

export default InvestmentsPage;
