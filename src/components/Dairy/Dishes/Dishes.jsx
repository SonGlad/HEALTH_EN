import { nanoid } from 'nanoid';
import { ReactComponent as AddIcon } from '../../../images/icons-linear/add.svg';
import {
  AddButton,
  DishTitle,
  DishesWrapper,
  Nutrients,
} from './Dishes.styled';

export const Dishes = ({ mealItems }) => (
  <div>
    <DishesWrapper>
      {mealItems &&
        mealItems.map((item, index) => (
          <li key={nanoid()}>
            <DishTitle>{item.dish}</DishTitle>
            <Nutrients>
              <li key={nanoid()}>
                <div>
                  <p>Carb.</p>
                  <span>{item.data.Carbohydrates}</span>
                </div>
              </li>
              <li key={nanoid()}>
                <div>
                  <p>Prot.</p>
                  <span>{item.data.Protein}</span>
                </div>
              </li>
              <li key={nanoid()}>
                <div>
                  <p>Fat.</p>
                  <span>{item.data.Fat}</span>
                </div>
              </li>
            </Nutrients>
          </li>
        ))}

      {mealItems && (mealItems.length === 0 || mealItems.length > 1) && (
        <li key={nanoid()}>
          <AddButton>
            <AddIcon alt="Add icon" />
            Record your meal
          </AddButton>
        </li>
      )}
    </DishesWrapper>
  </div>
);
