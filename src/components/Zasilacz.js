import React from "react";

export default function Zasilacz(props) {
  const { zasilacz, onAdd, button } = props;
  return (
    <div className="product">
      <div className="product_inner">
        <h3>{zasilacz.nazwa}</h3>
        <button
          className="button"
          disabled={button}
          onClick={() => onAdd(zasilacz)}
        >
          Wybierz
        </button>
      </div>
      <img src={zasilacz.src} className="product_img_inner" alt="fotka"></img>
    </div>
  );
}
