import React from "react";

const Modal = ({ closeModal, handleDelete, header, title }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title">
          <img
            src="./cancel.png"
            alt="cancel icon"
            onClick={closeModal}
            className="close-btn"
          /> 
          <h2>{header}</h2>
          <p>{title}</p>
        </div>
        <div className="footer">
          <button className="cancel-btn"  onClick={closeModal}>
            Xeyr
          </button>
          <button className="confirm-btn" onClick={handleDelete}>
            Bəli
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
