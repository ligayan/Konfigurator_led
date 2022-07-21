import React from "react";
import Product from "./Product";
import Zasilacz from "./Zasilacz";

export default function Main(props) {
  const {
    product,
    zasilacz,
    onAdd,
    handleIpChange,
    selectedIp,
    inputQty,
    handleChangeQty,
    button,
    cartItems,
    wymaganaMoc,
  } = props;
  return (
    <div>
      Konfigurator Taśm Led
      <div>Filtrowanie po IP:</div>
      <select id="ip-input" value={selectedIp} onChange={handleIpChange}>
        <option value=""></option>
        <option value="ip44">IP44</option>
        <option value="ip20">IP20</option>
      </select>
      <div>Długość:</div>
      <input
        type="number"
        placeholder="Długość taśmy w cm..."
        value={inputQty}
        onChange={(e) => handleChangeQty(e.target.value)}
      ></input>
      <div className="cartproducts">
        {product.map((index) => (
          <Product
            key={index.id}
            product={index}
            onAdd={onAdd}
            button={button}
          ></Product>
        ))}
      </div>
      {/* <div>Wymagana moc: {wymaganaMoc}</div> */}
      {cartItems.length === 0 ? (
        ""
      ) : (
        <>
          <div>Wybierz zasilacz: </div>
          <div className="cartproducts">
            {zasilacz
              .filter((moc) => moc.moc < wymaganaMoc)
              .map((index) => (
                <Zasilacz
                  key={index.id}
                  zasilacz={index}
                  onAdd={onAdd}
                  button={button}
                ></Zasilacz>
              ))}
          </div>
        </>
      )}
      <form action="https://inergia.pl/configurator_products/action/addtocart" target="_blank" method="post" >
        {cartItems.map((id, key) => (
          <>
          <input type="hidden" name={'products['+ key +'][id]'} value={id.identyfikator}></input>
          <input type="hidden" name={'products['+ key +'][qty]'} value={id.qty} ></input>

          </>
      ))}
        <input type="submit"></input>
      </form>


    </div>
  );
}
