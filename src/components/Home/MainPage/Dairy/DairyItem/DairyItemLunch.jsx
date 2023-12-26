import { ReactComponent as ClearIcon } from '../../../../../images/icons-linear/trash.svg';
import { ClearButton, ItemWrapper } from './DairyItem.styled';
import { useData } from 'hooks/useUserData';


export const DairyItemLunch = () => {
  const {lunchTotalFat, lunchTotalCarbonohidretes, lunchTotalProtein} = useData();

  
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
        <ClearButton>
          <ClearIcon alt="Clear icon" />
        </ClearButton>
      </ul>
    </ItemWrapper>
  );
};
