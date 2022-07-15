import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <h3>{product.nazwa}</h3>
      <button onClick={() => onAdd(product)}>DODAJ</button>

    </div>

  );
}
