import { useState } from "react";
import styles from "./Slider.module.css";
import useInterval from "use-interval";

function Slider() {
  const [current, setCurrent] = useState(0);

  useInterval(() => {
    if (current === (TOTAL_IMG-1) * 100 ) {
      setCurrent(0);
    } else {
      setCurrent(current + 100);
    }
  }, 5000);

  function onGangjo(e) {
    const number = e.target.id;
    if (number === "Slider_a_dot__aKNhQ") {
      setCurrent(0);
    } else if (number === "Slider_b_dot__M9Vm4") {
      setCurrent(100);
    }
     else if (number === "Slider_c_dot__LnqMp") {
      setCurrent(200);
    }
     else if (number === "Slider_d_dot__f7Lzy") {
      setCurrent(300);
    }
     else if (number === "Slider_e_dot__6VblR") {
      setCurrent(400);
    }
     else if (number === "Slider_f_dot__RBs8X") {
      setCurrent(500);
    }
  }

  const TOTAL_IMG = 6;

  function NextClick() {
    if (current >= (TOTAL_IMG - 1) * 100) {
      setCurrent(0);
    } else {
      setCurrent((current) => current + 100);
    }
  }

  function PrevClick() {
    if (current === 0) {
      setCurrent((TOTAL_IMG - 1) * 100);
    } else {
      setCurrent((current) => current - 100);
    }
  }

  return (
    <div className={styles.slide_container}>
      <div className={styles.slider}>
        <div
          id={styles.slide_img}
          style={{ transform: `translateX(-${current}%)` }}
        ></div>
        <div
          id={styles.slide_img}
          style={{ transform: `translateX(-${current}%)` }}
        ></div>
        <div
          id={styles.slide_img}
          style={{ transform: `translateX(-${current}%)` }}
        ></div>
        <div
          id={styles.slide_img}
          style={{ transform: `translateX(-${current}%)` }}
        ></div>
        <div
          id={styles.slide_img}
          style={{ transform: `translateX(-${current}%)` }}
        ></div>
        <div
          id={styles.slide_img}
          style={{ transform: `translateX(-${current}%)` }}
        ></div>
      </div>
      <div className={styles.slider_dot}>
        <div
          className={styles.slide_dot}
          id={current === 0 ? styles.gangjo : styles.a_dot}
          onClick={onGangjo}
        ></div>
        <div
          className={styles.slide_dot}
          id={current === 100 ? styles.gangjo : styles.b_dot}
          onClick={onGangjo}
        ></div>
        <div
          className={styles.slide_dot}
          id={current === 200 ? styles.gangjo : styles.c_dot}
          onClick={onGangjo}
        ></div>
        <div
          className={styles.slide_dot}
          id={current === 300 ? styles.gangjo : styles.d_dot}
          onClick={onGangjo}
        ></div>
        <div
          className={styles.slide_dot}
          id={current === 400 ? styles.gangjo : styles.e_dot}
          onClick={onGangjo}
        ></div>
        <div
          className={styles.slide_dot}
          id={current === 500 ? styles.gangjo : styles.f_dot}
          onClick={onGangjo}
        ></div>
      </div>
      <button onClick={NextClick} id={styles.right_btn}>
        <img src={require("../img/main_next_bt_02.png")} />
      </button>
      <button onClick={PrevClick} id={styles.left_btn}>
        <img src={require("../img/main_next_bt_01.png")} />
      </button>
    </div>
  );
}

export default Slider;
