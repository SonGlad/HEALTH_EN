import {
  DishesWrapper,
  ItemTitle,
  MealsInfo,
  NutrientsItem,
  Title,
  TotalNutrients,
} from './FoodInfo.styled';
import { ReactComponent as SnackImg } from '../../images/icons-illustration/snack-image.svg';
import { useData } from 'hooks/useUserData';
import { SnackDishes } from './Dishes/SnackDishes';


export const Snack = () => {
  const { snackTotalCarbonohidretes, snackTotalProtein, snackTotalFat } = useData();
  

  return (
    <>
      <div className='order-four'>
        <MealsInfo>
          <Title>
            <SnackImg />
            <h2>Snack</h2>
          </Title>
          <TotalNutrients>
            <NutrientsItem>
              <ItemTitle>
                Carbohydrates:
                <span>{snackTotalCarbonohidretes}</span>
              </ItemTitle>
            </NutrientsItem>
            <NutrientsItem>
              <ItemTitle>
                Protein:
                <span>{snackTotalProtein}</span>
              </ItemTitle>
            </NutrientsItem>
            <NutrientsItem>
              <ItemTitle>
                Fat:
                <span>{snackTotalFat}</span>
              </ItemTitle>
            </NutrientsItem>
          </TotalNutrients>
        </MealsInfo>
        <DishesWrapper>
          <SnackDishes />
        </DishesWrapper>
      </div>
    </>
  );
};
