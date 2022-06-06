import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div>logo</div>
        <div>
          <ul>
            <li>
              <p>회사소개</p>
            </li>
            <li>
              <p>|</p>
            </li>
            <li>
              <p>이용약관</p>
            </li>
            <li>
              <p>|</p>
            </li>
            <li>
              <p>개인정보처리방침</p>
            </li>
            <li>
              <p>|</p>
            </li>
            <li>
              <p>대량/제작문의</p>
            </li>
          </ul>

          <ul>
            <li>
              <p>상호 : 골든하비스트 코퍼레이션</p>
            </li>
            <li>
              <p>|</p>
            </li>
            <li>
              <p>이용약관</p>
            </li>
            <li>
              <p>|</p>
            </li>
            <li>
              <p>개인정보처리방침</p>
            </li>
            <li>
              <p>|</p>
            </li>
            <li>
              <p>대량/제작문의</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
