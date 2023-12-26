import {
  DateContainer,
  DateDay,
  DateText,
  Modal,
  ModalText,
  ModalTitle,
  ModalWrapper,
  WeightForm,
  WeightFormBtn,
  WeightFormInput,
} from './WeightDrop.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { ShowRules } from '../../../../../utils/showRules';
import { WeightParametrsSchema } from '../../../../../utils/validationSchemas';
import { updateWeight } from '../../../../../redux/Data/data-operations';
import { closeModalWeight } from '../../../../../redux/Modal/modal-slice';


export const WeightDrop = () => {
  const dispatch = useDispatch();
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
      weight: '',
    },

    validationSchema: WeightParametrsSchema,

    onSubmit: values => {
      dispatch(updateWeight(values));
      dispatch(closeModalWeight());
    },
  });

  const { getInputClass, getInputAlert } = ShowRules(values, touched, errors);

  function getCurrentDateFormatted() {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}.${month}.${year}`;
  }
  const formattedDate = getCurrentDateFormatted();


  return (
    <ModalWrapper>
      <Modal>
        <ModalTitle>Enter your current weight</ModalTitle>
        <ModalText>You can record your weight once a day</ModalText>
        <DateContainer>
          <DateText>Today</DateText>
          <DateDay>{formattedDate}</DateDay>
        </DateContainer>
        <WeightForm onSubmit={handleSubmit}>
          <div>
            <label>
              <WeightFormInput
                className={getInputClass('weight')}
                placeholder="Enter your weight"
                // id="Weight"
                name="weight"
                type="text"
                onChange={handleChange}
                value={values.weight}
                onBlur={handleBlur}
              ></WeightFormInput>
              {getInputAlert('weight')}
            </label>
          </div>
          <WeightFormBtn
            className="ButtonConfirm"
            type="submit"
            name="BtnConfirm"
            disabled={!values.weight || !isValid}
          >
            Confirm
          </WeightFormBtn>
        </WeightForm>
      </Modal>
    </ModalWrapper>
  );
};
