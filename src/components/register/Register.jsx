import EnterForm from "../enterForm/EnterForm";

const Register = () => {
  return (
    <main>
      <section className="register">
        <EnterForm
          name="register"
          title="Добро пожаловать!"
          button="Зарегистрироваться"
          text="Уже зарегистрированы?"
        >
          <label className="enter-form__label">Имя</label>
          <input
            id="register-input"
            type="text"
            className="enter-form__input enter-form__input_type_name"
            placeholder="Введите имя"
            minLength={2}
            maxLength={10}
            name="name"
            required
          />
          <span className="enter-form__input-error enter-form-input-error"></span>
        </EnterForm>
      </section>
    </main>
  );
};

export default Register;
