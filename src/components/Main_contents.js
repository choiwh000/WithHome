import { useState, useEffect } from "react";
import styles from "./Main_contents.module.css";
import useInterval from "use-interval";

function Main_contents() {
  const [count, setCount] = useState(``);

  const time = new Date();
  const term = new Date(`2022-06-09`);

  let diff = term - time;
  const diffDays = Math.floor(
    (term.getTime() - time.getTime()) / (1000 * 60 * 60 * 24)
  );
  diff -= diffDays * (1000 * 60 * 60 * 24);
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  diff -= diffHours * (1000 * 60 * 60);
  const diffMin = Math.floor(diff / (1000 * 60));
  diff -= diffMin * (1000 * 60);
  const diffSec = Math.floor(diff / 1000);

  useInterval(() => {
    setCount(
      (count) =>
        `${String(diffDays).padStart(2, `0`)} : ${String(diffHours).padStart(
          2,
          `0`
        )} : ${String(diffMin).padStart(2, `0`)} : ${String(diffSec).padStart(
          2,
          `0`
        )}`
    );
  }, 1000);
  return (
    <div>
      <div className={styles.justOneDay}>
        <div>
          <img
            src={require("../img/justoneday2.png")}
            style={{ cursor: "pointer" }}
          ></img>
        </div>
        <div id={styles.line}>123</div>
        <div className={styles.dec}>
          <h1>
            금 토 일 주말에만
            <br />
            <span>JUST WEEKEND</span>
          </h1>
          <hr style={{ margin: `50px 0 20px 0`, width: `20px` }} />
          <p>
            감각적인 미드센츄리 스타일
            <br />
            베어 체커보드 테이블보 <span>16,000원</span>
          </p>
          <p id={styles.countdown}>{count}</p>
        </div>
      </div>
      <hr
        style={{
          width: `1280px`,
          margin: `auto auto 70px auto`,
          borderTop: `1px solid #999`,
          opacity: `0.5`,
        }}
      />
    </div>
  );
}

export default Main_contents;
