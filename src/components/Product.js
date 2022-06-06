function Product(pro) {
  const color = pro.color;
  const keyword = pro.keyword;
  return (
    <div style={{ color: `#333`, marginBottom: `70px` }}>
      <img src={pro.img}></img>
      <ul style={{ display: "flex", gap: `3px`, alignItems: "center" }}>
        {color.map((g) => (
          <li
            key={g}
            style={{
              color: `${g}`,
              overflow: "hidden",
              height: "15px",
              alignItems: "center",
              fontSize: `10px`,
            }}
          >
            ●
          </li>
        ))}
      </ul>
      <p style={{ fontSize: "14px" }}>{pro.pro}</p>
      <p
        style={{
          fontSize: "13px",
          fontWeight: "300",
          textDecoration: "line-through",
          opacity: `0.7`,
        }}
      >
        {pro.price}
      </p>
      <p
        style={{
          fontSize: "16px",
          fontWeight: "500",
          display: "inline-block",
        }}
      >
        {pro.sale}
      </p>
      <p
        style={{
          fontSize: "14px",
          display: "inline-block",
          marginLeft: "8px",
          fontWeight: "700",
          color: `#9d5048`,
        }}
      >
        {pro.per}
      </p>
      <ul style={{ display: "flex", gap: `3px`, alignItems: "center" }}>
        {keyword.map((g) => (
          <img src={g} key={g}></img>
        ))}
      </ul>
    </div>
  );
}

export default Product;
