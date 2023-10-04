import "./Navigation.css";
import account from "../../../images/header_loggedIn-icon.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../../images/header-logo.svg";

export default function Navigation({ loggedIn }) {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  const [burgerNav, setBurgerNav] = useState(false);

  const handleClick = () => {
    setBurgerNav(!burgerNav);
  };
  useEffect(() => {
    function closeBurger() {
      if (document.documentElement.clientWidth > 1010) {
        setBurgerNav(false);
        window.removeEventListener("resize", closeBurger);
      }
    }
    if (burgerNav === true) {
      window.addEventListener("resize", closeBurger);
      return () => window.removeEventListener("resize", closeBurger);
    }
  }, [burgerNav]);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <nav className="navigation">
      {loggedIn ? (
        <>
          <div className="navigation__content">
            <Link to="/">
              <img
                className="navigation__logo"
                src={logo}
                alt="Логотип searchMovie"
              />
            </Link>
            <ul
              className={`navigation__bar ${
                burgerNav ? "navigation__bar_active" : "navigation__bar"
              }`}
              onClick={handleClick}
            >
              <div className="navigation__links">
                {" "}
                <li>
                  <Link
                    to="/"
                    className={`navigation__text ${
                      burgerNav ? "navigation__text_active" : "navigation__text"
                    }`}
                  >
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    to="/movies"
                    className={`navigation__item ${
                      url === "/movies" ? "navigation__item_type_active" : ""
                    }`}
                  >
                    Фильмы
                  </Link>
                </li>
                <li>
                  <Link
                    to="/saved-movies"
                    className={`navigation__item ${
                      url === "/saved-movies"
                        ? "navigation__item_type_active"
                        : ""
                    }`}
                  >
                    Сохранённые фильмы
                  </Link>
                </li>
              </div>
              <li>
                <Link to="/profile" className="navigation__account-group">
                  <button className="navigation__account-btn" type="button">
                    Аккаунт
                  </button>
                  <img
                    className="navigation__account-image"
                    src={account}
                    alt="иконка аккаунта"
                  />
                </Link>
              </li>
            </ul>
            <button
              className={`navigation__burger-btn ${
                burgerNav ? "navigation__burger-btn_active" : ""
              }`}
              onClick={handleClick}
            ></button>
          </div>
        </>
      ) : (
        <>
          <ul className="navigation__content">
            <li>
              <img
                className="navigation__logo"
                src={logo}
                alt="Логотип searchMovie"
              />
            </li>
            <div className="navigation__buttons">
              <li>
                <Link to="/signup" className="navigation__signup">
                  Регистрация
                </Link>
              </li>
              <li>
                <Link to="/signin">
                  <button className="navigation__signin-button" type="button">
                    Войти
                  </button>
                </Link>
              </li>
            </div>
          </ul>
        </>
      )}
    </nav>
  );
}
