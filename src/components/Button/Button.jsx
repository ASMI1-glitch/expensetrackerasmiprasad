import styles from "./Button.module.css";

export default function CustomButton({
  children,
  onClickHandler,  // Renamed to make it unique
  type = "button",  // Default remains same
  buttonStyle = "primary",  // Renamed for uniqueness
  hasShadow = false,  // Renamed to avoid duplication
}) {
  const buttonClasses = `${styles.button} ${styles[buttonStyle]} ${
    hasShadow ? styles.shadow : ""
  }`;

  return (
    <button
      type={type}
      onClick={onClickHandler}  // Using renamed prop
      className={buttonClasses}  // Cleaner class names handling
    >
      {children}
    </button>
  );
}
