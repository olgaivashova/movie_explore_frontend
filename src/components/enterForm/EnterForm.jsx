import logo from '../../images/header-logo.svg';
import './EnterForm.css';
import { Link } from 'react-router-dom';

export default function EnterForm(
  {
    name,
    title,
    button,
    text,
    children,
    onSubmit,
    isValid,
    resError
  }) {

  return (
    <main>
      <div className={`enter-form enter-form_place_${name}`}>
        <Link to="/">
          <img
            className="enter-form__logo"
            src={logo}
            alt="Логотип searchMovie"
          />
        </Link>
        <h1 className="enter-form__title">{title}</h1>
        <form
          className="enter-form__figure"
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <span
            className={`enter-form__result-error ${
              name === 'register' && 'enter-form__result-error_place_register'
            } ${resError ? 'enter-form__result-error_type_active' : ''}`}
          >
            {resError}
          </span>
          <button
            className={`enter-form__button ${
              name === 'register'
                ? 'enter-form__button_place_register'
                : 'enter-form__button'
            }
            ${!isValid ? 'enter-form__button_type_disable' : ''}`}
            type="submit"
            disabled={!isValid}
          >
            {button}
          </button>
        </form>
        <div className="enter-form__text">
          <p className="enter-form__paragraph">{text}</p>
          {name === 'register' || name === 'login' ?
            (
              <Link
                to={name === 'register' ? '/signin' : '/signup'}
                className="enter-form__link"
              >
                {name === 'register' ? 'Войти' : 'Регистрация'}
              </Link>
            ) : null}
        </div>
      </div>
    </main>
  );
}
