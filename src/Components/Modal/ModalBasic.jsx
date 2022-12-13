import React from "react";
import "../../Style/Modal/ModalBasic.scss";

function ModalBasic({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="Modal_Con">
      <button className="Modal_Close" onClick={closeModal}>
        X
      </button>
      <p>모달창입니다.</p>
    </div>
  );
}

export default ModalBasic;
