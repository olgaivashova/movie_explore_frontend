import EnterForm from "../enterForm/EnterForm";
import useValidationForm from "../../hooks/useValidationForm";
import {
  HTTP_STATUS_CONFLICT,
  HTTP_STATUS_INTERNAL,
  HTTP_STATUS_UNAUTHORIZED,
  INTERNAL_SERVER_ERROR
} from "../../utils/constants";
import { useState } from "react";

export default function Login({handleSignin}){
  const {values, errors, isValid, handleChange, setIsValid} = useValidationForm();
  const [resError, setResError] = useState("");
  function onSubmit(evt) {
    evt.preventDefault();
    setIsValid(false);
    handleSignin(values.email, values.password)
      .catch(error => {
          if (error === HTTP_STATUS_CONFLICT) {
            setResError("Пользователь с таким email уже существует.");
          } else if (error === HTTP_STATUS_UNAUTHORIZED) {
            setResError("Вы ввели неправильный логин или пароль.");
          } else if (error === HTTP_STATUS_INTERNAL) {
            setResError(INTERNAL_SERVER_ERROR);
          } else {
            setResError("При авторизации произошла ошибка. Токен не передан или передан не в том формате.");
          }
        }
      );
  }

  return (
    <main>
      <section className="login">
        <EnterForm
          name="login"
          title="Рады видеть!"
          button="Войти"
          text="Ещё не зарегистрированы?"
          onSubmit={onSubmit}
          isValid={isValid}
          resError={resError}
        >
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
};
