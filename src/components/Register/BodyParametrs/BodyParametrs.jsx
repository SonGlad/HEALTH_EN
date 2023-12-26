import { useFormik } from "formik";
import { DivBodyParametrs } from "./BodyParametrs.styled";
import { BodyParametrsSchema } from "../../../utils/validationSchemas";
import { updateBodyParamFormHeight, updateBodyParamFormWeight} from "../../../redux/Auth/auth-slice";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { ShowRules } from "utils/showRules";

export const BodyParametrs = ({ onNext, onBack }) => {
  const dispatch = useDispatch();
  const { userHeight, userWeight } = useAuth();
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
      height: userHeight || "",
      weight: userWeight || "",
    },

    validationSchema: BodyParametrsSchema,

    onSubmit: (values) => {
      dispatch(updateBodyParamFormHeight(values.height));
      dispatch(updateBodyParamFormWeight(values.weight));
    },
  });

  const { getInputClass, getInputAlert } = ShowRules(values, touched, errors);

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
        <form className="Form" onSubmit={handleSubmit}>
          <div className="DivInputContainet">
            <label className="LabelInput">
              Height
              <input
                className={getInputClass("height")}
                placeholder="Enter your height"
                id="Height"
                name="height"
                type="text"
                onChange={handleChange}
                value={values.height}
                onBlur={handleBlur}
              />
              {getInputAlert("height")}
            </label>

            <label className="LabelInput">
              Weight
              <input
                className={getInputClass("weight")}
                placeholder="Enter your weight"
                id="Weight"
                name="weight"
                type="text"
                onChange={handleChange}
                value={values.weight}
                onBlur={handleBlur}
              />
              {getInputAlert("weight")}
            </label>
          </div>
          <button
            className="ButtonNext"
            type="submit"
            name="BtnNext"
            disabled={!values.height || !isValid}
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
    </DivBodyParametrs>
  );
};
