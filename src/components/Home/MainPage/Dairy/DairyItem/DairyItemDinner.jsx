import { ReactComponent as ClearIcon } from '../../../../../images/icons-linear/trash.svg';
import { ClearButton, ItemWrapper } from './DairyItem.styled';
import { useData } from 'hooks/useUserData';
import { useDispatch } from 'react-redux';
import { deleteFoodType } from "../../../../../redux/Data/data-operations";



export const DairyItemDinner = () => {
  const dispatch = useDispatch();
  const {dinnerTotalFat, dinnerTotalCarbonohidretes, dinnerTotalProtein} = useData();


  const handleDeleteClick = () => {
    dispatch(deleteFoodType('dinner'));
  };

  
  return (
    <ItemWrapper>
      <ul>
        <li>
          <p>
            Carbonohidrates:<span>{dinnerTotalCarbonohidretes}</span>
          </p>
        </li>
        <li>
          <p>
            Protein:<span>{dinnerTotalProtein}</span>
          </p>
        </li>
        <li>
          <p>
            Fat:<span>{dinnerTotalFat}</span>
          </p>
        </li>
        <ClearButton id="dinner" onClick={handleDeleteClick}>
          <ClearIcon alt="Clear icon" />
        </ClearButton>
      </ul>
    </ItemWrapper>
  );
};
