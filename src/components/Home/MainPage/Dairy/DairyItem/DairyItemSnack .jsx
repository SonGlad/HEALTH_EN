import { ReactComponent as ClearIcon } from '../../../../../images/icons-linear/trash.svg';
import { ClearButton, ItemWrapper } from './DairyItem.styled';
import { useData } from 'hooks/useUserData';
import { useDispatch } from 'react-redux';
import { deleteFoodType } from "../../../../../redux/Data/data-operations";
import { useState } from 'react';


export const DairyItemSnack  = () => {
  const dispatch = useDispatch();
  const {snackTotalFat, snackTotalCarbonohidretes, snackTotalProtein} = useData();
 const [isInfoVisible, setInfoVisible] = useState(true);

  const handleDeleteClick = () => {
    dispatch(deleteFoodType('snack'));
    setInfoVisible(false);
    document.getElementById('snack').classList.remove('slideDown');
    document.getElementById('snack').classList.add('slideUp');
  };

  
  return (
    <ItemWrapper className={isInfoVisible ? 'visible' : 'hidden'}>
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
        <ClearButton id="snack" onClick={() => { handleDeleteClick(); document.getElementById('snack').classList.add('slideUp'); }}>
          <ClearIcon alt="Clear icon" />
        </ClearButton>
      </ul>
    </ItemWrapper>
  );
};
