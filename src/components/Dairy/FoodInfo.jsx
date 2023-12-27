import { MealsContainer } from './FoodInfo.styled';

import { Breakfast } from './Breakfast';
import { Lunch } from './Lunch';
import { Dinner } from './Dinner';
import { Snack } from './Snack';

export const FoodInfo = () => {
  return (
    <>
      <MealsContainer>
        <Breakfast />
        <Lunch />
        <Dinner />
        <Snack />
      </MealsContainer>
    </>
  );
};
