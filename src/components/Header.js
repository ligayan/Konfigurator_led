import React from "react";

export default function Header(props) {
  return (
    <header className="main_header">
      <div className="header_inner">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + `/img/logo_inergia.png`}
          alt="Logo"
        />
        <div>Konfigurator LED </div>
      </div>
    </header>
  );
}
