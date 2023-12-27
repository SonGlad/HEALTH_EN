import React from 'react';
import { useData } from 'hooks/useUserData';
import { nanoid } from 'nanoid';
import { AddButton, EditButton, ListWrapper } from './Dishes.styled';
import { ReactComponent as EditIcon } from '../../../images/icons-linear/edit.svg';
import { ReactComponent as AddIcon } from '../../../images/icons-linear/add.svg';

export const BreakfastDishes = () => {
  const { breakfastMeals } = useData();

  const generateListItems = () => {
    const listItems = [];
    const totalItems =
      breakfastMeals.length > 4 ? breakfastMeals.length + 1 : 4;

    for (let i = 1; i <= totalItems; i++) {
      listItems.push(<li key={nanoid()}>{i}</li>);
    }

    return listItems;
  };

  return (
    <ListWrapper>
      <ul className="number-list">{generateListItems()}</ul>
      <ul className="dish">
        {breakfastMeals.map(item => (
          <li className="list-item" key={item.mealId}>
            <div className="wrapper">
              <p className="dish-title">{item.name}</p>

              <div className="nutrients-wrapper">
                <p className="value">
                  <span>Carb.</span>
                  {item.carbohydrates}
                </p>
                <span>Prot.</span>
                <p className="value">{item.protein}</p>
                <span>Fat.</span>
                <p className="value">{item.fat}</p>
              </div>
            </div>
            <EditButton key={item.mealId} className="edit-button">
              <EditIcon />
              Edit
            </EditButton>
          </li>
        ))}
        <AddButton>
          <AddIcon alt="Add icon" />
          Record your meal
        </AddButton>
      </ul>
    </ListWrapper>
  );
};
