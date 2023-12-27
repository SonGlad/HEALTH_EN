import {
  DishesWrapper,
  ItemTitle,
  MealsContainer,
  MealsInfo,
  NutrientsItem,
  Title,
  TotalNutrients,
} from './FoodInfo.styled';

import { ReactComponent as LunchImg } from '../../images/icons-illustration/lunch-image.svg';

// import { Dishes } from './Dishes/BreakfastDishes';
import { useData } from 'hooks/useUserData';
import { LunchDishes } from './Dishes/LunchDishes';

export const Lunch = () => {
  const { lunchTotalFat, lunchTotalCarbonohidretes, lunchTotalProtein } =
    useData();
  return (
    <>
      <MealsContainer>
        <div>
          <MealsInfo>
            <Title>
              <LunchImg />
              <h2>Lunch</h2>
            </Title>
            <TotalNutrients>
              <NutrientsItem>
                <ItemTitle>
                  Carbohydrates:
                  <span>{lunchTotalCarbonohidretes}</span>
                </ItemTitle>
              </NutrientsItem>
              <NutrientsItem>
                <ItemTitle>
                  Protein:
                  <span>{lunchTotalProtein}</span>
                </ItemTitle>
              </NutrientsItem>
              <NutrientsItem>
                <ItemTitle>
                  Fat:
                  <span>{lunchTotalFat}</span>
                </ItemTitle>
              </NutrientsItem>
            </TotalNutrients>
          </MealsInfo>
          <DishesWrapper>
            <LunchDishes />
          </DishesWrapper>
        </div>
      </MealsContainer>
    </>
  );
};
