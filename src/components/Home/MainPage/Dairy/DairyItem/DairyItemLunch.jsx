import { ReactComponent as ClearIcon } from '../../../../../images/icons-linear/trash.svg';
import { ClearButton, ItemWrapper } from './DairyItem.styled';
import { useData } from 'hooks/useUserData';
import { useDispatch } from 'react-redux';
import { deleteFoodType } from "../../../../../redux/Data/data-operations";
import { useState } from 'react';


export const DairyItemLunch = () => {
  const dispatch = useDispatch();
  const {lunchTotalFat, lunchTotalCarbonohidretes, lunchTotalProtein} = useData();
 const [isInfoVisible, setInfoVisible] = useState(true);

  const handleDeleteClick = () => {
    dispatch(deleteFoodType('lunch'));
    setInfoVisible(false);
    document.getElementById('lunch').classList.remove('slideDown');
    document.getElementById('lunch').classList.add('slideUp');
  };

  
  return (
    <ItemWrapper className={isInfoVisible ? 'visible' : 'hidden'}>
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
        <ClearButton id="lunch" onClick={() => { handleDeleteClick(); document.getElementById('lunch').classList.add('slideUp'); }}>
          <ClearIcon alt="Clear icon" />
        </ClearButton>
      </ul>
    </ItemWrapper>
  );
};
