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

import { TargetModal } from 'components/Header/UserMenu/ButtonsBlock/TargetModal/TargetModal';
import { WeightModal } from '../../UserMenu/ButtonsBlock/ WeightModal/ WeightModal';
import { ReactComponent as CloseIcon } from '../../../../images/icons-linear/close-circle.svg';

import weightIcon from '../../../../images/icons-emoji/Waight image.png';
import edit from '../../../../images/icons-linear/edit-2.svg';
import fatMen from '../../../../images/icons-emoji/Lose fat image men.png';
import arrowDown from '../../../../images/icons-linear/arrow-down.svg';
// import close from '../../../../images/icons-linear/close-circle.svg';

import { useEffect, useRef, useState } from 'react';

export const ButtonsBlock = () => {
  const refBackdrop = useRef(null);
  const refBackdropWeight = useRef(null);
  const [showModalTarget, setShowModalTarget] = useState(false);
  const [showModalWeight, setShowModalWeight] = useState(false);

  // const handleCloseTargetClick = () => {
  //   setShowModalTarget(!showModalTarget);
  // };
  // const toggleModaTarget = () => {
  //   setShowModalTarget(setShowModalTarget => !setShowModalTarget);
  //   setShowModalWeight(false);
  // };

  // const handleEditButtonClick = () => {
  //   setShowModalWeight(setShowModalWeight => !setShowModalWeight);
  //   setShowModalTarget(false);
  // };

  // const handleCloseWeightClick = () => {
  //   setShowModalWeight(false);
  // };

  const handleOnClose = e => {
    if (e.code === 'Escape') {
      onButtonCloseTarget();
    }
  };

  window.addEventListener('keydown', handleOnClose);

  const handleClickByIconMenu = event => {
    event.stopPropagation();
    setShowModalTarget(prevState => !prevState);
    setShowModalWeight(false);
  };

  const onButtonCloseTarget = () => {
    setShowModalTarget(!showModalTarget);
  };

  const toggleShowOptionsMenu = () =>
    showModalTarget ? 'info-options-active' : '';

  const handleBackdropClick = event => {
    if (refBackdrop.current && !refBackdrop.current.contains(event.target)) {
      setShowModalTarget(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleBackdropClick);

    return () => {
      document.removeEventListener('click', handleBackdropClick);
    };
  }, []);
  ////////////////////////////////////////

  const handleClickByIconWeight = event => {
    event.stopPropagation();
    setShowModalWeight(prevState => !prevState);
    setShowModalTarget(false);
  };

  const onButtonCloseWeight = () => {
    setShowModalWeight(!showModalWeight);
  };
  const handleOnCloseWeight = e => {
    if (e.code === 'Escape') {
      onButtonCloseWeight();
    }
  };

  window.addEventListener('keydown', handleOnCloseWeight);

  const toggleShowOptionsWeight = () =>
    showModalWeight ? 'info-options-active-weigth' : '';

  const handleBackdropClickWeight = event => {
    if (
      refBackdropWeight.current &&
      !refBackdropWeight.current.contains(event.target)
    ) {
      setShowModalWeight(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleBackdropClickWeight);

    return () => {
      document.removeEventListener('click', handleBackdropClickWeight);
    };
  }, []);

  return (
    <InfoOptions>
      {' '}
      <InfoBlock onClick={handleClickByIconMenu}>
        <IconContainer>
          <img src={fatMen} alt="goal icon" width={28} />
        </IconContainer>
        <TextContainer>
          <InfoBlockName>Goal</InfoBlockName>
          <InfoBlockText>
            {`No goal yet`}
            <ArrowSvg
              src={arrowDown}
              alt="arrow down"
              style={{
                transform: showModalTarget ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </InfoBlockText>
        </TextContainer>
        <div
          ref={refBackdrop}
          className={`dropdownTarget ${toggleShowOptionsMenu()}`}
        >
          <TargetModal />
          <button
            type="button"
            className="close-button"
            onClick={onButtonCloseTarget}
          >
            <CloseIcon className="close-modal-icon" width={'16px'} />
          </button>
        </div>
      </InfoBlock>
      <InfoBlock onClick={handleClickByIconWeight}>
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
        <div
          ref={refBackdropWeight}
          className={`dropdownWeight ${toggleShowOptionsWeight()}`}
        >
          <WeightModal />
          <button
            type="button"
            className="close-button-weight"
            onClick={onButtonCloseWeight}
          >
            <CloseIcon className="close-modal-icon-weight" width={'16px'} />
          </button>
        </div>
      </InfoBlock>
    </InfoOptions>
  );
};
