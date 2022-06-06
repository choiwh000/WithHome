import styles from "./Sub_contents.module.css";
import { useState, useEffect } from "react";
import Product from "./Product";

function Sub_contents({ title }) {
  const [product, setProduct] = useState([]);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    setProduct([
      {
        id: `콤보 2인 패브릭 소파`,
        key: `${Math.random()*100}`,
        price: `275,000원`,
        sale: `199,000원`,
        per: `28%`,
        color: [`#ece7d6`, `#a6a6a6`],
        img: `http://www.forhome.co.kr/shopimages/forhome/1190040000013.jpg?1648704023`,
        keyword: [
          `http://www.forhome.co.kr/shopimages/forhome/prod_icons/3885?1619495540`,
          `http://www.forhome.co.kr/shopimages/forhome/prod_icons/3973?1642464999`,
        ],
      },
      {
        id: `선데이 체크 거실 커튼`,
        key: `${Math.random()*100}`,
        price: `62,000원`,
        sale: `49,600원`,
        per: `20%`,
        color: [`#edada1`, `#ffeb7f`, `#3b618e`, `#635552`],
        img: `http://www.forhome.co.kr/shopimages/forhome/1210030003503.jpg?1648623616`,
        keyword: [
          `http://www.forhome.co.kr/shopimages/forhome/prod_icons/3885?1619495540`,
          `http://www.forhome.co.kr/shopimages/forhome/prod_icons/3889?1617932854`,
          `http://www.forhome.co.kr/shopimages/forhome/prod_icons/3973?1642464999`,
        ],
      },
      {
        id: `내추럴 무드 거실 커튼`,
        key: `${Math.random()*100}`,
        price: `55,000원`,
        sale: `44,000원`,
        per: `20%`,
        color: [`#f2eee8`, `#ece7d6`, `#c6dbe7`, `#e4a2bc`],
        img: `http://www.forhome.co.kr/shopimages/forhome/1210030003493.jpg?1648443797`,
        keyword: [
          `http://www.forhome.co.kr/shopimages/forhome/prod_icons/3885?1619495540`,
          `http://www.forhome.co.kr/shopimages/forhome/prod_icons/3889?1617932854`,
          `http://www.forhome.co.kr/shopimages/forhome/prod_icons/3973?1642464999`,
        ],
      },
      {
        id: `라니잔꽃 테이블보`,
        key: `${Math.random()*100}`,
        price: `35,000원`,
        sale: `28,000원`,
        per: `20%`,
        color: [`#f4cec9`, `#feefb9`, `#d0c9f2`],
        img: `http://www.forhome.co.kr/shopimages/forhome/1230070000703.jpg?1648099653`,
        keyword: [
          `http://www.forhome.co.kr/shopimages/forhome/prod_icons/3885?1619495540`,
          `http://www.forhome.co.kr/shopimages/forhome/prod_icons/3973?1642464999`,

        ],
      },
    ]);
    setOk(true);
  }, []);
  return (
    <div>
      <hr
        style={{
          width: "1280px",
          margin: `auto`,
          borderTop: `1px solid #999`,
          opacity: `0.6`,
        }}
      />
      <div>
        <p id={styles.title}>{title}</p>
      </div>
      {ok ? (
        <div className={styles.product}>
          {product.map((pro) => (
            <Product
              pro={pro.id}
              key={pro.id}
              img={pro.img}
              price={pro.price}
              sale={pro.sale}
              per={pro.per}
              color={pro.color}
              keyword={pro.keyword}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Sub_contents;
