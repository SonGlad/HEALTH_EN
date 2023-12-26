import React, { useState } from "react";
import { ModalContainer } from "./RecordDiaryModal.styled";
import { useFormik } from "formik";
import { nanoid } from "nanoid";
import { useModal } from "hooks/useModal";
import { ReactComponent as BreakfastImg } from "../../../images/icons-illustration/breakfast-image.svg";
import { ReactComponent as LunchImg } from "../../../images/icons-illustration/lunch-image.svg";
import { ReactComponent as DinnerImg } from "../../../images/icons-illustration/dinner-image.svg";
import { ReactComponent as SnacksImg } from "../../../images/icons-illustration/snack-image.svg";
import { useDispatch } from "react-redux";
import {
  deliverMealsBreakfast,
  deliverMealsLunch,
  deliverMealsDinner,
  deliverMealsSnack,
} from "../../../redux/Data/data-slice";
import { useData } from "hooks/useUserData";

export const RecordDiaryModal = ({ handleClickClose }) => {
  const dispatch = useDispatch();
  const [forms, setForms] = useState(["o_PCLpz7Og2qwYnO9QBir"]);
  const { mealType } = useModal();
  const { breakfastMeals, lunchMeals, dinnerMeals, snackMeals } = useData();
  console.log(
    "breakfastMeals",
    breakfastMeals,
    "lunchMeals",
    lunchMeals,
    "dinnerMeals",
    dinnerMeals,
    "snackMeals",
    snackMeals
  );

  const handleAddForm = () => {
    const id = nanoid();
    setForms((prevForms) => [...prevForms, id]);
  };

  const handleRemoveForm = (id) => {
    setForms((prevForms) => prevForms.filter((formId) => formId !== id));
  };

  const { values, isValid, handleBlur, handleChange, resetForm } = useFormik({
    initialValues: {},
    validate: (values) => {
      const errors = {};
      forms.forEach((formId) => {
        if (!values[`name${formId}`]) {
          errors[`name${formId}`] = "Required";
        }
        if (!values[`carbohydrates${formId}`]) {
          errors[`carbohydrates${formId}`] = "Required";
        }
        if (!values[`protein${formId}`]) {
          errors[`protein${formId}`] = "Required";
        }
        if (!values[`fat${formId}`]) {
          errors[`fat${formId}`] = "Required";
        }
        if (!values[`calories${formId}`]) {
          errors[`calories${formId}`] = "Required";
        }
      });
      return errors;
    },
  });

  const handleConfirm = () => {
    const meals = forms.map((formId) => {
      const formDataForForm = { mealId: formId };
      Object.keys(values).forEach((key) => {
        if (key.includes(formId)) {
          formDataForForm[key.replace(`${formId}`, "")] = values[key];
        }
      });
      return formDataForForm;
    });

    const breakfast = { breakfast: { meals } };
    const lunch = { lunch: { meals } };
    const dinner = { dinner: { meals } };
    const snack = { snack: { meals } };

    if (mealType === "breakfast") {
      dispatch(deliverMealsBreakfast(breakfast));
      resetForm();
      handleClickClose();
    } else if (mealType === "lunch") {
      dispatch(deliverMealsLunch(lunch));
      resetForm();
      handleClickClose();
    } else if (mealType === "dinner") {
      dispatch(deliverMealsDinner(dinner));
      resetForm();
      handleClickClose();
    } else if (mealType === "snack") {
      dispatch(deliverMealsSnack(snack));
      resetForm();
      handleClickClose();
    }
  };

  function capitalizeWords(str) {
    if (!str) {
      return str;
    }
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }
  const inputString = mealType;
  const result = capitalizeWords(inputString);

  const getGoalImage = (mealType) => {
    if (mealType === "breakfast") {
      return <BreakfastImg className="Img" />;
    } else if (mealType === "lunch") {
      return <LunchImg className="Img" />;
    } else if (mealType === "dinner") {
      return <DinnerImg className="Img" />;
    } else if (mealType === "snack") {
      return <SnacksImg className="Img" />;
    }
  };

  return (
    <ModalContainer>
      <h2 className="H2">Record your meal</h2>
      <div className="DinerContainer">
        {getGoalImage(mealType)}
        <h3 className={"Title"}>{result}</h3>
      </div>
      <div className="FormContainer">
        {forms.map((formId) => (
          <form className="FormAddFood" key={formId}>
            <input
              id="nameproduct"
              type="text"
              name={`name${formId}`}
              onChange={handleChange}
              value={values[`name${formId}`] || ""}
              onBlur={handleBlur}
              placeholder="The name of the product or dish"
              required
            />
            <input
              id="carbonoh"
              type="text"
              name={`carbohydrates${formId}`}
              onChange={handleChange}
              value={values[`carbohydrates${formId}`] || ""}
              onBlur={handleBlur}
              placeholder="Carbonoh."
              required
            />
            <input
              id="protein"
              type="text"
              name={`protein${formId}`}
              onChange={handleChange}
              value={values[`protein${formId}`] || ""}
              onBlur={handleBlur}
              placeholder="Protein"
              required
            />
            <input
              id="fat"
              type="text"
              name={`fat${formId}`}
              onChange={handleChange}
              value={values[`fat${formId}`] || ""}
              onBlur={handleBlur}
              placeholder="Fat"
              required
            />
            <input
              id="calories"
              type="text"
              name={`calories${formId}`}
              onChange={handleChange}
              value={values[`calories${formId}`] || ""}
              onBlur={handleBlur}
              placeholder="Calories"
              required
            />
            <div
              className="ButtonDelete"
              type="button"
              onClick={() => handleRemoveForm(formId)}
            ></div>
          </form>
        ))}

        <button className="ButtonAdd" type="button" onClick={handleAddForm}>
          <div className="ImgAdd" />
          Add more
        </button>
      </div>
      <div className="ButtonContainer">
        <button
          className="ButtonConfirm"
          type="button"
          onClick={handleConfirm}
          disabled={!isValid}
        >
          Confirm
        </button>
        <button
          className="ButtonCancel"
          type="button"
          onClick={handleClickClose}
        >
          Cancel
        </button>
      </div>
    </ModalContainer>
  );
};
