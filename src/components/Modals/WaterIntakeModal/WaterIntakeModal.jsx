import { useFormik } from "formik";
import { WaterModalContainer } from "./WaterIntakeModal.styled";

export const WaterintakeModal = ({ handleClickClose }) => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      water: "",
    },

    onSubmit: (values) => {
      console.log(values.water);
      handleClickClose();
    },
  });

  return (
    <WaterModalContainer>
      <h2 className="H2">Add water intake</h2>
      <form className="Form" onSubmit={handleSubmit}>
        <label className="LabelInput">
          How much water
          <input
            className="Input"
            name="water"
            type="text"
            placeholder="Enter milliliters"
            onChange={handleChange}
            value={values.water}
            onBlur={handleBlur}
          ></input>
        </label>
        <button
          className="ButtonConfirm"
          type="submit"
          disabled={!values.water}
        >
          Confirm
        </button>
      </form>
      <button className="ButtonCancel" type="submit" onClick={handleClickClose}>
        Cancel
      </button>
    </WaterModalContainer>
  );
};
