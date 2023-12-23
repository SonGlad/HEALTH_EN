import { useFormik } from "formik";
import { DivYourActivity } from "./YourActivity.styled";
import { YourActivitySchema } from "../../../utils/validationSchemas";
import { updateActivityForm } from "../../../redux/Auth/auth-slice";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { register } from "../../../redux/Auth/auth-operations";

export const YourActivity = ({ onBack }) => {
  const dispatch = useDispatch();
  const {
    userActivity,
    userName,
    userEmail,
    userPassword,
    userGoal,
    userGender,
    userAge,
    userHeight,
    userWeight,
  } = useAuth();

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      activity: userActivity?.activity || "",
    },

    validationSchema: YourActivitySchema,

    onSubmit: (values) => {
      dispatch(updateActivityForm(values));
    },
  });

  const handleSecondSubmit = (event) => {
    event.preventDefault();
    dispatch(
      register({
        name: userName,
        email: userEmail,
        password: userPassword,
        goal: userGoal.goal,
        gender: userGender,
        age: userAge,
        height: userHeight,
        weight: userWeight,
        activity: values.activity || userActivity,
      })
    );
  };

  return (
    <DivYourActivity>
      <div className="ImageContainet">
        <span className="ImgSingUp" />
      </div>
      <div className="DivActivityContainer">
        <div className="TitleContainer">
          <h2 className="H2">Your Activity</h2>
          <p className="TitleText">
            To correctly calculate calorie and water intake
          </p>
        </div>

        <form className="FormRadioButton" onSubmit={handleSubmit}>
          <label className="LabelActivity">
            <input
              className="Input"
              id="1.2"
              name="activity"
              type="radio"
              onChange={handleChange}
              value="1.2"
              onBlur={handleBlur}
              checked={values.activity === "1.2"}
            />
            1.2 - if you do not have physical activity and sedentary work
          </label>
          <label className="LabelActivity">
            <input
              className="Input"
              id="1.375"
              name="activity"
              type="radio"
              onChange={handleChange}
              value="1.375"
              onBlur={handleBlur}
              checked={values.activity === "1.375"}
            />
            1.375 - if you do short runs or light gymnastics 1-3 times a week
          </label>

          <label className="LabelActivity">
            <input
              className="Input"
              id="1.55"
              name="activity"
              type="radio"
              onChange={handleChange}
              value="1.55"
              onBlur={handleBlur}
              checked={values.activity === "1.55"}
            />
            1.55 - if you play sports with average loads 3-5 times a week
          </label>

          <label className="LabelActivity">
            <input
              className="Input"
              id="1.725"
              name="activity"
              type="radio"
              onChange={handleChange}
              value="1.725"
              onBlur={handleBlur}
              checked={values.activity === "1.725"}
            />
            1.725 - if you train fully 6-7 times a week
          </label>

          <label className="LabelActivity">
            <input
              style={{ width: "22px" }}
              className="Input"
              id="1.9"
              name="activity"
              type="radio"
              onChange={handleChange}
              value="1.9"
              onBlur={handleBlur}
              checked={values.activity === "1.9"}
            />
            1.9 - if your work is related to physical labor, you train 2 times a
            day and include strength exercises in your training program
          </label>
          <button
            className="ButtonSingUp"
            type="button"
            onClick={handleSecondSubmit}
            disabled={!values.activity}
          >
            Sing Up
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
    </DivYourActivity>
  );
};
