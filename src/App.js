import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Koszyk from "./components/Koszyk";
import data from "./data";
import { useState } from "react";

function App() {
  
  const [cartItems, setCartItems] = useState([]);
  const { product } = data;
  //Dodawanie do tablicy (koszykowej)
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: product.qty }]);
    }
  };
  return (
    console.log(cartItems),
    (
      <div className="App">
        <Header></Header>
        <Main onAdd={onAdd} product={product}></Main>
        <Koszyk onAdd={onAdd} cartItems={cartItems}></Koszyk>
      </div>
    )
  );
}

export default App;
