import TransactionCard from "../TransactionCard/TransactionCard";
import styles from "./TransactionList.module.css";
import Modal from "../../Modal/Modal";
import ExpenseForm from "../../Forms/ExpenseForm/ExpenseForm";
import { useEffect, useState } from "react";
import Pagination from "../../Pagination/Pagination";

export default function TransactionList({
  transactions,
  title,
  updateTransactions,
  currentBalance,
  setCurrentBalance,
}) {
  const [editableTransactionId, setEditableTransactionId] = useState(null);
  const [isEditorVisible, setIsEditorVisible] = useState(false);
  const [displayedTransactions, setDisplayedTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Changed variable name for clarity
  const [totalPages, setTotalPages] = useState(0);

  const handleDeleteTransaction = (id) => {
    const transactionToDelete = transactions.find((item) => item.id === id);
    if (transactionToDelete) {
      const price = Number(transactionToDelete.price);
      setCurrentBalance((prevBalance) => prevBalance + price);
      updateTransactions((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleEditTransaction = (id) => {
    setEditableTransactionId(id);
    setIsEditorVisible(true);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(currentPage * itemsPerPage, transactions.length);

    setDisplayedTransactions(transactions.slice(startIndex, endIndex));
    setTotalPages(Math.ceil(transactions.length / itemsPerPage));
  }, [currentPage, transactions]);

  useEffect(() => {
    if (totalPages < currentPage && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }, [totalPages, currentPage]);

  return (
    <div className={styles.transactionsContainer}>
      {title && <h2 className={styles.title}>{title}</h2>} {/* Added styling class */}

      {transactions.length > 0 ? (
        <div className={styles.transactionList}>
          <div>
            {displayedTransactions.map((transaction) => (
              <TransactionCard
                details={transaction}
                key={transaction.id}
                handleDelete={() => handleDeleteTransaction(transaction.id)}
                handleEdit={() => handleEditTransaction(transaction.id)}
              />
            ))}
          </div>
          {totalPages > 1 && (
            <Pagination
              updatePage={setCurrentPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          )}
        </div>
      ) : (
        <div className={styles.noTransactions}>
          <p>No transactions found!</p> {/* Updated text for clarity */}
        </div>
      )}

      <Modal isOpen={isEditorVisible} setIsOpen={setIsEditorVisible}>
        <ExpenseForm
          editId={editableTransactionId}
          expenseList={transactions}
          setExpenseList={updateTransactions}
          setIsOpen={setIsEditorVisible}
          balance={currentBalance}
          setBalance={setCurrentBalance}
        />
      </Modal>
    </div>
  );
}
