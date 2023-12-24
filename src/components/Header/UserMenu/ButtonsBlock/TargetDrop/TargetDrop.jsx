import { ModalBtn, ModalWrapper } from './TargetDrop.styled';
import looseFatIcon from '../../../../../images/icons-emoji/Lose fat image girl.png';
import maintainIcon from '../../../../../images/icons-emoji/Maintake image girl.png';
import muscleIcon from '../../../../../images/icons-emoji/Gain muscle.png';



export const TargetDrop = () => {



  return (
    <ModalWrapper>
      <div className="container">
        <div>
          <h3 className="modal-title">Target selection</h3>
          <p className="modal-text">
            The service will adjust your calorie intake to your goal
          </p>
        </div>
        <form>
          <ul>
            <li>
              <div className="hover">
                <label>
                  <input
                    className="radio_input"
                    type="radio"
                    name="goal"
                    id="loseFat"
                    value="Lose fat"
                  />
                  <div className="img_border">
                    <img src={looseFatIcon} alt="goal check lose fat" />
                  </div>
                  Lose Fat
                </label>
              </div>
            </li>
            <li>
              <div className="hover">
                <label>
                  <input
                    className="radio_input"
                    type="radio"
                    name="goal"
                    value="Maintain"
                    id="maintain"
                  />
                  <div className="img_border">
                    <img src={maintainIcon} alt="goal check maintain" />
                  </div>
                  Maintain
                </label>
              </div>
            </li>
            <div className="hover">
              <label>
                <input
                  className="radio_input"
                  type="radio"
                  name="goal"
                  value="Gain Muscle"
                  id="gainMuscle"
                />
                <div className="img_border">
                  <img src={muscleIcon} alt="goal check gain muscle" />
                </div>
                Gain muscle
              </label>
            </div>
          </ul>
        </form>
        <ModalBtn type="submit">Confirm</ModalBtn>
      </div>
    </ModalWrapper>
  );
};