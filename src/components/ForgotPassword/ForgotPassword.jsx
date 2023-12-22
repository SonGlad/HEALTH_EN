import { useFormik } from 'formik';

import { NavLink } from 'react-router-dom';
import {
  DivForgotPassword,
  Label,
  Attention,
  SingInText,
  Input,
} from './ForgotPassword.styled';

export const ForgotPassword = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      email: form.elements.email.value,
    };
    localStorage.setItem('reg', JSON.stringify(data));
  };
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: '',
    },
  });

  return (
    <DivForgotPassword>
      <div className="ImageContainet">
        <span className="ImgSingIn" />
      </div>
      <div>
        <div className="TitleContainer">
          <h2 className="H2">Forgot your password</h2>
          <p className="TitleText">
            We will send you an email with recovery instructions
          </p>
        </div>
        <form className="Form" onSubmit={handleSubmit}>
          <Label className={errors.email && touched.email ? 'input-error' : ''}>
            <Input
              className="Input"
              required
              id="email"
              name="email"
              placeholder="E-mail"
              type="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
          </Label>
          {errors.email && touched.email && (
            <Attention>{errors.email}</Attention>
          )}

          <button className="Button" type="submit">
            Send
          </button>
        </form>

        <div className="DivContainerSingIn">
          <SingInText>Do you already have an account?</SingInText>
          <div className="LinkToSingIn">
            <NavLink to="/signin">Sign in</NavLink>
          </div>
        </div>
      </div>
    </DivForgotPassword>
  );
};
