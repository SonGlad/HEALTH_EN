import { useFormik } from "formik";
import { DivSingUp } from "./SignUp.styled";
import { NavLink } from "react-router-dom";

export const SignUp = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(formik.values);
    },
  });
  return (
    <DivSingUp>
      <div className="ImageContainet">
        <span className="ImgSingUp" />
      </div>
      <div>
        <div className="TitleContainer">
          <h2 className="H2">Sign up</h2>
          <p className="TitleText">You need to register to use the service</p>
        </div>
        <form className="Form" onSubmit={formik.handleSubmit}>
          <input
            className="Input"
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
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
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />

          <button className="ButtonNext" type="submit" onClick={onNext}>
            Next
          </button>
        </form>

        <div className="DivContainerSingIn">
          <p className="SingInText">Do you already have an account?</p>
          <div className="LinkToSingIn">
            <NavLink to="/signin">Sign in</NavLink>
          </div>
        </div>
      </div>
    </DivSingUp>
  );
};
