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
import { useFormik, Formik } from 'formik';



  
export const WeightDrop = () => {
    function getCurrentDateFormatted() {
      const currentDate = new Date();
      const day = currentDate.getDate().toString().padStart(2, '0');
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const year = currentDate.getFullYear();
      return `${day}.${month}.${year}`;
    }
    const formattedDate = getCurrentDateFormatted();
    const { handleChange } = useFormik({
      initialValues: {
        gender: '',
        age: '',
      },
    });

    
  
    return (
      <ModalWrapper>
        <Modal>
          <ModalTitle>Enter your current weight</ModalTitle>
          <ModalText>You can record your weight once a day</ModalText>
          <DateContainer>
            <DateText>Today</DateText>
            <DateDay>{formattedDate}</DateDay>
          </DateContainer>
          <Formik>
            <WeightForm>
              <div>
                <label>
                  <WeightFormInput
                    id="weight"
                    name="weight"
                    placeholder="Enter your weight"
                    type="weight"
                    onChange={handleChange}
                    // value={values.email}
                    // onBlur={handleBlur}
                    // checked={values.goal === 'maintain'}
                  ></WeightFormInput>
                </label>
              </div>
              <WeightFormBtn
                className="ButtonConfirm"
                type="submit"
                name="BtnConfirm"
              >
                Confirm
              </WeightFormBtn>
            </WeightForm>
          </Formik>
        </Modal>
      </ModalWrapper>
    );
};