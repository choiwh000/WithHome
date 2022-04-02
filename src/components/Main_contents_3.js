import styles from "./Main_contents_3.module.css";
import { useState } from "react";
import useInterval from "use-interval";

function Main_contents_3() {
  const [current, setCurrent] = useState(0);

  const TOTAL_IMG = 4;

  useInterval(() => {
    if (current === (TOTAL_IMG - 1) * 110) {
      setCurrent(0);
    } else {
      setCurrent(current + 110);
    }
  }, 5000);


  function handleClick(e) {
    const number = e.target.id;
    if (number === "Main_contents_3_one__tfuds") {
      setCurrent(0);
    } else if (number === "Main_contents_3_two__KP2Km") {
      setCurrent(110);
    } else if (number === "Main_contents_3_three__WjRgo") {
      setCurrent(220);
    } else if (number === "Main_contents_3_four__y6fCs") {
      setCurrent(330);
    }
  }

  return (
    <div className={styles.main_3}>
      <div>
        <div className={styles.main_3_container}>
          <div className={styles.hash}>
            <h1>
              MD's<span> pick</span>
            </h1>
            <hr style={{ margin: `30px 0 10px 0`, width: "16px" }} />
            <p>
              믿을 수 있는 포홈 MD의
              <br />
              추천상품
            </p>
            <ul>
              <li>
                <p>#2인소파</p>
              </li>
              <li>
                <p>#원룸소파</p>
              </li>
              <li>
                <p>#거실소파</p>
              </li>
              <li>
                <p>#원룸꾸미기</p>
              </li>
              <li>
                <p>#셀프인테리어</p>
              </li>
            </ul>
          </div>
          <div className={styles.main_3_slide}>
            <div style={{ transform: `translateX(-${current}%)` }}>
              <img src={require("../img/mds_001.jpg")} alt="" />
            </div>
            <div style={{ transform: `translateX(-${current}%)` }}>
              <img src={require("../img/mds_003.jpg")} alt="" />
            </div>
            <div style={{ transform: `translateX(-${current}%)` }}>
              <img src={require("../img/mds_004.jpg")} alt="" />
            </div>
            <div style={{ transform: `translateX(-${current}%)` }}>
              <img src={require("../img/mds_002.jpg")} alt="" />
            </div>
            <div style={{ transform: `translateX(-${current}%)` }}>
              <img src={require("../img/mds_005.jpg")} alt="" />
            </div>
            <div style={{ transform: `translateX(-${current}%)` }}>
              <img src={require("../img/mds_006.jpg")} alt="" />
            </div>
            <div style={{ transform: `translateX(-${current}%)` }}>
              <img src={require("../img/mds_007.jpg")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main_3_dot}>
        <div id={current === 0 ? styles.gangjo : styles.one} onClick={handleClick}></div>
        <div id={current === 110 ? styles.gangjo : styles.two}  onClick={handleClick}></div>
        <div id={current === 220 ? styles.gangjo : styles.three} onClick={handleClick}></div>
        <div id={current === 330 ? styles.gangjo : styles.four} onClick={handleClick}></div>
      </div>
    </div>
  );
}

export default Main_contents_3;
