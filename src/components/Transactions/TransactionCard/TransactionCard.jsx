import styles from "./TransactionCard.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { PiPizza, PiGift } from "react-icons/pi";
import { MdOutlineModeEdit } from "react-icons/md";
import { BsSuitcase2 } from "react-icons/bs";

export default function TransactionCard({ transactionDetails, onDelete, onEdit }) { // Updated prop names for consistency
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardIcon}>
          {transactionDetails.category === "food" && <PiPizza />}
          {transactionDetails.category === "entertainment" && <PiGift />}
          {transactionDetails.category === "travel" && <BsSuitcase2 />}
        </div>
        <div className={styles.cardInfo}>
          <h5>{transactionDetails.title}</h5>
          <p>{transactionDetails.date}</p>
        </div>
      </div>
      <div className={styles.cardInner}>
        <p className={styles.cardPrice}>{`₹${transactionDetails.price}`}</p>
        <div className={styles.cardButtonWrapper}>
          <button className={styles.cardDelete} onClick={onDelete} aria-label="Delete Transaction"> {/* Added aria-label for accessibility */}
            <IoMdCloseCircleOutline />
          </button>
          <button className={styles.cardEdit} onClick={onEdit} aria-label="Edit Transaction"> {/* Added aria-label for accessibility */}
            <MdOutlineModeEdit />
          </button>
        </div>
      </div>
    </div>
  );
}
