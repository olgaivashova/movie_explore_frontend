import { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

export default function Profile(props) {
  const [update, setUpdate] = useState(false);
  const toggleButton = () => {
    setUpdate(!update);
  };

  return (
    <main>
      <section className="profile-container">
        <h1 className="profile-container__greeting">Привет, .....!</h1>
        <form className="profile-container__form">
          <div className="profile-container__row">
            <label className="profile-container__label">Имя</label>
            <input
              className="profile-container__input profile-container__input_type_name"
              placeholder="Введите имя"
              id="name"
              name="name"
              type="text"
              value={props.value}
              onChange={props.onChange}
              required
            />
          </div>
          <div className="profile-container__row">
            <label className="profile-container__label">E-mail</label>
            <input
              className="profile-container__input profile-container__input_type_email"
              placeholder="Введите e-mail"
              id="email"
              name="email"
              type="email"
              value={props.value}
              onChange={props.onChange}
              required
            />
          </div>
        </form>
        <button
          className={`profile-container__button type="submit"  ${
            update ? "profile-container__button_type_update" : ""
          }`}
          onClick={toggleButton}
        >
          {update ? "Сохранить" : "Редактировать"}
        </button>
        <Link
          to="/"
          className={`profile-container__link ${
            update ? "profile-container__link_type_update" : ""
          }`}
        >
          Выйти из аккаунта
        </Link>
      </section>
    </main>
  );
}
