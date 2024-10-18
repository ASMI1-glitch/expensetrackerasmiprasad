import CustomButton from "./../Button/Button"; // Update import to reflect the renamed Button component
import styles from "./Card.module.css";

export default function InfoCard({
  title,
  amount,  // Renamed to avoid duplication and make it more descriptive
  buttonLabel,  // Renamed to match the new naming conventions
  buttonStyle,  // Synced with the new prop name for Button
  onButtonClick,  // Renamed for clarity and consistency
  isSuccess = true,  // Renamed to be clearer
}) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>
        {`${title}: `}
        <span className={isSuccess ? styles.success : styles.failure}>
          {`₹${amount}`}
        </span>
      </h3>
      <CustomButton onClickHandler={onButtonClick} buttonStyle={buttonStyle}>
        {buttonLabel}
      </CustomButton>
    </div>
  );
}
