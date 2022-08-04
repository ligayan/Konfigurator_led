import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Koszyk from "./components/Koszyk";
import data from "./data";
import data_2 from "./data_2";
import { useState, useEffect } from "react";
import { useRef } from "react";
import Footer from "./components/Footer";
import Filters from "./components/Filters";

function App() {
  // DATA
  const { product } = data;
  const { zasilacz } = data_2;

  const [cartItems, setCartItems] = useState([]);
  const [filteredList, setFilteredList] = useState(product);
  const [selectedIp, setSelectedIp] = useState("");
  const [selectedV, setSelectedV] = useState("");
  const [selectedK, setSelectedK] = useState("");

  const [hide, setHide] = useState(false);

  const [inputQty, setInputQty] = useState("");
  const [button, setButton] = useState("disabled");
  const [wymaganaMoc, setwymaganaMoc] = useState("");

  const ref = useRef(null);

  const handleChangeQty = (value) => {
    setInputQty(value);
    if (selectedV === "") {
      alert("Musisz podać zasilanie");
      setInputQty("");
    } else {
      setButton("");
    }
    // setCartItems([]);
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

  const handleReset = () => {
    setFilteredList(product);
    setSelectedIp("");
    setSelectedK("");
    setSelectedV("");
    setCartItems("");
    setInputQty(" ");
    setButton("disabled");
    setHide(false);
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
    if (product.typ === "zasilacz") {
      setHide(true);
    }
    if (product.typ === "tasma") {
      setwymaganaMoc(Math.ceil(((inputQty * product.moc) / 100) * 1.2));
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
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setFilteredList([]);
  };

  const zestaw = (product) => {
    const exist = cartItems.find(
      (x) => x.identyfikator === product.identyfikator
    );
    if (exist) {
      setCartItems([...exist, product.qty + product.qty]);
    } else {
      alert("bład");
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <Filters
        selectedIp={selectedIp}
        handleIpChange={handleIpChange}
        selectedK={selectedK}
        handleKChange={handleKChange}
        selectedV={selectedV}
        handleVChange={handleVChange}
        handleReset={handleReset}
        inputQty={inputQty}
        handleChangeQty={handleChangeQty}
      ></Filters>
      <Main
        wymaganaMoc={wymaganaMoc}
        selectedV={selectedV}
        button={button}
        onAdd={onAdd}
        product={filteredList}
        zasilacz={zasilacz}
        handleVChange={handleVChange}
        handleChangeQty={handleChangeQty}
        inputQty={inputQty}
        cartItems={cartItems}
        hide={hide}
      ></Main>
      <div ref={ref}></div>
      <Koszyk
        onAdd={onAdd}
        cartItems={cartItems}
        key={cartItems.id}
        zestaw={zestaw}
        product={filteredList}
      ></Koszyk>
      <Footer></Footer>
    </div>
  );
}

export default App;
