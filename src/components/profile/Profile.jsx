import { useEffect, useState } from "react";
import "./Profile.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useValidationForm from "../../hooks/useValidationForm";
import mainApi from "../../utils/MainApi";
import { HTTP_STATUS_CONFLICT, HTTP_STATUS_INTERNAL, INTERNAL_SERVER_ERROR } from "../../utils/constants";
import Header from "../header/Header";

export default function Profile({signout, setCurrentUser}) {
  const {values, errors, isValid, handleChange, setIsValid, setValues} = useValidationForm();
  const currentUser = useContext(CurrentUserContext);
  const [isUpdate, setIsUpdate] = useState(false);
  const [information, setInformation] = useState({type: "success", message: ""});

  const toggleButton = () => {
    setIsUpdate((prev) => !prev);
    setInformation({type: "", message: ""})
  };

  function handleInputChange(evt) {
    handleChange(evt);
    const {name, value} = evt.target
    if ((name === "name" && value === currentUser.name) && (values["email"] === currentUser.email)) {
      setIsValid(false);
    }
    if ((name === "email" && value === currentUser.email) && (values["name"] === currentUser.name)) {
      setIsValid(false);
    }
  }

  useEffect(() => {
    setValues({name: currentUser.name, email: currentUser.email});
  }, [currentUser.name, currentUser.email]);

  function submitProfile(evt) {
    evt.preventDefault();
    setIsValid((prev) => !prev)
    mainApi.setUserInfo(values.name, values.email)
      .then(({name, email}) => {
        setCurrentUser((prev) => ({...prev, name: name, email: email}))
        setInformation({type: "success", message: "Профиль обновлен"})
        setIsUpdate(false);
        setIsValid(false);
      })
      .catch((err) => {
        console.error(err);
        if (err === HTTP_STATUS_CONFLICT) {
          setInformation({type: "error", message: "Пользователь с таким email уже существует."});
          setIsValid(false);
        } else if (err === HTTP_STATUS_INTERNAL) {
          setInformation({type: "error", message: INTERNAL_SERVER_ERROR});
        } else {
          setInformation({type: "error", message: "При обновлении профиля произошла ошибка."});
        }
      })
  }

  return (
    <>
      <Header/>
      <main>
        <section className="profile-container">
          <h1 className="profile-container__greeting">{`Привет, ${currentUser.name}!`}</h1>
          <form
            className="profile-container__form"
            onSubmit={submitProfile}
            noValidate
          >
            <div className="profile-container__group">
              <fieldset className="profile-container__row">
                <label className="profile-container__label">Имя</label>
                <input
                  className="profile-container__input profile-container__input_type_name"
                  placeholder="Введите имя"
                  id="name"
                  name="name"
                  type="text"
                  value={values.name || ""}
                  minLength={2}
                  onChange={handleInputChange}
                  disabled={!isUpdate}
                />
              </fieldset>
              <span className="profile-container__input-error">
              {errors.name}
            </span>
            </div>
            <div className="profile-container__group profile-container__group_place_last">
              <fieldset className="profile-container__row">
                <label className="profile-container__label">E-mail</label>
                <input
                  className="profile-container__input profile-container__input_type_email"
                  placeholder="Введите e-mail"
                  id="email"
                  name="email"
                  type="email"
                  value={values.email || ""}
                  onChange={handleInputChange}
                  disabled={!isUpdate}
                />
              </fieldset>
              <span className="profile-container__input-error">
              {errors.email}
            </span>
            </div>
            <p className={`profile-container__response profile-container__response_type_${information.type}`}>{information.message}</p>
            {isUpdate
              ? <button
                type="submit"
                disabled={!isValid}
                className={`profile-container__button profile-container__button_type_update ${isValid ? "" : "profile-container__button_type_disable"}`}
              >Сохранить</button>
              : <button
                type="button"
                onClick={toggleButton}
                className={`profile-container__button profile-container__button_type_edit`}
              >Редактировать</button>
            }
            <button
              type="button"
              className={`profile-container__link ${isUpdate ? "profile-container__link_type_update" : ""}`}
              onClick={signout}
            >Выйти из аккаунта
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
