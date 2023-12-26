import { ReactComponent as ClearIcon } from '../../../../../images/icons-linear/trash.svg';
import { ClearButton, ItemWrapper } from './DairyItem.styled';
import { useData } from 'hooks/useUserData';



export const DairyItemSnack  = () => {
  const {snackTotalFat, snackTotalCarbonohidretes, snackTotalProtein} = useData();


  
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
        <ClearButton>
          <ClearIcon alt="Clear icon" />
        </ClearButton>
      </ul>
    </ItemWrapper>
  );
};
