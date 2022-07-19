import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Koszyk from "./components/Koszyk";
import data from "./data";
import { useState, useEffect } from "react";

function App() {
  const { product } = data;
  const [filteredList, setFilteredList] = useState(product);
  const [selectedIp, setSelectedIp] = useState("");
  const [inputQty, setInputQty] = useState("");

  const [cartItems, setCartItems] = useState([]);

  const handleChangeQty = (value) => {
    if(value > 0 && value < 6 ){
      setInputQty(value);
    }else{
      alert("Taśma nie może mieć wiecej niż 5 m")
    }

  };

  const filterByIp = (filteredData) => {
    if (!selectedIp) {
      return filteredData;
    }
    const filteredTasmy = filteredData.filter(
      (tasma) => tasma.ip.split(" ").indexOf(selectedIp) !== -1
    );
    return filteredTasmy;
  };

  const handleIpChange = (event) => {
    setSelectedIp(event.target.value);
    setCartItems([]);
  };

  useEffect(() => {
    var filteredData = filterByIp(product);
    setFilteredList(filteredData);
  }, [selectedIp]);

  //Dodawanie do tablicy (koszykowej)
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: inputQty } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: inputQty }]);
    }
  };
  return (
    console.log(cartItems),
    (
      <div className="App">
        <Header></Header>
        <Main
          onAdd={onAdd}
          product={filteredList}
          handleIpChange={handleIpChange}
          selectedIp={selectedIp}
          inputQty={inputQty}
          handleChangeQty={handleChangeQty}
        ></Main>
        <Koszyk onAdd={onAdd} cartItems={cartItems}></Koszyk>
      </div>
    )
  );
}

export default App;
