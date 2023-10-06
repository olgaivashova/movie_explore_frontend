import React from "react";

import "./Header.css";
import Navigation from "./navigation/Navigation";

export default function Header({ loggedIn, name }) {
  return (
    <header
      className={`header ${name === "Main" ? "header_type_inactive" : ""}`}
    >
      <div className="header__container">
        <Navigation loggedIn={loggedIn} />
      </div>
    </header>
  );
}
