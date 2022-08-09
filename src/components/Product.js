import React from "react";
export default function Product(props) {
  const { product, onAdd, button, } = props;
  return (
    <div className="product">
      <div className="product_inner">
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
      <img src={process.env.PUBLIC_URL + product.src} className="product_img_inner" alt="fotka"></img>

    </div>
  );
}
