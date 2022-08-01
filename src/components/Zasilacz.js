import React from "react";

export default function Zasilacz(props) {
  const { zasilacz, onAdd, button} = props;
  return (
    <div className="product">
      <div>
        <h3>{zasilacz.nazwa}</h3>
        <button disabled={button} onClick={() => onAdd(zasilacz)}>Wybierz</button>
      </div>
    </div>
  );
}
