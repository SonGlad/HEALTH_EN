import { ModalBtn, ModalWrapper } from './TargetDrop.styled';
import muscleIcon from '../../../../../images/icons-emoji/Gain muscle.png';
import looseFatIconGirl from '../../../../../images/icons-emoji/Lose fat image girl.png';
import looseFatIconMen from '../../../../../images/icons-emoji/Lose fat image men.png';
import MaintakeIconGirl from '../../../../../images/icons-emoji/Maintake image girl.png';
import MaintakeIconMen from '../../../../../images/icons-emoji/Maintake image men.png';
import { useFormik } from 'formik';
import { YourGoalSchema } from '../../../../../utils/validationSchemas';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { updateGoal } from '../../../../../redux/Data/data-operations';
import { closeModalGoal } from '../../../../../redux/Modal/modal-slice';


export const TargetDrop = () => {
  const dispatch = useDispatch();
  const { userGoal, userGender } = useAuth();

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      goal: userGoal || '',
    },

    validationSchema: YourGoalSchema,

    onSubmit: values => {
      dispatch(updateGoal(values));
      dispatch(closeModalGoal());
    },
  });


  return (
    <ModalWrapper>
      <div className="container">
        <div>
          <h3 className="modal-title">Target selection</h3>
          <p className="modal-text">
            The service will adjust your calorie intake to your goal
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <div className="hover">
                <label className="label">
                  <input
                    className="radio_input"
                    // id="LoseFat"
                    name="goal"
                    type="radio"
                    onChange={handleChange}
                    value="lose fat"
                    onBlur={handleBlur}
                    checked={values.goal === 'lose fat'}
                  />
                  <div className="img_border">
                    <img
                      src={
                        userGender === 'male'
                          ? looseFatIconMen
                          : looseFatIconGirl
                      }
                      alt="goal check lose fat"
                    />
                  </div>
                  <span className="label-text">Lose Fat</span>
                </label>
              </div>
            </li>
            <li>
              <div className="hover">
                <label className="label">
                  <input
                    className="radio_input"
                    // id="Maintain"
                    name="goal"
                    type="radio"
                    onChange={handleChange}
                    value="maintain"
                    onBlur={handleBlur}
                    checked={values.goal === 'maintain'}
                  />
                  <div className="img_border">
                    <img
                      src={
                        userGender === 'male'
                          ? MaintakeIconMen
                          : MaintakeIconGirl
                      }
                      alt="goal check maintain"
                    />
                  </div>
                  <span className="label-text">Maintain</span>
                </label>
              </div>
            </li>
            <div className="hover">
              <label className="label">
                <input
                  className="radio_input"
                  // id="GainMuscle"
                  name="goal"
                  type="radio"
                  onChange={handleChange}
                  value="gain muscle"
                  onBlur={handleBlur}
                  checked={values.goal === 'gain muscle'}
                />
                <div className="img_border">
                  <img src={muscleIcon} alt="goal check gain muscle" />
                </div>
                <span className="label-text">Gain muscle</span>
              </label>
            </div>
          </ul>
          <ModalBtn type="submit">Confirm</ModalBtn>
        </form>
      </div>
    </ModalWrapper>
  );
};
