import { useFormik } from "formik";
import { DivSelectGender } from "./SelectGender.styled";
import { SelectGenderSchemas } from "../../../utils/validationSchemas";
import { updateGenderAgeForm } from "../../../redux/Auth/auth-slice";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { ShowRules } from "utils/showRules";

export const SelectGender = ({ onNext, onBack }) => {
  const dispatch = useDispatch();
  const { userGender, userAge } = useAuth();
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
      gender: userGender || "",
      age: userAge || "",
    },

    validationSchema: SelectGenderSchemas,

    onSubmit: (values) => {
      dispatch(updateGenderAgeForm(values));
    },
  });

  const { getInputClass, getInputAlert } = ShowRules(values, touched, errors);

  return (
    <DivSelectGender>
      <div className="ImageContainet">
        <span className="ImgSingUp" />
      </div>
      <div className="DivGenderContainer">
        <div className="TitleContainer">
          <h2 className="H2">Select gender, Age</h2>
          <p className="TitleText">
            Choose a goal so that we can help you effectively
          </p>
        </div>
        <form className="Form" onSubmit={handleSubmit}>
          <div className="DivRadioButton">
            <p className="LabelGenderButton">Gender</p>
            <div className="RadioButtonsContainer">
              <label className="LabelGender">
                <input
                  className="Input"
                  id="Male"
                  name="gender"
                  type="radio"
                  onChange={handleChange}
                  value="male"
                  onBlur={handleBlur}
                  checked={values.gender === "male"}
                />
                Male
              </label>
              <label className="LabelGender">
                <input
                  className="Input"
                  id="Female"
                  name="gender"
                  type="radio"
                  onChange={handleChange}
                  value="female"
                  onBlur={handleBlur}
                  checked={values.gender === "female"}
                />
                Female
              </label>
            </div>
            <div className="DivInput">
              <p className="LabelInput">Your age</p>
              <input
                className={getInputClass("age")}
                placeholder="Enter your age"
                id="YourAge"
                name="age"
                type="text"
                onChange={handleChange}
                value={values.age}
                onBlur={handleBlur}
              />
              {getInputAlert("age")}
            </div>
          </div>
          <button
            className="ButtonNext"
            type="submit"
            name="BtnNext"
            disabled={!values.gender || !isValid}
            onClick={(e) => {
              handleSubmit(e);
              onNext();
            }}
          >
            Next
          </button>
          <button
            className="ButtonBack"
            type="submit"
            name="BtnBack"
            onClick={(e) => {
              handleSubmit(e);
              onBack();
            }}
          >
            Back
          </button>
        </form>
      </div>
    </DivSelectGender>
  );
};
