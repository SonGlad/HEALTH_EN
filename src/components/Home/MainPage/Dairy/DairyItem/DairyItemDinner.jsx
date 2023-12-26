import { ReactComponent as ClearIcon } from '../../../../../images/icons-linear/trash.svg';
import { ClearButton, ItemWrapper } from './DairyItem.styled';
import { useData } from 'hooks/useUserData';



export const DairyItemDinner = () => {
  const {dinnerTotalFat, dinnerTotalCarbonohidretes, dinnerTotalProtein} = useData();


  
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
        <ClearButton>
          <ClearIcon alt="Clear icon" />
        </ClearButton>
      </ul>
    </ItemWrapper>
  );
};
