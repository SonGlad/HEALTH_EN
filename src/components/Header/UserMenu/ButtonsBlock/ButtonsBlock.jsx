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
// import { TargetDrop } from './TargetDrop/TargetDrop';
// import { WeightDrop } from './WeightDrop/WeightDrop';
// import { ReactComponent as CloseIcon } from '../../../../images/icons-linear/close-circle.svg';
import weightIcon from '../../../../images/images/headreImg/Waight-image.svg';
import muscleIcon from '../../../../images/icons-emoji/Gain muscle.png';
import looseFatIconGirl from '../../../../images/icons-emoji/Lose fat image girl.png';
import looseFatIconMen from '../../../../images/icons-emoji/Lose fat image men.png';
import MaintakeIconGirl from '../../../../images/icons-emoji/Maintake image girl.png';
import MaintakeIconMen from '../../../../images/icons-emoji/Maintake image men.png';
import edit from '../../../../images/images/headreImg/edit-2.svg';
import arrowDown from '../../../../images/images/headreImg/arrow-down.svg';
import { useAuth } from '../../../../hooks/useAuth';



export const ButtonsBlock = () => {
  const { userGoal, userWeight, userGender } = useAuth();

  function capitalizeWords(str) {
    if (!str) {
      return str;
    }
    return str.replace(/\b\w/g, match => match.toUpperCase());
  }
  const inputString = userGoal;
  const result = capitalizeWords(inputString);


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

  return (
    <InfoOptions>
      {' '}
      <InfoBlockTarget>
        <IconContainer>
          <img src={getGoalImage(userGoal, userGender)} alt="goal icon" width={28} />
        </IconContainer>
        <TextContainer className='goal-text-cont'>
          <InfoBlockName>Goal</InfoBlockName>
          <InfoBlockText>
            {result}
            <ArrowSvg src={arrowDown} alt="arrow down" />
          </InfoBlockText>
        </TextContainer>
      </InfoBlockTarget>
      {/* <div className='target-dropdown'>
        <TargetDrop/>
        <button className='target-close-btn' type='button'>
          <CloseIcon className="close-target-icon" width={'16px'} />
        </button>
      </div> */}
      <InfoBlockWeight>
        <IconContainer>
          <img src={weightIcon} alt="weight" width={28} />
        </IconContainer>
        <TextContainer>
          <InfoBlockName>Weight</InfoBlockName>
          <InfoBlockText>
            {userWeight}
            <WeightKg>kg</WeightKg>
            <EditSvg src={edit} alt="edit" />
          </InfoBlockText>
        </TextContainer>
      </InfoBlockWeight>
      {/* <div className='weight-dropdown'>
        <button className='weight-close-btn' type='button'>
          <CloseIcon className="close-weight-icon" width={'16px'} />
        </button>
        <WeightDrop/>
      </div> */}
    </InfoOptions>
  );
};
