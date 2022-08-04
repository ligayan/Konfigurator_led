import React from "react";
import Kontakt from "./Kontakt";
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
      {filteredList.length === 0 && cartItems.length === 0 ? (
        <div className="alert">Brak produktów Spełniających wymagania <Kontakt></Kontakt> </div>
      ) : null}
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
          {zasilacz.filter(
            (moc) => moc.moc > wymaganaMoc && moc.zasilanie === selectedV
          ).length === 0 ? (
            <div className="alert">Brak zasilaczy dla wybranego napięcia <br></br> <Kontakt></Kontakt> </div>
          ) : (
            <div>
              <div className="main_header">Wybierz zasilacz: </div>
              <div className="main_header">
                Zalecana moc zasilacza : {wymaganaMoc} W{" "}
              </div>
              <div className="cartproducts">
                {zasilacz
                  .filter(
                    (moc) =>
                      moc.moc > wymaganaMoc && moc.zasilanie === selectedV
                  )
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
      )}
    </div>
  );
}
