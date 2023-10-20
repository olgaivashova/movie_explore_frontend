import EnterForm from "../enterForm/EnterForm";
import useValidationForm from "../../hooks/useValidationForm";
import { useState } from "react";
import {
  HTTP_STATUS_CONFLICT,
  HTTP_STATUS_INTERNAL,
  INTERNAL_SERVER_ERROR
} from "../../utils/constants";

function Register({handleSignup}) {
  const {values, errors, isValid, handleChange, setIsValid} = useValidationForm();
  const [resError, setResError] = useState("");

  function onSubmit(evt) {
    evt.preventDefault();
    setIsValid(false);
    handleSignup(values.name, values.email, values.password)
      .catch(error => {
          if (error === HTTP_STATUS_CONFLICT) {
            setResError("Пользователь с таким email уже существует.");
          } else if (error === HTTP_STATUS_INTERNAL) {
            setResError(INTERNAL_SERVER_ERROR);
          } else {
            setResError("При регистрации пользователя произошла ошибка.");
          }
        }
      );
  }

  return (
    <main>
      <section className="register">
        <EnterForm
          name="register"
          title="Добро пожаловать!"
          button="Зарегистрироваться"
          text="Уже зарегистрированы?"
          onSubmit={onSubmit}
          isValid={isValid}
          resError={resError}
        >
          <label className="enter-form__label">Имя</label>
          <input
            name="name"
            id="register-input"
            type="text"
            className="enter-form__input enter-form__input_type_name"
            placeholder="Введите имя"
            onChange={handleChange}
            value={values.name || ""}
            minLength={2}
            required
          />
          <span className="enter-form__input-error">{errors.name}</span>
          <label className="enter-form__label">E-mail</label>
          <input
            className="enter-form__input enter-form__input_type_email"
            id="email"
            name="email"
            type="email"
            placeholder="Введите e-mail"
            value={values.email || ""}
            onChange={handleChange}
            required
          />
          <span className="enter-form__input-error">{errors.email}</span>
          <label className="enter-form__label">Пароль</label>
          <input
            className="enter-form__input enter-form__input_type_password"
            id="password"
            name="password"
            type="password"
            placeholder="Введите пароль"
            value={values.password || ""}
            onChange={handleChange}
            minLength={5}
            required
          />
          <span className="enter-form__input-error">{errors.password}</span>
        </EnterForm>
      </section>
    </main>
  );
}

export default Register;
