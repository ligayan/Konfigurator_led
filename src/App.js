import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Koszyk from "./components/Koszyk";
import data from "./data";
import data_2 from "./data_2";
import { useState, useEffect } from "react";

function App() {
  const { product } = data;
  const { zasilacz } = data_2;
  const [filteredList, setFilteredList] = useState(product);
  const [selectedIp, setSelectedIp] = useState("");
  const [inputQty, setInputQty] = useState("");

  const [button, setButton] = useState("disabled");

  const [cartItems, setCartItems] = useState([]);
  const [wymaganaMoc, setwymaganaMoc] = useState("");

  const handleChangeQty = (value) => {
    if (value > 0 && value < 501) {
      setInputQty(value);
      setButton("");
      setCartItems([]);
    } else {
      alert("Taśma nie może mieć wiecej niż 5 m");
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

    if ((product.typ === "tasma")) {
      setwymaganaMoc(inputQty * product.wspolczynnik * 1.2);
    }

    if (inputQty === "") {
      alert("Przed dodaniem podaj Długość taśmy");
    } else {
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id
              ? { ...exist, qty: product.typ === "zasilacz" ? 1 : inputQty }
              : x
          )
        );
      } else {
        if (cartItems.length === 0 || product.typ === "zasilacz") {
          setCartItems([
            ...cartItems,
            { ...product, qty: product.typ === "zasilacz" ? 1 : inputQty },
          ]);
        }
      }
    }
  };
  return (
    <div className="App">
      <Header></Header>
      <Main
        wymaganaMoc={wymaganaMoc}
        button={button}
        onAdd={onAdd}
        product={filteredList}
        zasilacz={zasilacz}
        handleIpChange={handleIpChange}
        selectedIp={selectedIp}
        inputQty={inputQty}
        handleChangeQty={handleChangeQty}
        cartItems={cartItems}
      ></Main>
      <Koszyk onAdd={onAdd} cartItems={cartItems}></Koszyk>
    </div>
  );
}

export default App;
