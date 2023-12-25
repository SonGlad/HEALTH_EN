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
import edit from '../../../../images/images/headreImg/edit-2.svg';
import fatMen from '../../../../images/images/headreImg/Lose-fat-image-men.svg';
import arrowDown from '../../../../images/images/headreImg/arrow-down.svg';
import { useAuth } from '../../../../hooks/useAuth';
import { useEffect, useRef, useState } from 'react';

export const ButtonsBlock = () => {
  const { userGoal, userWeight } = useAuth();

  const targetDropdown = useRef(null);
  const infoBlockGoal = useRef(null);
  const weightDropdown = useRef(null);

  const [toggleShowTargetSelection, setToggleShowTargetSelection] =
    useState(false);
  const [toggleShowWeightSelection, setToggleShowWeightSelection] =
    useState(false);

  const handleTargetCloseClick = event => {
    event.stopPropagation();
    setToggleShowTargetSelection(false);
  };

  const handleClickBlockGoal = () => {
    setToggleShowTargetSelection(prevState => !prevState);
    setToggleShowWeightSelection(false);
  };

  const handleClickChangeWeight = () => {
    setToggleShowWeightSelection(prevState => !prevState);
    setToggleShowTargetSelection(false);
  };

  const showTargetSelection = () =>
    toggleShowTargetSelection ? 'show-target-selection' : '';

  const showWeightSelection = () =>
    toggleShowWeightSelection ? 'show-weight-selection' : '';

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setToggleShowTargetSelection(false);
        setToggleShowWeightSelection(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        infoBlockGoal.current &&
        !infoBlockGoal.current.contains(event.target) &&
        !targetDropdown.current.contains(event.target) &&
        !event.target.classList.contains('arrow-down') &&
        !event.target.classList.contains('close-target-icon') &&
        weightDropdown.current &&
        !weightDropdown.current.contains(event.target) &&
        !event.target.classList.contains('handle-change-weight')
      ) {
        setToggleShowTargetSelection(false);
        setToggleShowWeightSelection(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [infoBlockGoal, targetDropdown, weightDropdown]);

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
      <InfoBlockTarget onClick={handleClickBlockGoal} ref={infoBlockGoal}>
        <IconContainer>
          <img src={fatMen} alt="goal icon" width={28} />
        </IconContainer>
        <TextContainer>
          <InfoBlockName>Goal</InfoBlockName>
          <InfoBlockText>
            {result}
            <ArrowSvg src={arrowDown} alt="arrow down" className="arrow-down" />
          </InfoBlockText>
        </TextContainer>
      </InfoBlockTarget>
      <div
        ref={targetDropdown}
        className={`target-dropdown ${showTargetSelection()}`}
      >
        <TargetDrop />
        <button
          className="target-close-btn"
          type="button"
          onClick={handleTargetCloseClick}
        >
          <CloseIcon className="close-target-icon" width={'16px'} />
        </button>
      </div>
      <InfoBlockWeight
        className="handle-change-weight"
        onClick={handleClickChangeWeight}
        ref={weightDropdown}
      >
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
      <div className={`weight-dropdown ${showWeightSelection()}`}>
        <button className="weight-close-btn" type="button">
          <CloseIcon className="close-weight-icon" width={'16px'} />
        </button>
        <WeightDrop onClose={() => setToggleShowWeightSelection(false)} />
      </div>
    </InfoOptions>
  );
};
