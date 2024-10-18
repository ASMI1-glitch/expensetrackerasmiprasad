import React, { useState } from "react";

export default function ExpenseForm({ setIsOpen, setExpenseList }) {
  const [expense, setExpense] = useState({ price: "", category: "food" });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenseList((prev) => [...prev, expense]);
    setIsOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="price"
        value={expense.price}
        onChange={handleChange}
        placeholder="Enter expense amount"
        required
      />
      <select
        name="category"
        value={expense.category}
        onChange={handleChange}
        required
      >
        <option value="food">Food</option>
        <option value="entertainment">Entertainment</option>
        <option value="travel">Travel</option>
        <option value="health">Health</option>  {/* New category option */}
        <option value="utilities">Utilities</option> {/* New category option */}
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}
