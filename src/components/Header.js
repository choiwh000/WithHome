import { useState } from "react";
import styles from "./Header.module.css";


function Header() {
  const [hover, setHover] = useState(false);

  

  function onSubmit(e) {
    e.preventDefault();
    e.target[0].value = "";
  }

  function onMouseEnter(e) {
    setHover(true);
  }

  function onMouseLeave(e) {
    setHover(false);
  }

  return (
    <header>
      <div id={styles.header_back}>
        <div className={styles.header}>
          <ul className={styles.nv}>
            <ul className={styles.nv_logo}>
              <p>Logo</p>
            </ul>
            <ul className={styles.nv_menu}>
              <li>로그인</li>
              <li>회원가입</li>
              <li>주문조회</li>
              <li>마이페이지</li>
              <li>장바구니</li>
              <li>
                <form onSubmit={onSubmit}>
                  <input id={styles.search} type="text"></input>
                </form>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className={styles.mnv_box}>
        <div className={styles.mnv}>
          <ul className={styles.mnv_menu}>
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              전체메뉴
            </li>
            <li>신상품</li>
            <li>기획전</li>
            <li>가구</li>
            <li>패브릭</li>
            <li>홈데코</li>
            <li>키친</li>
            <li>리퍼브샵</li>
            <li>이벤트</li>
            <li>커뮤니티</li>
          </ul>
        </div>
      </div>
      <div
        className={styles.menu_container}
        id={hover ? styles.hover : null}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div id={styles.menu_back}></div>
        <div className={styles.box}>
          <ul>
            <li id={styles.bold}>신상품</li>
            <li>신상품 5%</li>
          </ul>
          <ul>
            <li id={styles.bold}>가구</li>
            <li>주방수납장</li>
            <li>식탁/의자</li>
            <li>소파</li>
            <li>테이블/수납장</li>
          </ul>
          <ul>
            <li id={styles.bold}>패브릭</li>
            <li>차렵침구</li>
            <li>사계절 침구 커버</li>
            <li>여름침구/블랭킷</li>
            <li>커튼/바란스</li>
            <li>쿠션커버</li>
            <li>발매트/주방매트</li>
            <li>거실러그/카페트</li>
            <li>쿠션솜/이불솜</li>
            <li>패브릭소품</li>
          </ul>
          <ul>
            <li id={styles.bold}>홈데코</li>
            <li>조화/화병</li>
            <li>마크라메/드림캐쳐</li>
            <li>단스탠드/조명</li>
            <li>액자/거울/시계</li>
            <li>인테리어소품</li>
            <li>라탄소품</li>
            <li>피크닉소품</li>
          </ul>
          <ul>
            <li id={styles.bold}>키친</li>
            <li>식기</li>
            <li>유리잔/컵</li>
            <li>트레이/도마</li>
            <li>커트러리/조리도구</li>
            <li>테이블보/앞치마</li>
          </ul>
          <ul>
            <li id={styles.bold}>커뮤니티</li>
            <li>공지사항</li>
            <li>개인결제</li>
            <li>제품문의</li>
            <li>고객후기</li>
          </ul>
          <ul>
            <li id={styles.bold}>이벤트/기획전</li>
            <li>기획전</li>
            <li>이벤트</li>
          </ul>
          <ul>
            <li id={styles.bold}>리퍼브샵</li>
            <li>리퍼브샵</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
