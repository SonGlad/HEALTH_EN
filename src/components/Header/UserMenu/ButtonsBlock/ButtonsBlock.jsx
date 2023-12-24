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
import edit from '../../../../images/images/headreImg/edit-2.svg';
import fatMen from '../../../../images/images/headreImg/Lose-fat-image-men.svg';
import arrowDown from '../../../../images/images/headreImg/arrow-down.svg';
import { useAuth } from '../../../../hooks/useAuth';

export const ButtonsBlock = () => {
  const { userGoal, userWeight } = useAuth();

  function capitalizeWords(str) {
    if (!str) {
      return str;
    }
    return str.replace(/\b\w/g, match => match.toUpperCase());
  }
  const inputString = userGoal;
  const result = capitalizeWords(inputString);

  return (
    <InfoOptions>
      {' '}
      <InfoBlockTarget>
        <IconContainer>
          <img src={fatMen} alt="goal icon" width={28} />
        </IconContainer>
        <TextContainer>
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
