import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/AddPostModal.scss'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
