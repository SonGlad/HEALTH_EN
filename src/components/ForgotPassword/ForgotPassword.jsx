import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { DivForgotPassword, SingInText } from "./ForgotPassword.styled";
import { ForgotPasswordSchema } from "utils/validationSchemas";
import { ShowRules } from "utils/showRules";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/Auth/auth-operations";


export const ForgotPassword = () => {
  const dispatch = useDispatch();

  const {
    isValid,
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: ForgotPasswordSchema,

    onSubmit: (values) => {
      dispatch(forgotPassword (values));

    },
  });

  const { getInputClass, getInputAlert } = ShowRules(values, touched, errors);

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
          <div className="DivInput">
            <input
              className={getInputClass("email")}
              id="email"
              name="email"
              placeholder="E-mail"
              type="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            {getInputAlert("email")}
          </div>
          <button className="Button" type="submit" disabled={!isValid}>
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
