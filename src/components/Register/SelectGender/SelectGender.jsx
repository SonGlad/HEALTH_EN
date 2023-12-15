import { useFormik } from "formik";
import { DivSelectGender } from "./SelectGender.styled";

export const SelectGender = ({ onNext, onBack }) => {
  const formik = useFormik({
    initialValues: {
      gender: "",
      age: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(formik.values);
    },
  });
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
        <form className="Form" onSubmit={formik.handleSubmit}>
          <div className="DivRadioButton">
            <p className="LabelGenderButton">Gender</p>
            <div className="RadioButtonsContainer">
              <label className="LabelGender">
                <input
                  className="Input"
                  id="Male"
                  name="gender"
                  type="radio"
                  onChange={formik.handleChange}
                  value="Male"
                />
                Male
              </label>
              <label className="LabelGender">
                <input
                  className="Input"
                  id="Female"
                  name="gender"
                  type="radio"
                  onChange={formik.handleChange}
                  value="Female"
                />
                Female
              </label>
            </div>

            <p className="LabelInput">Your age</p>
            <input
              className="TextInput"
              placeholder="Enter your age"
              id="YourAge"
              name="age"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>

          <button className="ButtonNext" type="submit" onClick={onNext}>
            Next
          </button>
        </form>

        <div className="DivButtonBack">
          <button className="ButtonBack" onClick={onBack}>
            Back
          </button>
        </div>
      </div>
    </DivSelectGender>
  );
};
