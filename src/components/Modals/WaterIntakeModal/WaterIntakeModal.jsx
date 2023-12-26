import { useFormik } from "formik";
import { WaterModalContainer } from "./WaterIntakeModal.styled";
import { addWaterIntake } from "../../../redux/Data/data-operations";
import { useData } from "hooks/useUserData";
import { useDispatch } from "react-redux";


export const WaterintakeModal = ({ handleClickClose }) => {
  const dispatch = useDispatch();
  const {currentWater} = useData();
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({

    initialValues: {
      water: "",
    },

    onSubmit: (values) => {
      const currentWaterValue = currentWater !== null ? currentWater : 0;
      const newWater = parseInt(values.water, 10) + currentWaterValue;
      dispatch(
        addWaterIntake({
          water: newWater,
        })
      )
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
            className="water-input"
            name="water"
            type="number"
            placeholder="Enter milliliters"
            onChange={handleChange}
            value={values.water}
            onBlur={handleBlur}
            onKeyPress={(e) => {
              if (e.key === "-" || e.key === "e") {
                e.preventDefault();
              }
            }}
            min="0"
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
