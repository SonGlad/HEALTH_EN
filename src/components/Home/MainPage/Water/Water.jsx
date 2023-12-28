import React, { useState, useEffect, useCallback } from 'react';
import { Section } from 'components/Section/Section';
import { ReactComponent as AddIcon } from '../../../../images/icons-linear/add.svg';
import { ReactComponent as ClearIcon } from '../../../../images/icons-linear/trash.svg';
import {
  AddButton,
  ChartWrapper,
  ClearButton,
  ColoredArea,
  Container,
  InfoWrapper,
  LeftInfo,
  TotalInfo,
} from './Water.styled';
import { useDispatch } from 'react-redux';
import { Modal } from '../../../Modals/Modals';
import { openModalWater } from '../../../../redux/Modal/modal-slice';
import { useModal } from '../../../../hooks/useModal';
import { useData } from '../../../../hooks/useUserData';
import { deleteWaterIntake } from '../../../../redux/Data/data-operations';


export const Water = () => {
  const dispatch = useDispatch();
  const { userDailyWaterLimit, currentWater } = useData();


  const { isModalOpenWater } = useModal();
  const handleOpenModalWater = () => {
    dispatch(openModalWater());
  };


  const handleWaterDelete = () => {
    dispatch(deleteWaterIntake());
  };

  const waterGoal = userDailyWaterLimit;

  const [dailyWaterLimit, setDailyWaterLimit] = useState(0);

  const calculatePercent = useCallback(() => {
    if (waterGoal > 0) {
      const newDailyWater = Math.round((currentWater / waterGoal) * 100);
      setDailyWaterLimit(newDailyWater);
    } else {
      setDailyWaterLimit(0);
    }
  }, [currentWater, waterGoal]);

  useEffect(() => {
    calculatePercent();
  }, [currentWater, waterGoal ,calculatePercent]);

  const validCurrentWater = isNaN(currentWater) ? 0 : currentWater;
  const leftWater = Math.max(0, waterGoal - currentWater);


  return (
    <Section>
      <h2>Water</h2>
      <Container>
        <ChartWrapper>
          <p
            style={{
              color:
                dailyWaterLimit <= 64
                  ? 'rgb(182, 195, 255)'
                  : 'rgb(15, 15, 15)',
            }}
          >
            {dailyWaterLimit}%
          </p>
          <ColoredArea
            height={dailyWaterLimit}
            style={{
              height:
              validCurrentWater >= waterGoal ? '100%' : `${dailyWaterLimit}%`,
            }}
          />
        </ChartWrapper>
        <div className='water-cons-cont'>
          <ClearButton onClick={handleWaterDelete}>
            <ClearIcon alt="Clear icon" />
          </ClearButton>
          <h3>Water consumption</h3>
          <InfoWrapper>
              {currentWater ? (
                <TotalInfo>
                  {currentWater}
                  <span>ml</span>
                </TotalInfo>
              ) : (
                <TotalInfo>
                  0<span>ml</span>
                </TotalInfo>
              )}
            <LeftInfo>
              left:<p>{leftWater}</p>
              <span>ml</span>
            </LeftInfo>
          </InfoWrapper>
          <AddButton onClick={handleOpenModalWater}>
            <AddIcon alt="Add icon" />
            Add water intake
          </AddButton>
        </div>
      </Container>
      {isModalOpenWater && <Modal />}
    </Section>
  );
};
