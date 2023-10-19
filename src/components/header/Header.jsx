import React from "react";
import "./Header.css";
import Navigation from "./navigation/Navigation";

export default function Header({ name }) {
  return (
    <header
      className={`header header_place_${name} ${
        name === "main" ? "header_type_inactive" : ""
      }`}
    >
      <div className="header__container">
        <Navigation />
      </div>
    </header>
  );
}
