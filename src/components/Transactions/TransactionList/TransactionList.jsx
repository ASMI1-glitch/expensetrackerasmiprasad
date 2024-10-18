import React from "react";

export default function TransactionList({ transactions }) {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.category}: ${transaction.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
