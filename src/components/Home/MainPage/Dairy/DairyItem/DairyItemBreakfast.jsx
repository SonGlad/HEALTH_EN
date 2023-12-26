import { ReactComponent as ClearIcon } from '../../../../../images/icons-linear/trash.svg';
import { ClearButton, ItemWrapper } from './DairyItem.styled';
import { useData } from 'hooks/useUserData';
import { useDispatch } from 'react-redux';
import { deleteFoodType } from "../../../../../redux/Data/data-operations";


export const DairyItemBreakfast = () => {
  const dispatch = useDispatch();
  const {breakfastTotalFat , breakfastTotalCarbonohidretes, breakfasthTotalProtein} = useData();


  const handleDeleteClick = () => {
    dispatch(deleteFoodType('breakfast'));
  };

  
  return (
    <ItemWrapper>
      <ul>
        <li>
          <p>
            Carbonohidrates:<span>{breakfastTotalCarbonohidretes}</span>
          </p>
        </li>
        <li>
          <p>
            Protein:<span>{breakfasthTotalProtein}</span>
          </p>
        </li>
        <li>
          <p>
            Fat:<span>{breakfastTotalFat}</span>
          </p>
        </li>
        <ClearButton id="breakfast" onClick={handleDeleteClick}>
          <ClearIcon alt="Clear icon" />
        </ClearButton>
      </ul>
    </ItemWrapper>
  );
};
