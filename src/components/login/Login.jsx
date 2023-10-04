import EnterForm from "../enterForm/EnterForm";

const Login = () => {
  return (
    <main>
      <EnterForm
        name="login"
        title="Рады видеть!"
        button="Войти"
        text="Ещё не зарегистрированы?"
      ></EnterForm>
    </main>
  );
};

export default Login;
