import { ReactComponent as ClearIcon } from '../../../../../images/icons-linear/trash.svg';
import { ClearButton, ItemWrapper } from './DairyItem.styled';
import { useData } from 'hooks/useUserData';
import { useDispatch } from 'react-redux';
import { deleteFoodType } from "../../../../../redux/Data/data-operations";
import { useState } from 'react';



export const DairyItemDinner = () => {
  const dispatch = useDispatch();
  const {dinnerTotalFat, dinnerTotalCarbonohidretes, dinnerTotalProtein} = useData();
const [isInfoVisible, setInfoVisible] = useState(true);


  const handleDeleteClick = () => {
    dispatch(deleteFoodType('dinner'));
     setInfoVisible(false);
    document.getElementById('dinner').classList.remove('slideDown');
    document.getElementById('dinner').classList.add('slideUp');
  };

  
  return (
    <ItemWrapper className={isInfoVisible ? 'visible' : 'hidden'}>
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
        <ClearButton id="dinner" onClick={() => { handleDeleteClick(); document.getElementById('dinner').classList.add('slideUp'); }}>
          <ClearIcon alt="Clear icon" />
        </ClearButton>
      </ul>
    </ItemWrapper>
  );
};
