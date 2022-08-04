import React from "react";
import Product from "./Product";
import Zasilacz from "./Zasilacz";

export default function Main(props) {
  const {
    product,
    zasilacz,
    onAdd,
    button,
    cartItems,
    wymaganaMoc,
    selectedV,
    hide,
    filteredList,
  } = props;
  return (
    <div className="filter_products">
      {/* <div className="flex">
        <div className="filter_header">Filtrowanie po IP:</div>
        <select id="ip-input" value={selectedIp} onChange={handleIpChange}>
          <option value="">wybierz IP</option>
          <option value="20">IP20</option>
          <option value="65">IP65</option>
        </select>
      </div>
      <div className="flex">
        <div className="filter_header">Filtowanie po Barwie:</div>
        <select id="ip-input" value={selectedK} onChange={handleKChange}>
          <option value="">wybierz barwę</option>
          <option value="3000">3000 K</option>
          <option value="4000">4000 K</option>
          <option value="0">Barwa Regulowana</option>
        </select>
      </div>
      <div className="flex">
        <div className="filter_header">Rodzaj zaislania:</div>
        <select id="ip-input" value={selectedV} onChange={handleVChange}>
          <option value="">wybierz zasilanie</option>
          <option value="12">12V</option>
          <option value="24">24V</option>
          <option value="48">48V</option>
        </select>
      </div>
      <div className="flex">
        <div className="filter_header">Długość:</div>
        <input
          style={{width: "10%"}}
          type="number"
          placeholder="cm"
          value={inputQty}
          onChange={(e) => handleChangeQty(e.target.value)}
        ></input>
      </div>
      <button onClick={handleReset}> Resetuj</button> */}
      {filteredList.length === 0 && cartItems.length === 0 ? <div className="alert">Brak produktów Spełniających wymagania </div> : null}
      {console.log(filteredList)}
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
      {cartItems.length === 0 ? (
        ""
      ) : (
        <div className={`lightbox ${hide ? "hide" : ""}`}>
          <div className="main_header">Wybierz zasilacz: </div>
          <div className="main_header" >Zalecana moc zasilacza : {wymaganaMoc} W </div>
          <div className="cartproducts">
            {zasilacz
              .filter((moc) => moc.moc > wymaganaMoc && moc.zasilanie === selectedV)
              .map((index) => (
                <Zasilacz
                  key={index.id}
                  zasilacz={index}
                  onAdd={onAdd}
                  button={button}
                ></Zasilacz>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
