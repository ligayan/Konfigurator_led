import React from "react";

export default function Koszyk(props) {
  const { cartItems, onAdd } = props;
  const button_text = "Kup na inergia.pl";
  return (
    <>
      {cartItems.length === 0 ? (
        <div></div>
      ) : (
        <div className="cart">
          <div>
            <h3>Produkty u zestawie</h3>
          </div>
          {cartItems.map((item) => (
            <div className="cartflex" key={item.id}>
              <div className="cart_name">{item.nazwa}</div>
              <div className="cart_qty">{item.qty} szt</div>
            </div>
          ))}
          <form
            action="https://inergia.pl/configurator_products/action/addtocart"
            target="_blank"
            method="post"
          >
            {cartItems.map((id, key) => (
              <div key={key}>
                <input
                  type="hidden"
                  name={"products[" + key + "][id]"}
                  value={id.identyfikator}
                ></input>
                <input
                  type="hidden"
                  name={"products[" + key + "][qty]"}
                  value={id.qty}
                ></input>
              </div>
            ))}
            <input className="button" type="submit" value={button_text}></input>
          </form>
        </div>
      )}
    </>
  );
}
