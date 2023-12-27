import { ModalContainer } from "./UpdateRecordModal.styled";
import { ReactComponent as BreakfastImg } from "../../../images/icons-illustration/breakfast-image.svg";
import { ReactComponent as LunchImg } from "../../../images/icons-illustration/lunch-image.svg";
import { ReactComponent as DinnerImg } from "../../../images/icons-illustration/dinner-image.svg";
import { ReactComponent as SnacksImg } from "../../../images/icons-illustration/snack-image.svg";
import { ReactComponent as CloseIcon } from "../../../images/icons-linear/close-circle.svg";
// import { useDispatch } from "react-redux";
import { useModal } from "hooks/useModal";
import { useFormik } from "formik";
import { useData } from "hooks/useUserData";

export const UpdateRecordModal = ({ handleClickClose }) => {
  //   const dispatch = useDispatch();
  const {
    breakfastMeals,
    // lunchMeals,
    // dinnerMeals,
    // snackMeals,

    // breakfastTotalFat,
    // breakfastTotalCarbonohidretes,
    // breakfasthTotalProtein,
    // breakfastTotalCalories,

    // lunchTotalCalories,
    // lunchTotalFat,
    // lunchTotalCarbonohidretes,
    // lunchTotalProtein,

    // dinnerTotalCalories,
    // dinnerTotalFat,
    // dinnerTotalCarbonohidretes,
    // dinnerTotalProtein,

    // snackTotalCalories,
    // snackTotalFat,
    // snackTotalCarbonohidretes,
    // snackTotalProtein,
  } = useData();
  console.log(breakfastMeals);

  const { mealType } = useModal();

  const getGoalBreakfast = (mealType) => {
    if (mealType === "breakfast") {
      const foundObject = breakfastMeals.find(
        (item) => item.mealId === "o_PCLpz7Og2qwYnO9QBir"
      );
      return foundObject;
    }
    // else if (mealType === "lunch") {
    //   return lunchTotalCarbonohidretes;
    // } else if (mealType === "dinner") {
    //   return dinnerTotalCarbonohidretes;
    // } else if (mealType === "snack") {
    //   return snackTotalCarbonohidretes;
    // }
  };

  //     const getGoalProtein = (mealType) => {
  //       if (mealType === "breakfast") {
  //         return breakfasthTotalProtein;
  //       } else if (mealType === "lunch") {
  //         return lunchTotalProtein;
  //       } else if (mealType === "dinner") {
  //         return dinnerTotalProtein;
  //       } else if (mealType === "snack") {
  //         return snackTotalProtein;
  //       }
  //     };

  //     const getGoalFat = (mealType) => {
  //       if (mealType === "breakfast") {
  //         return breakfastTotalFat;
  //       } else if (mealType === "lunch") {
  //         return lunchTotalFat;
  //       } else if (mealType === "dinner") {
  //         return dinnerTotalFat;
  //       } else if (mealType === "snack") {
  //         return snackTotalFat;
  //       }
  //     };

  //     const getGoalCalories = (mealType) => {
  //       if (mealType === "breakfast") {
  //         return breakfastTotalCalories;
  //       } else if (mealType === "lunch") {
  //         return lunchTotalCalories;
  //       } else if (mealType === "dinner") {
  //         return dinnerTotalCalories;
  //       } else if (mealType === "snack") {
  //         return snackTotalCalories;
  //       }
  //     };

  const {
    values,
    // isValid,
    handleBlur,
    handleChange,
    resetForm,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: getGoalBreakfast(mealType).name || "",
      carbohydrates: getGoalBreakfast(mealType).fat || "",
      //   protein: getGoalProtein(mealType) || "",
      //   fat: getGoalFat(mealType) || "",
      //   calories: getGoalCalories(mealType) || "",
    },

    onSubmit(values) {
      //   dispatch();
      handleClickClose();
    },
  });

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
      <CloseIcon className="ButtonX" type="button" onClick={handleClickClose} />
      <h2 className="H2">Update your meal</h2>
      <div className="DinerContainer">
        {getGoalImage(mealType)}
        <h3 className={"Title"}>Update {result}</h3>
      </div>
      <div className="FormContainer">
        <form className="FormAddFood" onSubmit={handleSubmit}>
          <input
            id="nameproduct"
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            placeholder="The name of the product or dish"
            required
          />
          <input
            className="rec-diar-mod-inp"
            id="carbonoh"
            type="number"
            name="carbohydrates"
            onChange={handleChange}
            value={values.carbohydrates}
            onBlur={handleBlur}
            placeholder="Carbonoh."
            required
            onKeyPress={(e) => {
              if (e.key === "-" || e.key === "e") {
                e.preventDefault();
              }
            }}
            min="0"
          />
          <input
            className="rec-diar-mod-inp"
            id="protein"
            type="number"
            name="protein"
            onChange={handleChange}
            value={values.protein}
            onBlur={handleBlur}
            placeholder="Protein"
            required
            onKeyPress={(e) => {
              if (e.key === "-" || e.key === "e") {
                e.preventDefault();
              }
            }}
            min="0"
          />
          <input
            className="rec-diar-mod-inp"
            id="fat"
            type="number"
            name="fat"
            onChange={handleChange}
            value={values.fat}
            onBlur={handleBlur}
            placeholder="Fat"
            required
            onKeyPress={(e) => {
              if (e.key === "-" || e.key === "e") {
                e.preventDefault();
              }
            }}
            min="0"
          />
          <input
            className="rec-diar-mod-inp"
            id="calories"
            type="number"
            name="calories"
            onChange={handleChange}
            value={values.calories}
            onBlur={handleBlur}
            placeholder="Calories"
            required
            onKeyPress={(e) => {
              if (e.key === "-" || e.key === "e") {
                e.preventDefault();
              }
            }}
            min="0"
          />
          <div
            className="ButtonDelete"
            type="button"
            onClick={() =>
              resetForm(
                (values.name = ""),
                (values.carbohydrates = ""),
                (values.protein = ""),
                (values.fat = ""),
                (values.calories = "")
              )
            }
          ></div>
        </form>
      </div>
      <div className="ButtonContainer">
        <button
          className="ButtonConfirm"
          type="button"
          onClick={handleSubmit}
          //   disabled={!isValid}
        >
          Update
        </button>
        <button
          className="ButtonCancel"
          type="button"
          onClick={handleClickClose}
        >
          Delete
        </button>
      </div>
    </ModalContainer>
  );
};
