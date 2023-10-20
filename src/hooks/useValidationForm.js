import { useState } from "react";
import { EMAIL_REGEX } from "../utils/constants";

export default function useValidationForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleCustomValidation(errors) {
    return Object.keys(errors).every((error) => {
      return errors[error] === '';
    })
  }

  function handleChange(event) {
    const {name, value} = event.target
    setValues({...values, [name]: value});
    if (name === 'email') {
      if (EMAIL_REGEX.test(value)) {
        setIsValid(event.target.closest('form').checkValidity());
        setErrors({...errors, [name]: event.target.validationMessage});
      } else {
        setIsValid(false);
        setErrors({...errors, email: 'Incorrect email'})
      }
    } else {
      setErrors({...errors, [name]: event.target.validationMessage});
      const isValidity = handleCustomValidation({...errors, [name]: event.target.validationMessage});
      const isFormValid = event.target.closest('form').checkValidity();
      setIsValid(isValidity && isFormValid);
    }
  }

  return {
    values,
    errors,
    isValid,
    handleChange,
    setIsValid,
    setValues
  };
}
