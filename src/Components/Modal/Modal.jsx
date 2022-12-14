import React, { useState } from "react";
import Login from "./Login";

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={showModal}>모달 띄우기</button>
      {modalOpen && <Login setModalOpen={setModalOpen} />}
    </div>
  );
}

export default Modal;
