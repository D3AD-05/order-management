import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, body, footer }) => {
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h2>{title}</h2>
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
          </div>
          <div className="modal-body">{body}</div>
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    )
  );
};

export default Modal;