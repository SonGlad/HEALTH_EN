import { ReactComponent as ClearIcon } from '../../../../../images/icons-linear/trash.svg';
import { ClearButton, ItemWrapper } from './DairyItem.styled';
import { useData } from 'hooks/useUserData';
import { useDispatch } from 'react-redux';
import { deleteFoodType } from "../../../../../redux/Data/data-operations";
import { useState } from 'react';


export const DairyItemBreakfast = () => {
  const dispatch = useDispatch();
  const {breakfastTotalFat , breakfastTotalCarbonohidretes, breakfasthTotalProtein} = useData();
 const [isInfoVisible, setInfoVisible] = useState(true);

  const handleDeleteClick = () => {
    dispatch(deleteFoodType('breakfast'));
    setInfoVisible(false);
    document.getElementById('breakfast').classList.remove('slideDown');
    document.getElementById('breakfast').classList.add('slideUp');
  };

  
  return (
    <ItemWrapper className={isInfoVisible ? 'visible' : 'hidden'}>
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
        <ClearButton id="breakfast" onClick={() => { handleDeleteClick(); document.getElementById('breakfast').classList.add('slideUp'); }}>
          <ClearIcon alt="Clear icon" />
        </ClearButton>
      </ul>
    </ItemWrapper>
  );
};
