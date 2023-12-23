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
// import { useDispatch } from 'react-redux';
import { useData } from '../../../../hooks/useUserData';
// import {addWaterIntake, deleteWaterIntake} from "../../../../redux/Data/data-operations";


export const Water = () => {
  // const dispatch = useDispatch();
  const {dailyWater} = useData();
  // const {currentWater, addedWater} = useData();



  // THE CODE BELOW FOR TESTING TO CHECK HOW IS RESPONCE GOING/////

  // console.log("currentWater", currentWater);
  // console.log("addedWater", addedWater);
  // const water = "1000";
  // const handleWaterDispatch = () =>{
  //   console.log("Sending to server:", water);
  //   dispatch(addWaterIntake({
  //     water: water,
  //   }))
  // }
  // const handleWaterDelete = () =>{
  //   dispatch(deleteWaterIntake())
  // }


  const waterGoal = dailyWater;
  const initialAddedQuantity = 300;

  const [total, setTotal] = useState(initialAddedQuantity);
  const [dailyWaterLimit, setDailyWaterLimit] = useState(0);

  const addWater = () => {
    setTotal(prevTotal => prevTotal + initialAddedQuantity);
  };

  const calculatePercent = useCallback(() => {
    const newDailyWater = Math.round((total / waterGoal) * 100);
    setDailyWaterLimit(newDailyWater >= 100 ? 100 : newDailyWater);
  }, [total, waterGoal]);

  const onClick = () => {
    addWater();
    setDailyWaterLimit(0);
    calculatePercent();
  };

  const clear = () => {
    setTotal(0);
    setDailyWaterLimit(0);
  };

  useEffect(() => {
    calculatePercent();
  }, [total, calculatePercent]);

  const leftWater = Math.max(0, waterGoal - total);

  return (
    <Section>
      <h2>Water</h2>
      <Container>
        <ChartWrapper>
          <p
            style={{
              color:
                dailyWaterLimit <= 80 ? 'rgb(182, 195, 255)' : 'rgb(15, 15, 15)',
            }}
          >
            {dailyWaterLimit}%
          </p>
          <ColoredArea
            height={dailyWaterLimit}
            style={{
              height: total >= waterGoal ? '100%' : `${dailyWaterLimit}%`,
            }}
          />
        </ChartWrapper>

        <div>
          <h3>Water consumption</h3>
          <ClearButton 
            onClick={clear}
          // onClick={handleWaterDelete}
          >
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

          <AddButton  
            onClick={onClick}
          // onClick={handleWaterDispatch}
          >
            <AddIcon alt="Add icon" />
            Add water intake
          </AddButton>
        </div>
      </Container>
    </Section>
  );
};
