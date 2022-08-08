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
    filtrowanie,
  } = props;
  return (
    <div className="filter_products">
      <div style={{maxwidth: "100%"}} className={`main_header ${hide ? "hide" : ""}`}>Produkty spełniające Twoje wymagania: </div>
      {filteredList.length === 0 && cartItems.length === 0 ? (
        <div className="alert">
          Brak produktów spełniających wymagania <Kontakt></Kontakt>{" "}
        </div>
      ) : null}
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
          {filtrowanie(zasilacz).length === 0 ? (
            <div className="alert">
              Brak zasilaczy dla wybranego napięcia <br></br>{" "}
              <Kontakt></Kontakt>{" "}
            </div>
          ) : (
            <div>
              <div className="main_header"><strong>Wybierz zasilacz:</strong> </div>
              <div className="main_header_h2">
                Zalecana moc zasilacza : {wymaganaMoc} W{" "}
              </div>
              <div className="cartproducts">
                {zasilacz
                  .filter((moc) =>
                    wymaganaMoc < 45
                      ? moc.moc > wymaganaMoc &&
                        moc.moc <= 45 &&
                        moc.zasilanie === selectedV
                      : moc.moc > wymaganaMoc &&
                        moc.moc <= wymaganaMoc * 1.5 &&
                        moc.zasilanie === selectedV
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
