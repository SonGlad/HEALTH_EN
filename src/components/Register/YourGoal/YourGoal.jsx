import { useFormik } from "formik";
import { DivYourGoal } from "./YourGoal.styled";

export const YourGoal = ({ onNext, onBack }) => {
  const formik = useFormik({
    initialValues: {
      goal: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(formik.values);
    },
  });

  return (
    <DivYourGoal>
      <div className="ImageContainet">
        <span className="ImgSingUp" />
      </div>
      <div className="DivGoalContainer">
        <div className="TitleContainer">
          <h2 className="H2">Your goal</h2>
          <p className="TitleText">
            Choose a goal so that we can help you effectively
          </p>
        </div>
        <form className="Form" onSubmit={formik.handleSubmit}>
          <div className="DivRadioButton">
            <label className="LabelGoal">
              <input
                className="Input"
                id="LoseFat"
                name="goal"
                type="radio"
                onChange={formik.handleChange}
                value="Lose Fat"
              />
              Lose Fat
            </label>
            <label className="LabelGoal">
              <input
                className="Input"
                id="Maintain"
                name="goal"
                type="radio"
                onChange={formik.handleChange}
                value="Main tain"
              />
              Maintain
            </label>

            <label className="LabelGoal">
              <input
                className="Input"
                id="GainMuscle"
                name="goal"
                type="radio"
                onChange={formik.handleChange}
                value="Gain Muscle"
              />
              Gain Muscle
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
    </DivYourGoal>
  );
};
