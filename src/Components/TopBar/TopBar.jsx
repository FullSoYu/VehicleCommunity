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
            <span>
              뉴스
              <ul>
                <li>
                  <a href="/">
                    <span>최신뉴스</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>신차뉴스</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>업계소식</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>월드뉴스</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>프리뷰</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>테크리뷰</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>라이프 스타일</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>칼럼</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>자동차 구조</span>
                  </a>
                </li>
              </ul>
            </span>
          </a>
        </div>
        <div className="Topbar_Purchaseguide_Box TopBar_Menu_Common_Style">
          <a href="/">
            <span>
              구매가이드
              <ul>
                <li>
                  <a href="/">
                    <span>시승기</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>월간 프로모션</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>판매량</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>리콜 정보</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>오토뷰 랭킹</span>
                  </a>
                </li>
              </ul>
            </span>
          </a>
        </div>
        <div className="TopBar_Community_Box TopBar_Menu_Common_Style">
          <a href="/">
            <span>
              커뮤니티
              <ul>
                <li>
                  <a href="/">
                    <span>오토뷰 에피소드</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>차량 구입 & 타이어 QnA</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>내 차를 소개합니다</span>
                  </a>
                </li>
              </ul>
            </span>
          </a>
        </div>
        <div className="TopBar_Tire_Box TopBar_Menu_Common_Style">
          <a href="/">
            <span>
              타이어
              <ul>
                <li>
                  <a href="/">
                    <span>타이어 리뷰</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>타이어 뉴스</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>오토뷰 추천 타이어</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>인치업 계산기</span>
                  </a>
                </li>
              </ul>
            </span>
          </a>
        </div>
        <div className="TopBar_Search_Box TopBar_Menu_Common_Style">
          <a href="/">
            <img
              src="https://www.autoview.co.kr/img/common/ico_srch.png"
              alt=""
            />
          </a>
        </div>
        <div className="TopBar_SignupOrLogin_BOX TopBar_Menu_Common_Style">
          <a href="/">
            <span>
              <img
                src="https://www.autoview.co.kr/img/common/ico_logout.png"
                alt=""
              />
            </span>
          </a>
        </div>
      </div>
      <div className="testhoverbox">
        <div className="testhover">text hover</div>
      </div>
    </div>
  );
};

export default TopBar;
