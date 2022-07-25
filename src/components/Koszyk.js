import React from "react";

export default function Koszyk(props) {
  const { cartItems, onAdd } = props;
  return (
    <>
      {cartItems.length === 0 ? null : (
        <div className="cart" key={cartItems.id}>
          <div>Produkty W konfiguracji</div>
          {cartItems.map((item) => (
            <div className="cartflex" key={item.id}>
              <div key={item.id}>{item.nazwa}</div>
              <div>
                {item.qty}
                {item.typ === "tasma" ? " cm" : " szt"}
              </div>
              {console.log(item.typ)}
            </div>
          ))}
          <form
            action="https://inergia.pl/configurator_products/action/addtocart"
            target="_blank"
            method="post"
          >
            {cartItems.map((id, key) => (
              <>
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
              </>
            ))}
            <input
              className="button"
              type="submit"
              value="KUP NA INERGIA.PL"
            ></input>
          </form>
        </div>
      )}
    </>
  );
}
