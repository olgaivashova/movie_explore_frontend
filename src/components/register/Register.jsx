
import EnterForm from "../enterForm/EnterForm";



const Register = () => {
  return (
    <main>
    <EnterForm 
    name="register"
    title="Добро пожаловать!"
    button="Зарегистрироваться"
    text="Уже зарегистрированы?">

    <label className="enter-form__label">Имя</label>
  <input
    id="register-input"
    type="text"
    className="enter-form__input enter-form__input_type_name"
    name="name"
    required
  />
  <span className="enter-form__input-error enter-form-input-error"></span>
     </EnterForm> 
   </main>
  )
};

export default Register;
