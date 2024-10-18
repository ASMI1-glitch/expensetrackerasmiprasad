import styles from "./AddBalanceForm.module.css";
import CustomButton from "./../../Button/Button"; // Updated import for renamed Button component
import { useState } from "react";
import { useSnackbar } from "notistack";

export default function BalanceForm({ closeForm, updateBalance }) { // Renamed props for clarity and uniqueness
  const [incomeValue, setIncomeValue] = useState(""); // Renamed state for uniqueness
  const { enqueueSnackbar } = useSnackbar();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (Number(incomeValue) < 0) {
      enqueueSnackbar("Income should be greater than 0", {
        variant: "warning",
      });
      closeForm(false);  // Synchronized with renamed prop
      return;
    }

    updateBalance((prev) => prev + Number(incomeValue)); // Synchronized with renamed prop
    closeForm(false); // Close form on success
  };

  return (
    <div className={styles.formContainer}> {/* Renamed class for clarity */}
      <h3>Add Income</h3>
      <form onSubmit={handleFormSubmit}> {/* Synchronized with renamed function */}
        <input
          type="number"
          placeholder="Enter Amount"
          value={incomeValue} // Updated with renamed state
          onChange={(e) => setIncomeValue(e.target.value)} // Updated onChange handler
          required
        />
        <CustomButton type="submit" buttonStyle="primary" hasShadow> {/* Synced with new Button component */}
          Add Balance
        </CustomButton>
        <CustomButton buttonStyle="secondary" hasShadow onClickHandler={() => closeForm(false)}> {/* Synced with new Button component */}
          Cancel
        </CustomButton>
      </form>
    </div>
  );
}
