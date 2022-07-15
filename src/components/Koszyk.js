import React from "react";

export default function Koszyk(props) {
  const { cartItems, onAdd } = props;
  return (
    <>
      <div>Koszyk</div>
      <div>{cartItems.length === 0 && <div>Nie wybrano</div>}</div>
      {cartItems.map((item) => (
        <div>
          <div>{item.nazwa}</div>
          <div>Ilość:{item.qty}</div>
        </div>
      ))}
    </>
  );
}
<input type="text" name="todo"></input>;
