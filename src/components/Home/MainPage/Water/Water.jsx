import React, { useState, useEffect } from 'react';
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

export const Water = () => {
  const waterGoal = 1500;
  const waterQuantity = 600;
  let addedQuantity = 0;

  const [total, setTotal] = useState(waterQuantity);
  const [dailyWater, setDailyWater] = useState(0);

  const addWater = () => {
    const newQuantity = total + addedQuantity;
    setTotal(newQuantity);
  };

  const calculatePercent = () => {
    const newDailyWater = Math.round((total / waterGoal) * 100);
    setDailyWater(newDailyWater);
  };

  const onClick = () => {
    addedQuantity += 300;
    addWater();
    calculatePercent();
  };

  const clear = () => {
    setTotal(0);
    setDailyWater(0);
  };

  const leftWater = Math.max(0, waterGoal - total);

  useEffect(() => {}, [total, addedQuantity, dailyWater]);

  return (
    <Section>
      <h2>Water</h2>
      <Container>
        <ChartWrapper>
          <p
            style={{
              color:
                dailyWater <= 80 ? 'rgb(182, 195, 255)' : 'rgb(15, 15, 15)',
            }}
          >
            {dailyWater}%
          </p>
          <ColoredArea
            height={dailyWater}
            style={{
              height: total >= waterGoal ? '100%' : `${dailyWater}%`,
            }}
          />
        </ChartWrapper>

        <div>
          <h3>Water consumption</h3>
          <ClearButton onClick={clear}>
            <ClearIcon alt="Clear icon" />
          </ClearButton>
          <InfoWrapper>
            <TotalInfo>
              {total} <span>ml</span>
            </TotalInfo>
            <LeftInfo>
              left:<p>{leftWater}</p>
              <span>ml</span>
            </LeftInfo>
          </InfoWrapper>

          <AddButton onClick={onClick}>
            <AddIcon alt="Add icon" />
            Add water intake
          </AddButton>
        </div>
      </Container>
    </Section>
  );
};
