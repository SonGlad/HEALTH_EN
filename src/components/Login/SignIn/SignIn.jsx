import { useFormik } from 'formik';
import { DivSingIn } from './SignIn.styled';
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logIn } from '../../../redux/Auth/auth-operations';


const initialState = {
  email: '',
  password: '',
};


export const SignIn = () => {
  const dispatch = useDispatch();


  const formik = useFormik({
    initialValues: initialState,
    onSubmit: values => {
      dispatch(
        logIn(values)
      )
    },
  });


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
        <form className="Form" onSubmit={formik.handleSubmit}>
          <input
            className="Input"
            id="email"
            name="email"
            placeholder="E-mail"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <input
            className="Input"
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <button className="ButtonNext" type="submit">
            Sign In
          </button>
          <NavLink className="link link-color" to="/forgot-password">Forgot your password?</NavLink>
        </form>

        <div className="DivContainerSingUp">
          <p className="SingUpText">If you don't have an account yet</p>
          <div className="LinkToSingUp">
            <NavLink className="link" to="/signup">Sign up</NavLink>
          </div>
        </div>
      </div>
    </DivSingIn>
  );
};
