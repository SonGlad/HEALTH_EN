import { ReactComponent as ClearIcon } from '../../../../../images/icons-linear/trash.svg';
import { ClearButton, ItemWrapper } from './DairyItem.styled';
import { useData } from 'hooks/useUserData';
import { useDispatch } from 'react-redux';
import { deleteFoodType } from "../../../../../redux/Data/data-operations";


export const DairyItemLunch = () => {
  const dispatch = useDispatch();
  const {lunchTotalFat, lunchTotalCarbonohidretes, lunchTotalProtein} = useData();


  const handleDeleteClick = () => {
    dispatch(deleteFoodType('lunch'));
  };

  
  return (
    <ItemWrapper>
      <ul>
        <li>
          <p>
            Carbonohidrates:<span>{lunchTotalCarbonohidretes}</span>
          </p>
        </li>
        <li>
          <p>
            Protein:<span>{lunchTotalProtein}</span>
          </p>
        </li>
        <li>
          <p>
            Fat:<span>{lunchTotalFat}</span>
          </p>
        </li>
        <ClearButton id="lunch" onClick={handleDeleteClick}>
          <ClearIcon alt="Clear icon" />
        </ClearButton>
      </ul>
    </ItemWrapper>
  );
};
