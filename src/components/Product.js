import React from "react";

export default function Product(props) {
  const { product, onAdd, button } = props;
  return (
    <div className="product">
      <div>
        <h3>{product.nazwa}</h3>
        <button
          className="button"
          disabled={button}
          onClick={() => onAdd(product)}
        >
          Wybierz
        </button>
        <div></div>
        <br></br>
      </div>
      <img src={product.src} alt="fotka"></img>
    </div>
  );
}
