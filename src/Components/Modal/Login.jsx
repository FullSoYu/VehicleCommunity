import React from "react";
import "../../Style/Modal/Login.scss";

function Login({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="Login_Modal_Box">
      {/* 모달창의 백그라운드 이미지 */}
      {/* <div className="Background_img_box">
        <img
          src="https://files.porsche.com/filestore/news/international-de/none/582761/headimage4/cc7e9593-5d35-11ea-80c8-005056bbdc38/Definitely-911%2c-definitely-Turbo%2c-definitely-new-Porsche-911-Turbo-S.jpg"
          alt=""
        />
      </div> */}
      {/* ID & Password 입력 창 */}
      <div className="Login_Input_Box">
        <div className="Login_Input_Box_Title">
          <img src="https://ifh.cc/g/74JzFs.png" onClick={closeModal} alt="" />
        </div>
        <div className="Con_Login_Input_Box">
          <div className="Login_Id_Input_Box Login_Box_Common_Style">
            <input
              type="id"
              className="Login_Box_Input_Common_Style"
              placeholder="아이디"
            />
          </div>
          <div className="Login_Password_Input_Box Login_Box_Common_style">
            <input
              className="Login_Box_Input_Common_Style"
              type="passwrod"
              placeholder="비밀번호"
            />
          </div>
        </div>
      </div>
      <div className="Con_Login_Button">
        <button type="submit" className="Login_Button">
          로그인
        </button>
      </div>
      <div className="Con_Etc_Box">
        <div className="Find_Id_Box Content_Etc_Common_Style">아이디 찾기</div>
        <div className="Content_Etc_Common_Style">|</div>
        <div className="Content_Etc_Common_Style">비밀번호 찾기</div>
        <div className="Content_Etc_Common_Style">|</div>
        <div className="Content_Etc_Common_Style">회원가입</div>
      </div>
      <div className="Login_Sns_Title_Area">
        <strong>간편하게 시작하기</strong>
        <br />
        <div>네이버</div>
        <div>카카오</div>
        <div>구글</div>
        <div>애플</div>
        <p>공용 PC에서는 소셜로그인 시 계정 관리에 유의해주세요.</p>
      </div>
    </div>
  );
}

export default Login;
