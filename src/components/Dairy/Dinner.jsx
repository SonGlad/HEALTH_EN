import {
  DishesWrapper,
  ItemTitle,
  MealsContainer,
  MealsInfo,
  NutrientsItem,
  Title,
  TotalNutrients,
} from './FoodInfo.styled';
import { ReactComponent as DinnerImg } from '../../images/icons-illustration/dinner-image.svg';
import { useData } from 'hooks/useUserData';
import { DinnerDishes } from './Dishes/DinnerDishes';



export const Dinner = () => {
  const { dinnerTotalCarbonohidretes, dinnerTotalFat, dinnerTotalProtein } = useData();


  return (
    <>
      <MealsContainer>
        <div>
          <MealsInfo>
            <Title>
              <DinnerImg />
              <h2>Dinner</h2>
            </Title>
            <TotalNutrients>
              <NutrientsItem>
                <ItemTitle>
                  Carbohydrates:
                  <span>{dinnerTotalCarbonohidretes}</span>
                </ItemTitle>
              </NutrientsItem>
              <NutrientsItem>
                <ItemTitle>
                  Protein:
                  <span>{dinnerTotalProtein}</span>
                </ItemTitle>
              </NutrientsItem>
              <NutrientsItem>
                <ItemTitle>
                  Fat:
                  <span>{dinnerTotalFat}</span>
                </ItemTitle>
              </NutrientsItem>
            </TotalNutrients>
          </MealsInfo>
          <DishesWrapper>
            <DinnerDishes />
          </DishesWrapper>
        </div>
      </MealsContainer>
    </>
  );
};
