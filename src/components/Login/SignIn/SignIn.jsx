import { useFormik } from "formik";
import { DivSingIn } from "./SignIn.styled";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/Auth/auth-operations";
import { SigninSchema } from "utils/validationSchemas";
import { useEffect } from "react";
import { ShowRules } from "utils/showRules";


export const SignIn = () => {
  const dispatch = useDispatch();

  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: SigninSchema,

    onSubmit: (values) => {
      dispatch(logIn(values));
    },
  });


  useEffect(() => {
  }, [errors, values]);


  const {
    showPassword,
    getInputClass,
    getInputAlert,
    getHidePassword,
  } = ShowRules(values, touched, errors);


  return (
    <DivSingIn>
      <div className="ImageContainet">
        <span className="ImgSingIn" />
      </div>
      <div>
        <div className="TitleContainer">
          <h2 className="H2">Sign in</h2>
          <p className="TitleText">You need to login to use the service</p>
        </div>
        <form className="Form" onSubmit={handleSubmit}>
          <div className="InputContainer">
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
          <div className="InputContainer" id="password">
            <input
              className={getInputClass("password")}
              id="password"
              name="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            {getInputAlert("password")}
            {values.password && getHidePassword()}
          </div>

          <button
            className="ButtonNext"
            type="submit"
            disabled={!values.password || !isValid}
          >
            Sign In
          </button>
          <NavLink className="link link-color" to="/forgot-password">
            Forgot your password?
          </NavLink>
        </form>
        <div className="DivContainerSingUp">
          <p className="SingUpText">If you don't have an account yet</p>
          <div className="LinkToSingUp">
            <NavLink className="link" to="/signup">
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
    </DivSingIn>
  );
};
