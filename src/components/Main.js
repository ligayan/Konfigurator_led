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
    selectedV,
    handleVChange
  } = props;
  return (
    <div className="filters">
      <div className="flex">
        <div className="filter_header">Filtrowanie po IP:</div>
        <select id="ip-input" value={selectedIp} onChange={handleIpChange}>
          <option value="">wybierz IP</option>
          <option value="ip44">IP44</option>
          <option value="ip20">IP20</option>
        </select>
      </div>
      <div className="flex">
        <div className="filter_header">Rodzaj zaislania:</div>
        <select id="ip-input" value={selectedV} onChange={handleVChange}>
          <option value="">wybierz zasilanie</option>
          <option value="12v">12V</option>
          <option value="24v">24V</option>
        </select>
      </div>
      <div className="flex">
        <div className="filter_header">Długość:</div>
        <input
          type="number"
          placeholder="Długość taśmy w cm..."
          value={inputQty}
          onChange={(e) => handleChangeQty(e.target.value)}
        ></input>
      </div>
      {product.length === 0 ? <div className="alert">Brak produktów Spełniających wymagania </div> : null}
      <div className="cartproducts">
        {product.map((index,) => (
          <Product
            key={index.id}
            product={index}
            onAdd={onAdd}
            button={button}
          ></Product>
        ))}
      </div>
      <div>Wymagana moc: {wymaganaMoc}</div>
      {cartItems.length === 0 ? (
        ""
      ) : (
        <>
          <div className="main_header">Wybierz zasilacz: </div>
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
    </div>
  );
}
