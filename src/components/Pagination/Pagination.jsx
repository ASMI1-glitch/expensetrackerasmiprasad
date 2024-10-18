import styles from './Pagination.module.css';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function Pagination({ updatePage, currentPage, totalPages }) {

    const handlePrev = () => {
        if (currentPage > 1) {
            updatePage(prevPage => prevPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) { // Simplified condition check
            updatePage(prevPage => prevPage + 1);
        }
    };

    return (
        <div className={styles.paginationContainer}> {/* Changed class name for clarity */}
            <button onClick={handlePrev} disabled={currentPage === 1} className={styles.paginationButton}>
                <IoIosArrowRoundBack />
            </button>
            <span className={styles.pageNumber}>{currentPage}</span> {/* Changed to span for better semantics */}
            <button onClick={handleNext} disabled={currentPage === totalPages} className={styles.paginationButton}>
                <IoIosArrowRoundForward />
            </button>
        </div>
    );
}
