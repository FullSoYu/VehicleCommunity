import React from "react";
import "../../Style/TopBar/TopBar.scss";

const TopBar = () => {
  return (
    <div className="TopBar_Body_Box">
      <div className="TopBar_logo_Box">
        <img
          className="TopBar_logo_Box_Img"
          src="https://www.autoview.co.kr/img/logo.png"
          alt=""
        />
      </div>
      <div className="TopBar_Menu_Box">
        <div className="TopBar_News_Box TopBar_Menu_Common_Style">
          <a href="/">
            <span>뉴스</span>
          </a>
        </div>
        <div className="Topbar_Purchaseguide_Box TopBar_Menu_Common_Style">
          <a href="/">
            <span>구매가이드</span>
          </a>
        </div>
        <div className="TopBar_Community_Box TopBar_Menu_Common_Style">
          <a href="/">
            <span>커뮤니티</span>
          </a>
        </div>
        <div className="TopBar_Tire_Box TopBar_Menu_Common_Style">
          <a href="/">
            <span>타이어</span>
          </a>
        </div>
        <div className="TopBar_Search_Box TopBar_Menu_Common_Style">
          <a href="/">
            <span>서치</span>
          </a>
        </div>
        <div className="TopBar_SignupOrLogin_BOX TopBar_Menu_Common_Style">
          <a href="/">
            <span>
              <img
                src="https://www.autoview.co.kr/img/common/ico_srch.png"
                alt=""
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
