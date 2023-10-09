import EnterForm from "../enterForm/EnterForm";

const Login = () => {
  return (
    <main>
      <section className="login">
        <EnterForm
          name="login"
          title="Рады видеть!"
          button="Войти"
          text="Ещё не зарегистрированы?"
        ></EnterForm>
      </section>
    </main>
  );
};

export default Login;
