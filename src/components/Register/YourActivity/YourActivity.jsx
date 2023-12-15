import { useFormik } from "formik";
import { DivYourActivity } from "./YourActivity.styled";

export const YourActivity = ({ onBack }) => {
  const formik = useFormik({
    initialValues: {
      activity: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(formik.values);
    },
  });

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
        <form className="Form" onSubmit={formik.handleSubmit}>
          <div className="DivRadioButton">
            <label className="LabelActivity">
              <input
                className="Input"
                id="1.2"
                name="activity"
                type="radio"
                onChange={formik.handleChange}
                value="1.2 - if you do not have physical activity and sedentary work"
              />
              1.2 - if you do not have physical activity and sedentary work
            </label>
            <label className="LabelActivity">
              <input
                className="Input"
                id="1.375"
                name="activity"
                type="radio"
                onChange={formik.handleChange}
                value="1.375 - if you do short runs or light gymnastics 1-3 times a week"
              />
              1.375 - if you do short runs or light gymnastics 1-3 times a week
            </label>

            <label className="LabelActivity">
              <input
                className="Input"
                id="1.55"
                name="activity"
                type="radio"
                onChange={formik.handleChange}
                value="1.55 - if you play sports with average loads 3-5 times a week"
              />
              1.55 - if you play sports with average loads 3-5 times a week
            </label>

            <label className="LabelActivity">
              <input
                className="Input"
                id="1.725"
                name="activity"
                type="radio"
                onChange={formik.handleChange}
                value="1.725 ​​- if you train fully 6-7 times a week"
              />
              1.725 ​​- if you train fully 6-7 times a week
            </label>

            <label className="LabelActivity LabelLast">
              <input
                className="Input"
                id="1.9"
                name="activity"
                type="radio"
                onChange={formik.handleChange}
                value="1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"
              />
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </label>
          </div>
          <div className="DivButtonSingUp">
            <button className="ButtonSingUp" type="submit">
              Sing Up
            </button>
          </div>
        </form>

        <div className="DivButtonBack">
          <button className="ButtonBack" onClick={onBack}>
            Back
          </button>
        </div>
      </div>
    </DivYourActivity>
  );
};
