import logo from "../../images/header-logo.svg";
import "./EnterForm.css";
import { Link } from "react-router-dom";
export default function EnterForm(props) {
  return (
    <main>
      <div className={`enter-form enter-form_place_${props.name}`}>
        <Link to="/">
          <img
            className="enter-form__logo"
            src={logo}
            alt="Логотип searchMovie"
          />
        </Link>
        <h1 className="enter-form__title">{props.title}</h1>
        <form
          className="enter-form__figure"
          action="#"
          onSubmit={props.onSubmit}
        >
          {props.children}
          <label className="enter-form__label">E-mail</label>
          <input
            className="enter-form__input enter-form__input_type_email"
            id="email"
            name="email"
            type="email"
            placeholder="Введите e-mail"
            value={props.value}
            onChange={props.onChange}
            required
          />
          <label className="enter-form__label">Пароль</label>
          <input
            className="enter-form__input enter-form__input_type_password"
            id="password"
            name="password"
            type="password"
            placeholder="Введите пароль"
            value={props.value}
            onChange={props.onChange}
            minLength={3}
            maxLength={10}
            required
          />
          <button
            className={`"enter-form__button" ${
              props.name === "register"
                ? "enter-form__button_place_register"
                : "enter-form__button"
            }`}
            type="submit"
          >
            {props.button}
          </button>
        </form>
        <div className="enter-form__text">
          <p className="enter-form__paragraph">{props.text}</p>

          {props.name === "register" || props.name === "login" ? (
            <Link
              to={props.name === "register" ? "/signin" : "/signup"}
              className="enter-form__link"
            >
              {props.name === "register" ? "Войти" : "Регистрация"}
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </main>
  );
}
