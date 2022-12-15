import React, { useRef, useEffect } from "react";
import "../../Style/Modal/Login.scss";
function Login({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="Login_Modal_Box">
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
        <div className="Sns_Icons_Box">
          <button className="Sns_Button_Common_Style">
            <div className="Sns_Icons_Naver Sns_Icons_Common_Style"></div>네이버
          </button>
          <button className="Sns_Button_Common_Style">
            <div className="Sns_Icons_Kakao Sns_Icons_Common_Style"></div>카카오
          </button>
          <button className="Sns_Button_Common_Style">
            <div className="Sns_Icons_Google Sns_Icons_Common_Style"></div>구글
          </button>
          <button className="Sns_Button_Common_Style">
            <div className="Sns_Icons_Apple Sns_Icons_Common_Style"></div>애플
          </button>
        </div>
        <p>공용 PC에서는 소셜로그인 시 계정 관리에 유의해주세요.</p>
      </div>
      <p className="Login_Box_Footer">ⓒ Vehicle Community</p>
    </div>
  );
}

export default Login;
