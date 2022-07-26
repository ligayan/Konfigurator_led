import React from "react";

export default function Filters(props) {
  const {
    inputQty,
    handleChangeQty,
    selectedIp,
    handleIpChange,
    selectedK,
    handleKChange,
    selectedV,
    handleVChange,
    handleReset,
  } = props;
  const tablica = {
    ochrona: {
      h1: "Ochrona IP",
      p: "Testowy opis",
    },
    barwa: {
      h1: "Barwa",
      p: "Testowy opis",
    },
    zasilanie: {
      h1: "Zasilanie",
      p: "Uwaga !!! Wymagany transformator/zasilacz",
    },
  };

  return (
    <div className="filters">
      <div className="flex">
        <div className="filter_header">
          Wybór stopnia ochrony:
          <span className="info">
            ?
            <div className="opis">
              <h3>{tablica.ochrona.h1}</h3>
              <p>{tablica.ochrona.p}</p>
            </div>
          </span>
        </div>
        <select id="ip-input" value={selectedIp} onChange={handleIpChange}>
          <option value="">wybierz IP</option>
          <option value="20">IP20</option>
          <option value="65">IP65</option>
        </select>
      </div>
      <div className="flex">
        <div className="filter_header">
          Wybór barwy:
          <span className="info">
            ?
            <div className="opis">
              <h3>{tablica.barwa.h1}</h3>
              <p>{tablica.barwa.p}</p>
            </div>
          </span>
        </div>
        <select id="ip-input" value={selectedK} onChange={handleKChange}>
          <option value="">wybierz barwę</option>
          <option value="3000">3000 K</option>
          <option value="4000">4000 K</option>
          <option value="0">Barwa Regulowana</option>
        </select>
      </div>
      <div className="flex">
        <div className="filter_header">
          Wybór rodzaju zasilania:
          <span className="info">
            ?
            <div className="opis">
              <h3>{tablica.zasilanie.h1}</h3>
              <p>{tablica.zasilanie.p}</p>
            </div>
          </span>
        </div>
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
          style={{ width: "10%" }}
          type="number"
          placeholder="cm"
          value={inputQty}
          onChange={(e) => handleChangeQty(e.target.value)}
        ></input>
      </div>
      <button onClick={handleReset}> Resetuj</button>
    </div>
  );
}
