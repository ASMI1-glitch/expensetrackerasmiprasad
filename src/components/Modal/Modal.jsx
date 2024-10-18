import ReactModal from "react-modal";

// Set the app element for accessibility
ReactModal.setAppElement("#root");

const Modal = ({ isOpen, onClose, children }) => { // Renamed setIsOpen to onClose for clarity
  const customStyles = {
    content: {
      width: "90%", // Adjusted for better responsiveness
      maxWidth: "600px", // Slightly increased max width for better space utilization
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)", // Combined transformation for clarity
      maxHeight: "80vh", // Reduced max height for better viewport management
      overflowY: "auto", // Added overflow for scroll if content is too large
      backgroundColor: "rgba(255, 255, 255, 0.95)", // Slightly lighter background for better contrast
      border: "none",
      borderRadius: "12px", // Slightly adjusted radius for a subtler look
      padding: "20px", // Adjusted padding for consistency
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose} // Updated to use onClose for consistency
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      closeTimeoutMS={200} // Added transition timing for a smoother close effect
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
