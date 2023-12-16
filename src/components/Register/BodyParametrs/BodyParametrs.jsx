import { useFormik } from "formik";
import { DivBodyParametrs } from "./BodyParametrs.styled";

export const BodyParametrs = ({ onNext, onBack }) => {
  const formik = useFormik({
    initialValues: {
      height: "",
      weight: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(formik.values);
    },
  });
  return (
    <DivBodyParametrs>
      <div className="ImageContainet">
        <span className="ImgSingUp" />
      </div>
      <div className="DivBodyContainer">
        <div className="TitleContainer">
          <h2 className="H2">Body parameters</h2>
          <p className="TitleText">
            Enter your parameters for correct performance tracking
          </p>
        </div>
        <form className="Form" onSubmit={formik.handleSubmit}>
          <div className="DivInputContainet">
            <label className="LabelInput">
              Height
              <input
                className="TextInput"
                placeholder="Enter your height"
                id="Height"
                name="height"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </label>

            <label className="LabelInput">
              Weight
              <input
                className="TextInput"
                placeholder="Enter your weight"
                id="Weight"
                name="weight"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </label>
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
    </DivBodyParametrs>
  );
};
