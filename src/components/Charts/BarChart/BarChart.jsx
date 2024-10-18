import React from 'react';
import { Bar } from 'react-chartjs-2';

const ExpenseBarChart = ({ categorySpends }) => {
  const data = {
    labels: Object.keys(categorySpends),
    datasets: [
      {
        label: 'Expenses by Category',
        data: Object.values(categorySpends),
        backgroundColor: [
          '#FF6384', // Food
          '#36A2EB', // Entertainment
          '#FFCE56', // Travel
          '#4BC0C0', // Health
          '#9966FF', // Utilities
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Expenses Overview</h2>
      <Bar data={data} />
    </div>
  );
};

export default ExpenseBarChart;
