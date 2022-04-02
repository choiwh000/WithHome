import styles from "./Main_contents_2.module.css";
import { useState } from "react";
import useInterval from "use-interval";

function Main_contents_2() {
  const [current, setCurrent] = useState(0);

  const TOTAL_IMG = 4;

  useInterval(() => {
    if (current === (TOTAL_IMG - 1) * 100) {
      setCurrent(0);
    } else {
      setCurrent(current + 100);
    }
  }, 5000);

  function onClick(e) {
    const number = e.target.id;
    if (number === "Main_contents_2_one__NnxOP") {
      setCurrent(0);
    } else if (number === "Main_contents_2_two__BsnPA") {
      setCurrent(100);
    } else if (number === "Main_contents_2_three__I9nu7") {
      setCurrent(200);
    } else if (number === "Main_contents_2_four__Hd7ik") {
      setCurrent(300);
    }
  }

  return (
    <div>
      <div className={styles.second_grid}>
        <div className={styles.grid_container}>
          <h1>
            달콤하고 완변한 <br />
            <span>플레이팅</span>
          </h1>
          <p>
            <br />
            식탁보 하나면
            <br />
            멋스러운 플레이팅이 완성
          </p>
        </div>
        <div className={styles.grid_container}>
          <div id={styles.left_dec}>
            <h1>
              국내제작
              <br />
              <span>원목 주방가구</span>
            </h1>
            <hr style={{ width: `20px`, margin: `40px 0 15px 0` }} />
            <p>
              한정수량! 주방가구 특가전
              <br />
              최대 ~65% 할인
            </p>
          </div>
          <div id={styles.right_img}></div>
        </div>
        <div className={styles.grid_container}>
          <div id={styles.hover_dec}>
            <p>
              블루밍 린넨
              <br />
              테이블보
            </p>
            <p>2color</p>
          </div>
        </div>
        <div className={styles.grid_container}>
          <div id={styles.hover_dec}>
            <p>
              선데이 체크
              <br />
              방수 테이블보
            </p>
            <p>4color</p>
          </div>
        </div>
        <div className={styles.grid_container}>
          <div id={styles.hover_dec}>
            <p>
              베어 체커보드
              <br />
              테이블보
            </p>
            <p>5color</p>
          </div>
        </div>
        <div className={styles.grid_container}>
          <div>
            <img
              src={require("../img/middle_banner3_r_01.jpg")}
              style={{
                width: `100%`,
                height: `100%`,
                cursor: "pointer",
                transform: `translateX(-${current}%)`,
              }}
              alt=''
            />
            <img
              src={require("../img/middle_banner3_r_02.jpg")}
              style={{
                width: `100%`,
                height: `100%`,
                cursor: "pointer",
                transform: `translateX(-${current}%)`,
              }}
              alt=''
            />
            <img
              src={require("../img/middle_banner3_r_03.jpg")}
              style={{
                width: `100%`,
                height: `100%`,
                cursor: "pointer",
                transform: `translateX(-${current}%)`,
              }}
              alt=''
            />
            <img
              src={require("../img/middle_banner3_r_05.jpg")}
              style={{
                width: `100%`,
                height: `100%`,
                cursor: "pointer",
                transform: `translateX(-${current}%)`,
              }}
              alt=''
            />
          </div>
        </div>
      </div>
      <div className={styles.dot_container}>
        <div className={styles.slide_dot}>
          <div
            onClick={onClick}
            id={current === 0 ? styles.gangjo : styles.one}
          ></div>
          <div
            onClick={onClick}
            id={current === 100 ? styles.gangjo : styles.two}
          ></div>
          <div
            onClick={onClick}
            id={current === 200 ? styles.gangjo : styles.three}
          ></div>
          <div
            onClick={onClick}
            id={current === 300 ? styles.gangjo : styles.four}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Main_contents_2;
