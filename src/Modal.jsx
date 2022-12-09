import React from "react";
import "./Style/Modal.scss";

const Modal = ({ modalClose }) => {
  const onCloseModal = (e) => {
    console.log("e.target: ", e.target);
    console.log("e.tarcurrentTarget: ", e.tarcurrentTarget);
    if (e.target === e.tarcurrentTarget) {
      modalClose();
    }
  };

  return (
    <div className="modal__container" onClick={onCloseModal}>
      <div className="modal">
        <button className="modal__button" onClick={modalClose}>
          Modal Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
