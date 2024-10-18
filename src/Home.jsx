import React, { useState, useEffect } from "react";
import AddBalanceForm from "./components/Forms/AddBalanceForm/AddBalanceForm";
import ExpenseForm from "./components/Forms/ExpenseForm/ExpenseForm";
import TransactionList from "./components/Transactions/TransactionList/TransactionList";
import ExpensePieChart from "./components/Charts/PieChart/PieChart";
import ExpenseBarChart from "./components/Charts/BarChart/BarChart";
import Modal from "./components/Modal/Modal";
import Card from "./components/Card/Card";
import styles from "./Home.module.css";

export default function Home() {
  const [balance, setBalance] = useState(5000); // Initialize balance to 5000
  const [expense, setExpense] = useState(0);
  const [expenseList, setExpenseList] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  // Show/hide modals
  const [isOpenExpense, setIsOpenExpense] = useState(false);
  const [isOpenBalance, setIsOpenBalance] = useState(false);

  const [categorySpends, setCategorySpends] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
    health: 0, // New category
    utilities: 0, // New category
  });

  // eslint-disable-next-line
  const [categoryCount, setCategoryCount] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
    health: 0, // New category count
    utilities: 0, // New category count
  });

  useEffect(() => {
    // Check localStorage for the balance
    const localBalance = localStorage.getItem("balance");

    if (localBalance) {
      // Set balance from localStorage
      setBalance(Number(localBalance)); // Convert string to number
    } else {
      // Initial default balance
      localStorage.setItem("balance", balance.toString()); // Store as string
    }
  }, [balance]); // Update when the balance changes

  // Saving expense list in localStorage
  useEffect(() => {
    if (expenseList.length > 0 || isMounted) {
      localStorage.setItem("expenses", JSON.stringify(expenseList));
    }

    if (expenseList.length > 0) {
      setExpense(
        expenseList.reduce(
          (accumulator, currentValue) =>
            accumulator + Number(currentValue.price),
          0
        )
      );
    } else {
      setExpense(0);
    }

    // Initialize spends and counts for each category
    let foodSpends = 0,
      entertainmentSpends = 0,
      travelSpends = 0,
      healthSpends = 0, // New category
      utilitiesSpends = 0; // New category

    let foodCount = 0,
      entertainmentCount = 0,
      travelCount = 0,
      healthCount = 0, // New category count
      utilitiesCount = 0; // New category count

    expenseList.forEach((item) => {
      if (item.category === "food") {
        foodSpends += Number(item.price);
        foodCount++;
      } else if (item.category === "entertainment") {
        entertainmentSpends += Number(item.price);
        entertainmentCount++;
      } else if (item.category === "travel") {
        travelSpends += Number(item.price);
        travelCount++;
      } else if (item.category === "health") { // New category
        healthSpends += Number(item.price);
        healthCount++;
      } else if (item.category === "utilities") { // New category
        utilitiesSpends += Number(item.price);
        utilitiesCount++;
      }
    });

    setCategorySpends({
      food: foodSpends,
      entertainment: entertainmentSpends,
      travel: travelSpends,
      health: healthSpends, // New category
      utilities: utilitiesSpends, // New category
    });

    setCategoryCount({
      food: foodCount,
      entertainment: entertainmentCount,
      travel: travelCount,
      health: healthCount, // New category count
      utilities: utilitiesCount, // New category count
    });
  }, [expenseList, isMounted]);

  // Saving balance in localStorage
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("balance", balance.toString()); // Ensure balance is saved as a string
    }
  }, [balance, isMounted]);

  return (
    <div className={styles.container}>
      <h1>Expense Tracker</h1>

      {/* Cards and pie chart wrapper */}
      <div className={styles.cardsWrapper}>
        <Card
          title="Wallet Balance"
          money={balance}
          buttonText="+ Add Income"
          buttonType="success"
          handleClick={() => {
            setIsOpenBalance(true);
          }}
        />

        <Card
          title="Expenses"
          money={expense}
          buttonText="+ Add Expense"
          buttonType="failure"
          success={false}
          handleClick={() => {
            setIsOpenExpense(true);
          }}
        />

        <ExpensePieChart
          data={[
            { name: "Food", value: categorySpends.food },
            { name: "Entertainment", value: categorySpends.entertainment },
            { name: "Travel", value: categorySpends.travel },
            { name: "Health", value: categorySpends.health }, // New category
            { name: "Utilities", value: categorySpends.utilities }, // New category
          ]}
        />
      </div>

      {/* Transactions and bar chart wrapper */}
      <div className={styles.transactionsWrapper}>
        <TransactionList
          transactions={expenseList}
          editTransactions={setExpenseList}
          title="Recent Transactions"
          balance={balance}
          setBalance={setBalance}
        />

        <ExpenseBarChart
          data={[
            { name: "Food", value: categorySpends.food },
            { name: "Entertainment", value: categorySpends.entertainment },
            { name: "Travel", value: categorySpends.travel },
            { name: "Health", value: categorySpends.health }, // New category
            { name: "Utilities", value: categorySpends.utilities }, // New category
          ]}
        />
      </div>

      {/* Modals */}
      <Modal isOpen={isOpenExpense} setIsOpen={setIsOpenExpense}>
        <ExpenseForm
          setIsOpen={setIsOpenExpense}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          setBalance={setBalance}
          balance={balance}
        />
      </Modal>

      <Modal isOpen={isOpenBalance} setIsOpen={setIsOpenBalance}>
        <AddBalanceForm setIsOpen={setIsOpenBalance} setBalance={setBalance} />
      </Modal>
    </div>
  );
}
