import React from 'react';
import food from '../../utils/food.json';
import { nanoid } from 'nanoid';

import {
  DishesWrapper,
  EditButton,
  ItemTitle,
  MealsContainer,
  MealsInfo,
  Numbers,
  NutrientsItem,
  Title,
  TotalNutrients,
} from './FoodInfo.styled';
import { ReactComponent as BreakfastImg } from '../../images/icons-illustration/breakfast-image.svg';
import { ReactComponent as LunchImg } from '../../images/icons-illustration/lunch-image.svg';
import { ReactComponent as DinnerImg } from '../../images/icons-illustration/dinner-image.svg';
import { ReactComponent as SnackImg } from '../../images/icons-illustration/snack-image.svg';
import { ReactComponent as EditIcon } from '../../images/icons-linear/edit.svg';
import { Dishes } from './Dishes/Dishes';

const sumNutrients = (items, nutrient) => {
  return items.reduce((sum, item) => sum + item.data[nutrient], 0);
};

export const FoodInfo = () => {
  const meals = food.meals;

  const getMealImage = mealName => {
    switch (mealName.toLowerCase()) {
      case 'breakfast':
        return <BreakfastImg />;
      case 'lunch':
        return <LunchImg />;
      case 'dinner':
        return <DinnerImg />;
      case 'snack':
        return <SnackImg />;
      default:
        return null;
    }
  };

  return (
    <>
      <MealsContainer>
        {meals.map(meal => (
          <div key={nanoid()}>
            <MealsInfo>
              <Title>
                {getMealImage(meal.name)}
                <h2>{meal.name}</h2>
              </Title>
              <TotalNutrients>
                <NutrientsItem key={nanoid()}>
                  <ItemTitle>
                    Carbohydrates:
                    <span>
                      {meal.items
                        ? sumNutrients(meal.items, 'Carbohydrates')
                        : 0}
                    </span>
                  </ItemTitle>
                </NutrientsItem>
                <NutrientsItem key={nanoid()}>
                  <ItemTitle>
                    Protein:
                    <span>
                      {meal.items ? sumNutrients(meal.items, 'Protein') : 0}
                    </span>
                  </ItemTitle>
                </NutrientsItem>
                <NutrientsItem key={nanoid()}>
                  <ItemTitle>
                    Fat:
                    <span>
                      {meal.items ? sumNutrients(meal.items, 'Fat') : 0}
                    </span>
                  </ItemTitle>
                </NutrientsItem>
              </TotalNutrients>
            </MealsInfo>
            <DishesWrapper>
              <EditButton>
                <EditIcon />
                Edit
              </EditButton>
              <Numbers>
                {Array.from({
                  length: Math.max(
                    4,
                    meal.items ? Math.max(meal.items.length, 0) : 0
                  ),
                }).map((_, index) => (
                  <li key={nanoid()}>{index + 1}</li>
                ))}
              </Numbers>
              <Dishes mealItems={meal.items} />
            </DishesWrapper>
          </div>
        ))}
      </MealsContainer>
    </>
  );
};
