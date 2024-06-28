import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    // Check if the click is on the backdrop
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleBackdropClick} className="fixed inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-white rounded-lg shadow-xl transform transition-all max-w-lg w-full animate-slide-up">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
