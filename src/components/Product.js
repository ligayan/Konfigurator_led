import React from "react";

export default function Product(props) {
  const { product, onAdd, button } = props;
  return (
    <div className="product">
      <div>
        <h3>{product.nazwa}</h3>
        <hr></hr>
        <h2>Zasilanie: {product.zasilanie}</h2>
        <hr></hr>
        <h2>Stopień ochrony: {product.ip}</h2>
        <hr></hr>
        <button className="button" disabled={button} onClick={() => onAdd(product)}>Wybierz</button>
        <div></div>
        <br></br>
      </div>
    </div>
  );
}
