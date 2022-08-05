import React from "react";

export default function Zasilacz(props) {
  const { zasilacz, onAdd, button } = props;
  return (
    <div className="product">
      <div>
        <h3>{zasilacz.nazwa}</h3>
        <button
          className="button"
          disabled={button}
          onClick={() => onAdd(zasilacz)}
        >
          Wybierz
        </button>
      </div>

      <img src={zasilacz.src} alt="fotka"></img>
    </div>
  );
}
