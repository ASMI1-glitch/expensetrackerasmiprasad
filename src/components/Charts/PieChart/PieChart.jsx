import React from 'react';
import { Pie } from 'react-chartjs-2';

const ExpensePieChart = ({ categorySpends }) => {
  const data = {
    labels: Object.keys(categorySpends),
    datasets: [
      {
        data: Object.values(categorySpends),
        backgroundColor: [
          '#FF6384', // Food
          '#36A2EB', // Entertainment
          '#FFCE56', // Travel
          '#4BC0C0', // Health
          '#9966FF', // Utilities
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Expense Distribution by Category</h2>
      <Pie data={data} />
    </div>
  );
};

export default ExpensePieChart;
