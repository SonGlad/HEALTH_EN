import { ReactComponent as ClearIcon } from '../../../../../images/icons-linear/trash.svg';
import { ClearButton, ItemWrapper } from './DairyItem.styled';
import { useData } from 'hooks/useUserData';


export const DairyItemBreakfast = () => {
  const {breakfastTotalFat , breakfastTotalCarbonohidretes, breakfasthTotalProtein} = useData();

  
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
        <ClearButton>
          <ClearIcon alt="Clear icon" />
        </ClearButton>
      </ul>
    </ItemWrapper>
  );
};
