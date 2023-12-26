import { ReactComponent as ClearIcon } from '../../../../../images/icons-linear/trash.svg';
import { ClearButton, ItemWrapper } from './DairyItem.styled';

export const DairyItemBreakfast = () => {
  return (
    <ItemWrapper>
      <ul>
        <li>
          <p>
            Carbonohidrates:<span>60</span>
          </p>
        </li>
        <li>
          <p>
            Protein:<span>60</span>
          </p>
        </li>
        <li>
          <p>
            Fat:<span>60</span>
          </p>
        </li>
        <ClearButton>
          <ClearIcon alt="Clear icon" />
        </ClearButton>
      </ul>
    </ItemWrapper>
  );
};
