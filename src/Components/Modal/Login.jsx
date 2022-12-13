import React from "react";

function Login({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="Login_Modal_Box">
      <div className="Background_img_box">
        <img
          src="https://files.porsche.com/filestore/news/international-de/none/582761/headimage4/cc7e9593-5d35-11ea-80c8-005056bbdc38/Definitely-911%2c-definitely-Turbo%2c-definitely-new-Porsche-911-Turbo-S.jpg"
          alt=""
        />
      </div>
      <div className="Login_Input_Box"></div>
    </div>
  );
}

export default Login;
