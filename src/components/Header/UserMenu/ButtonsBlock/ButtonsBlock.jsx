import {
  InfoOptions,
  InfoBlockTarget,
  InfoBlockWeight,
  IconContainer,
  TextContainer,
  InfoBlockName,
  InfoBlockText,
  ArrowSvg,
  WeightKg,
  EditSvg,
} from './ButtonsBlock.styled';
import { TargetDrop } from './TargetDrop/TargetDrop';
import { WeightDrop } from './WeightDrop/WeightDrop';
import { ReactComponent as CloseIcon } from '../../../../images/icons-linear/close-circle.svg';
import weightIcon from '../../../../images/images/headreImg/Waight-image.svg';
import muscleIcon from '../../../../images/icons-emoji/Gain muscle.png';
import looseFatIconGirl from '../../../../images/icons-emoji/Lose fat image girl.png';
import looseFatIconMen from '../../../../images/icons-emoji/Lose fat image men.png';
import MaintakeIconGirl from '../../../../images/icons-emoji/Maintake image girl.png';
import MaintakeIconMen from '../../../../images/icons-emoji/Maintake image men.png';
import edit from '../../../../images/images/headreImg/edit-2.svg';
import arrowDown from '../../../../images/images/headreImg/arrow-down.svg';
import { useAuth } from '../../../../hooks/useAuth';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../../../hooks/useModal';
import { openModalGoal } from '../../../../redux/Modal/modal-slice';
import { closeModalGoal } from '../../../../redux/Modal/modal-slice';
import { openModalWeight } from '../../../../redux/Modal/modal-slice';
import { closeModalWeight } from '../../../../redux/Modal/modal-slice';


export const ButtonsBlock = () => {
  const dispatch = useDispatch();
  const { isModalShowGoal, isModalShowWeight } = useModal();
  const { userGoal, userWeight, userGender } = useAuth();
  const weightDropdown = useRef(null);
  const targetDropdown = useRef(null);




  // const [isModalShowGoal, setIsModalShowGoal] = useState(false);
  // const [isModalShowWeight, setIsModalShowWeight] = useState(false);


  // Обробник кліків на цільовому блоку
  const handleClickBlockGoal = () => {
    if (!isModalShowGoal) {
      dispatch(openModalGoal());
      dispatch(closeModalWeight());
    } else {
      dispatch(closeModalGoal());
    }
  };

  // Обробник кліків на блоку зміни ваги
  const handleClickChangeWeight = () => {
    if (!isModalShowWeight) {
      dispatch(openModalWeight());
      dispatch(closeModalGoal());
    } else {
      dispatch(closeModalWeight());
    }
  };

  // Обробник кліків на кнопці закриття цільового блоку
  const handleClickCloseGoal = () => {
    dispatch(closeModalGoal());
  };
  const handleClickCloseWeight = () => {
    dispatch(closeModalWeight());
  };

  // Визначення класу для цільового блоку
  const showTargetSelection = () =>
    isModalShowGoal ? 'show-target-selection' : '';

  // Визначення класу для блоку ваги
  const showWeightSelection = () =>
    isModalShowWeight ? 'show-weight-selection' : '';

  const handleKeyDown = useCallback(
    event => {
      if (event.key === 'Escape') {
        dispatch(closeModalGoal());
        dispatch(closeModalWeight());
      }
    },
    [dispatch]
  );


  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);


  // Функція для перетворення слова, робить першу літеру великою
  function capitalizeWords(str) {
    if (!str) {
      return str;
    }
    return str.replace(/\b\w/g, match => match.toUpperCase());
  }

  // Виклик функції capitalizeWords зі словом користувача
  const inputString = userGoal;
  const result = capitalizeWords(inputString);


  // Визначення шляху до іконки цілі на основі цілі та статі користувача
  const getGoalImage = (userGoal, userGender) => {
    if (userGoal === 'gain muscle') {
      return muscleIcon;
    } else if (userGoal === 'maintain' && userGender === 'male') {
      return MaintakeIconMen;
    } else if (userGoal === 'maintain' && userGender === 'female') {
      return MaintakeIconGirl;
    } else if (userGoal === 'lose fat' && userGender === 'male') {
      return looseFatIconMen;
    } else if (userGoal === 'lose fat' && userGender === 'female') {
      return looseFatIconGirl;
    } else {
      return muscleIcon;
    }
  };







  // Визначення класу положення стрілки
  const toggleArrowSvg = () => (isModalShowGoal ? 'show-arrow-top' : '');


  return (
    <InfoOptions>
      <InfoBlockTarget onClick={handleClickBlockGoal}>
        <IconContainer>
          <img
            src={getGoalImage(userGoal, userGender)}
            alt="goal icon"
            width={28}
          />
        </IconContainer>
        <TextContainer className="goal-text-cont">
          <InfoBlockName className='goal-text'>Goal</InfoBlockName>
          <InfoBlockText className='goal-text'>
            {result}
            <ArrowSvg src={arrowDown} alt="arrow down" className={`arrow-down ${toggleArrowSvg()}`} />
          </InfoBlockText>
        </TextContainer>
      </InfoBlockTarget>
      <div className={`target-dropdown ${showTargetSelection()}`} ref={targetDropdown}>
        <TargetDrop />
        <button
          className="target-close-btn"
          type="button"
          onClick={handleClickCloseGoal}
        >
          <CloseIcon className="close-target-icon" width={'16px'} />
        </button>
      </div>
      <InfoBlockWeight
        className="handle-change-weight"
        onClick={handleClickChangeWeight}
      >
        <IconContainer>
          <img src={weightIcon} alt="weight" width={28} />
        </IconContainer>
        <TextContainer className='weight-text-cont'>
          <InfoBlockName className='weight-text'>Weight</InfoBlockName>
          <InfoBlockText className='weight-text'>
            {userWeight}
            <WeightKg>kg</WeightKg>
            <EditSvg src={edit} alt="edit" />
          </InfoBlockText>
        </TextContainer>
      </InfoBlockWeight>
      <div className={`weight-dropdown ${showWeightSelection()}`} ref={weightDropdown}>
        <button
          className="weight-close-btn"
          type="button"
          onClick={handleClickCloseWeight}
        >
          <CloseIcon className="close-weight-icon" width={'16px'} />
        </button>
        <WeightDrop />
      </div>
    </InfoOptions>
  );
};

