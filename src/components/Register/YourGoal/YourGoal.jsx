import { useFormik } from "formik";
import { DivYourGoal } from "./YourGoal.styled";
import { YourGoalSchema } from "../../../utils/validationSchemas";
import { updateGoalForm } from "../../../redux/Auth/auth-slice";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";

export const YourGoal = ({ onNext, onBack }) => {
  const dispatch = useDispatch();
  const { userGoal } = useAuth();

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      goal: userGoal?.goal || "",
    },

    validationSchema: YourGoalSchema,

    onSubmit: (values) => {
      dispatch(updateGoalForm(values));
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
        <form className="Form" onSubmit={handleSubmit}>
          <div className="DivRadioButton">
            <label className="LabelGoal">
              <input
                className="Input"
                id="LoseFat"
                name="goal"
                type="radio"
                onChange={handleChange}
                value="lose fat"
                onBlur={handleBlur}
                checked={values.goal === "lose fat"}
              />
              Lose Fat
            </label>
            <label className="LabelGoal">
              <input
                className="Input"
                id="Maintain"
                name="goal"
                type="radio"
                onChange={handleChange}
                value="maintain"
                onBlur={handleBlur}
                checked={values.goal === "maintain"}
              />
              Maintain
            </label>

            <label className="LabelGoal">
              <input
                className="Input"
                id="GainMuscle"
                name="goal"
                type="radio"
                onChange={handleChange}
                value="gain muscle"
                onBlur={handleBlur}
                checked={values.goal === "gain muscle"}
              />
              Gain Muscle
            </label>
          </div>
          <button
            className="ButtonNext"
            type="submit"
            name="BtnNext"
            disabled={!values.goal}
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
    </DivYourGoal>
  );
};
