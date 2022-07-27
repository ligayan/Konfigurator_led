import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Koszyk from "./components/Koszyk";
import data from "./data";
import data_2 from "./data_2";
import { useState, useEffect } from "react";

function App() {
  // DATA
  const { product } = data;
  const { zasilacz } = data_2;

  const [cartItems, setCartItems] = useState([]);
  const [filteredList, setFilteredList] = useState(product);
  const [selectedIp, setSelectedIp] = useState("");
  const [selectedV, setSelectedV] = useState("");
  const [selectedK, setSelectedK] = useState("");

  const [inputQty, setInputQty] = useState("");
  const [button, setButton] = useState("disabled");
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
  const filterByV = (filteredData) => {
    if (!selectedV) {
      return filteredData;
    }
    const filteredTasmy = filteredData.filter(
      (tasma) => tasma.zasilanie.split(" ").indexOf(selectedV) !== -1
    );
    return filteredTasmy;
  };
  const filterByK = (filteredData) => {
    if (!selectedK) {
      return filteredData;
    }
    const filteredTasmy = filteredData.filter(
      (tasma) => tasma.barwa.split(" ").indexOf(selectedK) !== -1
    );
    return filteredTasmy;
  };


  const handleIpChange = (event) => {
    setSelectedIp(event.target.value);
    setCartItems([]);
  };
  const handleVChange = (event) => {
    setSelectedV(event.target.value);
    setCartItems([]);
  };
  const handleKChange = (event) => {
    setSelectedK(event.target.value);
    setCartItems([]);
  };

  useEffect(() => {
    var filteredData = filterByIp(product);
    filteredData = filterByV(filteredData);
    filteredData = filterByK(filteredData);
    setFilteredList(filteredData);
  }, [selectedIp, selectedV, selectedK]);

  //Dodawanie do tablicy (koszykowej)
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (product.typ === "tasma") {
      setwymaganaMoc((inputQty * product.moc / 100) );
    }

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? {
                ...exist,
                qty:
                  product.typ === "zasilacz"
                    ? 1
                    : Math.ceil(inputQty / product.odcinek),
              }
            : x
        )
      );
    } else {
      if (cartItems.length === 0 || product.typ === "zasilacz") {
        setCartItems([
          ...cartItems,
          {
            ...product,
            qty:
              product.typ === "zasilacz"
                ? 1
                : Math.ceil(inputQty / product.odcinek),
          },
        ]);
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
        handleVChange={handleVChange}
        handleKChange={handleKChange}
        handleChangeQty={handleChangeQty}
        selectedIp={selectedIp}
        selectedV={selectedV}
        selectedK={selectedK}
        inputQty={inputQty}
        cartItems={cartItems}
      ></Main>
      <Koszyk onAdd={onAdd} cartItems={cartItems} key={cartItems.id}></Koszyk>
    </div>
  );
}

export default App;
