import {
  InfoOptions,
  InfoBlock,
  IconContainer,
  TextContainer,
  InfoBlockName,
  InfoBlockText,
  ArrowSvg,
  WeightKg,
  EditSvg,
} from './ButtonsBlock.styled';

import weightIcon from '../../../../images/images/headreImg/Waight-image.svg';
import edit from '../../../../images/images/headreImg/edit-2.svg';
import fatMen from '../../../../images/images/headreImg/Lose-fat-image-men.svg';
import arrowDown from '../../../../images/images/headreImg/arrow-down.svg';

export const ButtonsBlock = () => {
  return (
    <InfoOptions>
      {' '}
      <InfoBlock>
        <IconContainer>
          <img src={fatMen} alt="goal icon" width={28} />
        </IconContainer>
        <TextContainer>
          <InfoBlockName>Goal</InfoBlockName>
          <InfoBlockText>
            {`No goal yet`}
            <ArrowSvg src={arrowDown} alt="arrow down" />
          </InfoBlockText>
        </TextContainer>
      </InfoBlock>
      <InfoBlock>
        <IconContainer>
          <img src={weightIcon} alt="weight" width={28} />
        </IconContainer>
        <TextContainer>
          <InfoBlockName>Weight</InfoBlockName>
          <InfoBlockText>
            {0}
            <WeightKg>kg</WeightKg>
            <EditSvg src={edit} alt="edit" />
          </InfoBlockText>
        </TextContainer>
      </InfoBlock>
    </InfoOptions>
  );
};
