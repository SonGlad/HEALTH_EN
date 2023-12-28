import { ModalContainer } from './UpdateRecordModal.styled';
import { ReactComponent as BreakfastImg } from '../../../images/icons-illustration/breakfast-image.svg';
import { ReactComponent as LunchImg } from '../../../images/icons-illustration/lunch-image.svg';
import { ReactComponent as DinnerImg } from '../../../images/icons-illustration/dinner-image.svg';
import { ReactComponent as SnacksImg } from '../../../images/icons-illustration/snack-image.svg';
import { ReactComponent as CloseIcon } from '../../../images/icons-linear/close-circle.svg';
import { useDispatch } from 'react-redux';
import { useModal } from 'hooks/useModal';
import { useFormik } from 'formik';
import { useData } from 'hooks/useUserData';
import {
  updateFoodId,
  deleteFoodId,
} from '../../../redux/Data/data-operations';
import { ModalFoodSchema } from 'utils/validationSchemas';

export const UpdateRecordModal = ({ handleClickClose }) => {
  const dispatch = useDispatch();
  const { breakfastMeals, lunchMeals, dinnerMeals, snackMeals } = useData();

  const { mealType } = useModal();

  const getGoalMeals = mealType => {
    if (mealType.mealType === 'breakfast') {
      const foundBreakfast = breakfastMeals.find(
        item => item.mealId === mealType.mealId
      );
      return foundBreakfast;
    } else if (mealType.mealType === 'lunch') {
      const foundLunch = lunchMeals.find(
        item => item.mealId === mealType.mealId
      );
      return foundLunch;
    } else if (mealType.mealType === 'dinner') {
      const foundDinner = dinnerMeals.find(
        item => item.mealId === mealType.mealId
      );
      return foundDinner;
    } else if (mealType.mealType === 'snack') {
      const foundSnack = snackMeals.find(
        item => item.mealId === mealType.mealId
      );
      return foundSnack;
    }
  };

  const {
    isValid,
    values,
    touched,
    handleBlur,
    handleChange,
    resetForm,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: getGoalMeals(mealType).name || '',
      carbohydrates: getGoalMeals(mealType).carbohydrates || '',
      protein: getGoalMeals(mealType).protein || '',
      fat: getGoalMeals(mealType).fat || '',
      calories: getGoalMeals(mealType).calories || '',
    },

    validationSchema: ModalFoodSchema,

    onSubmit(values) {
      const meals = { id: mealType.mealId, data: values };
      dispatch(updateFoodId(meals));
      handleClickClose();
    },
  });

  const handleDeleteById = () => {
    const id = mealType.mealId;
    dispatch(deleteFoodId(id));
    handleClickClose();
  };

  function capitalizeWords(str) {
    if (!str) {
      return str;
    }
    return str.replace(/\b\w/g, match => match.toUpperCase());
  }
  const inputString = mealType.mealType;
  const result = capitalizeWords(inputString);

  const getGoalImage = mealType => {
    if (mealType.mealType === 'breakfast') {
      return <BreakfastImg className="Img" />;
    } else if (mealType.mealType === 'lunch') {
      return <LunchImg className="Img" />;
    } else if (mealType.mealType === 'dinner') {
      return <DinnerImg className="Img" />;
    } else if (mealType.mealType === 'snack') {
      return <SnacksImg className="Img" />;
    }
  };

  const handleInput = (e, maxDigits) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    if (e.target.value.length > maxDigits) {
      e.target.value = e.target.value.slice(0, maxDigits);
    }
    handleChange(e);
  };

  return (
    <ModalContainer>
      <CloseIcon className="ButtonX" type="button" onClick={handleClickClose} />
      <h2 className="H2">Update your meal</h2>
      <div className="DinerContainer">
        {getGoalImage(mealType)}
        <h3 className={'Title'}>Update {result}</h3>
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
            onInput={e => handleInput(e, 3)}
            onChange={handleChange}
            value={values.carbohydrates}
            onBlur={handleBlur}
            placeholder="Carbonoh."
            required
            onKeyPress={e => {
              if (e.key === '-' || e.key === 'e') {
                e.preventDefault();
              }
            }}
            min="0"
            max="999"
          />
          <input
            className="rec-diar-mod-inp"
            id="protein"
            type="number"
            name="protein"
            onChange={handleChange}
            onInput={e => handleInput(e, 3)}
            value={values.protein}
            onBlur={handleBlur}
            placeholder="Protein"
            required
            onKeyPress={e => {
              if (e.key === '-' || e.key === 'e') {
                e.preventDefault();
              }
            }}
            min="0"
            max={999}
            maxLength={3}
          />
          <input
            className="rec-diar-mod-inp"
            id="fat"
            type="number"
            name="fat"
            onChange={handleChange}
            onInput={e => handleInput(e, 3)}
            value={values.fat}
            onBlur={handleBlur}
            placeholder="Fat"
            required
            onKeyPress={e => {
              if (e.key === '-' || e.key === 'e') {
                e.preventDefault();
              }
            }}
            min="0"
            max={999}
            maxLength={3}
          />
          <input
            className="rec-diar-mod-inp"
            id="calories"
            type="number"
            name="calories"
            onChange={handleChange}
            onInput={e => handleInput(e, 3)}
            value={values.calories}
            onBlur={handleBlur}
            placeholder="Calories"
            required
            onKeyPress={e => {
              if (e.key === '-' || e.key === 'e') {
                e.preventDefault();
              }
            }}
            min="0"
            max={999}
            maxLength={3}
          />
          <div
            className="ButtonDelete"
            type="button"
            onClick={() =>
              resetForm(
                (values.name = ''),
                (values.carbohydrates = ''),
                (values.protein = ''),
                (values.fat = ''),
                (values.calories = '')
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
          disabled={!isValid || !Object.keys(touched).length}
        >
          Update
        </button>
        <button
          className="ButtonCancel"
          type="button"
          onClick={handleDeleteById}
        >
          Delete
        </button>
      </div>
    </ModalContainer>
  );
};
