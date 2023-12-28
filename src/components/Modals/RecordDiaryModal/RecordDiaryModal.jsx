import React, { useState } from 'react';
import { ModalContainer } from './RecordDiaryModal.styled';
import { useFormik } from 'formik';
import { nanoid } from 'nanoid';
import { useModal } from 'hooks/useModal';
import { ReactComponent as BreakfastImg } from '../../../images/icons-illustration/breakfast-image.svg';
import { ReactComponent as LunchImg } from '../../../images/icons-illustration/lunch-image.svg';
import { ReactComponent as DinnerImg } from '../../../images/icons-illustration/dinner-image.svg';
import { ReactComponent as SnacksImg } from '../../../images/icons-illustration/snack-image.svg';
import { useDispatch } from 'react-redux';
import { addFood } from '../../../redux/Data/data-operations';

export const RecordDiaryModal = ({ handleClickClose }) => {
  const dispatch = useDispatch();
  const [forms, setForms] = useState([nanoid()]);
  const { mealType } = useModal();

  const handleAddForm = () => {
    const id = nanoid();
    setForms(prevForms => [...prevForms, id]);
  };
  const handleRemoveForm = id => {
    setForms(prevForms => prevForms.filter(formId => formId !== id));
  };

  const { values, isValid, touched, handleBlur, handleChange, resetForm } =
    useFormik({
      initialValues: {},
      validate: values => {
        const errors = {};
        forms.forEach(formId => {
          if (!values[`name${formId}`]) {
            errors[`name${formId}`] = 'Required';
          }
          if (!values[`carbohydrates${formId}`]) {
            errors[`carbohydrates${formId}`] = 'Required';
          }
          if (!values[`protein${formId}`]) {
            errors[`protein${formId}`] = 'Required';
          }
          if (!values[`fat${formId}`]) {
            errors[`fat${formId}`] = 'Required';
          }
          if (!values[`calories${formId}`]) {
            errors[`calories${formId}`] = 'Required';
          }
        });
        return errors;
      },
    });

  const handleConfirm = () => {
    const meals = forms.map(formId => {
      const formDataForForm = { mealId: formId };
      Object.keys(values).forEach(key => {
        if (key.includes(formId)) {
          formDataForForm[key.replace(`${formId}`, '')] = values[key];
        }
      });
      return formDataForForm;
    });

    const breakfast = { breakfast: { meals } };
    const lunch = { lunch: { meals } };
    const dinner = { dinner: { meals } };
    const snack = { snack: { meals } };

    if (mealType === 'breakfast') {
      dispatch(addFood(breakfast));
      resetForm();
      handleClickClose();
    } else if (mealType === 'lunch') {
      dispatch(addFood(lunch));
      resetForm();
      handleClickClose();
    } else if (mealType === 'dinner') {
      dispatch(addFood(dinner));
      resetForm();
      handleClickClose();
    } else if (mealType === 'snack') {
      dispatch(addFood(snack));
      resetForm();
      handleClickClose();
    }
  };

  function capitalizeWords(str) {
    if (!str) {
      return str;
    }
    return str.replace(/\b\w/g, match => match.toUpperCase());
  }
  const inputString = mealType;
  const result = capitalizeWords(inputString);

  const getGoalImage = mealType => {
    if (mealType === 'breakfast') {
      return <BreakfastImg className="Img" />;
    } else if (mealType === 'lunch') {
      return <LunchImg className="Img" />;
    } else if (mealType === 'dinner') {
      return <DinnerImg className="Img" />;
    } else if (mealType === 'snack') {
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
      <h2 className="H2">Record your meal</h2>
      <div className="DinerContainer">
        {getGoalImage(mealType)}
        <h3 className={'Title'}>{result}</h3>
      </div>
      <div className="FormContainer">
        {forms.map(formId => (
          <form className="FormAddFood" key={formId}>
            <input
              id="nameproduct"
              type="text"
              name={`name${formId}`}
              onChange={handleChange}
              value={values[`name${formId}`] || ''}
              onBlur={handleBlur}
              placeholder="The name of the product or dish"
              required
            />
            <input
              className="rec-diar-mod-inp"
              id="carbonoh"
              type="number"
              name={`carbohydrates${formId}`}
              onChange={handleChange}
              onInput={e => handleInput(e, 3)}
              value={values[`carbohydrates${formId}`] || ''}
              onBlur={handleBlur}
              placeholder="Carbonoh."
              required
              onKeyPress={e => {
                if (e.key === '-' || e.key === 'e') {
                  e.preventDefault();
                }
              }}
              min="0"
              max={999}
            />
            <input
              className="rec-diar-mod-inp"
              id="protein"
              type="number"
              name={`protein${formId}`}
              onChange={handleChange}
              value={values[`protein${formId}`] || ''}
              onBlur={handleBlur}
              onInput={e => handleInput(e, 3)}
              placeholder="Protein"
              required
              onKeyPress={e => {
                if (e.key === '-' || e.key === 'e') {
                  e.preventDefault();
                }
              }}
              min="0"
              max={999}
            />
            <input
              className="rec-diar-mod-inp"
              id="fat"
              type="number"
              name={`fat${formId}`}
              onChange={handleChange}
              value={values[`fat${formId}`] || ''}
              onBlur={handleBlur}
              onInput={e => handleInput(e, 3)}
              placeholder="Fat"
              required
              onKeyPress={e => {
                if (e.key === '-' || e.key === 'e') {
                  e.preventDefault();
                }
              }}
              min="0"
              max={999}
            />
            <input
              className="rec-diar-mod-inp"
              id="calories"
              type="number"
              name={`calories${formId}`}
              onChange={handleChange}
              value={values[`calories${formId}`] || ''}
              onBlur={handleBlur}
              onInput={e => handleInput(e, 3)}
              placeholder="Calories"
              required
              onKeyPress={e => {
                if (e.key === '-' || e.key === 'e') {
                  e.preventDefault();
                }
              }}
              min="0"
              max={999}
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
          disabled={!isValid || !Object.keys(touched).length}
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
