import { ReactComponent as ClearIcon } from '../../../../../images/icons-linear/trash.svg';
import { ClearButton, ItemWrapper } from './DairyItem.styled';
import { useData } from 'hooks/useUserData';
import { useDispatch } from 'react-redux';
import { deleteFoodType } from "../../../../../redux/Data/data-operations";


export const DairyItemSnack  = () => {
  const dispatch = useDispatch();
  const {snackTotalFat, snackTotalCarbonohidretes, snackTotalProtein} = useData();


  const handleDeleteClick = () => {
    dispatch(deleteFoodType('snack'));
  };

  
  return (
    <ItemWrapper>
      <ul>
        <li>
          <p>
            Carbonohidrates:<span>{snackTotalCarbonohidretes}</span>
          </p>
        </li>
        <li>
          <p>
            Protein:<span>{snackTotalProtein}</span>
          </p>
        </li>
        <li>
          <p>
            Fat:<span>{snackTotalFat}</span>
          </p>
        </li>
        <ClearButton id="snack" onClick={handleDeleteClick}>
          <ClearIcon alt="Clear icon" />
        </ClearButton>
      </ul>
    </ItemWrapper>
  );
};
