import styles from './Pagination.module.css';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function Pagination({ onPageChange, currentPage, totalPages }) { // Renamed prop for consistency

    const handlePrevPage = () => { // Updated function name for clarity
        if (currentPage > 1) {
            onPageChange(prevPage => prevPage - 1); // Using the new prop name
        }
    };

    const handleNextPage = () => { // Updated function name for clarity
        if (currentPage < totalPages) {
            onPageChange(prevPage => prevPage + 1); // Using the new prop name
        }
    };

    return (
        <div className={styles.paginationContainer}> {/* Class name remains for clarity */}
            <button onClick={handlePrevPage} disabled={currentPage === 1} className={styles.paginationButton}>
                <IoIosArrowRoundBack />
            </button>
            <span className={styles.pageNumber}>{currentPage}</span> {/* Semantically appropriate */}
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className={styles.paginationButton}>
                <IoIosArrowRoundForward />
            </button>
        </div>
    );
}
