import React from "react";

import "./Header.css";
import Navigation from "./navigation/Navigation";

export default function Header({ loggedIn }) {
  return (
    <header className="header">
      <div className="header__container">
        <Navigation loggedIn={loggedIn} />
      </div>
    </header>
  );
}
