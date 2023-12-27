import {
  DishesWrapper,
  ItemTitle,
  MealsInfo,
  NutrientsItem,
  Title,
  TotalNutrients,
} from './FoodInfo.styled';
import { ReactComponent as BreakfastImg } from '../../images/icons-illustration/breakfast-image.svg';
import { BreakfastDishes } from './Dishes/BreakfastDishes';
import { useData } from 'hooks/useUserData';



export const Breakfast = () => {
  const {
    breakfastTotalFat,
    breakfastTotalCarbonohidretes,
    breakfasthTotalProtein,
  } = useData();


  return (
    <>
      <div className='order-one'>
        <MealsInfo>
          <Title>
            <BreakfastImg />
            <h2>Breakfast</h2>
          </Title>
          <TotalNutrients>
            <NutrientsItem>
              <ItemTitle>
                Carbohydrates:
                <span>{breakfastTotalCarbonohidretes}</span>
              </ItemTitle>
            </NutrientsItem>
            <NutrientsItem>
              <ItemTitle>
                Protein:
                <span>{breakfasthTotalProtein}</span>
              </ItemTitle>
            </NutrientsItem>
            <NutrientsItem>
              <ItemTitle>
                Fat:
                <span>{breakfastTotalFat}</span>
              </ItemTitle>
            </NutrientsItem>
          </TotalNutrients>
        </MealsInfo>
        <DishesWrapper>
          <BreakfastDishes />
        </DishesWrapper>
      </div>
    </>
  );
};
