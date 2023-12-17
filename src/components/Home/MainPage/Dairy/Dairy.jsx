import { Section } from 'components/Section/Section';

import { ReactComponent as AddIcon } from '../../../../images/svgIcon/add-icon.svg';
import BreakfastImg from '../../../../images/svgIcon/breakfast-icon.svg';
import LunchImg from '../../../../images/svgIcon/lunch-img.svg';
import DinnerImg from '../../../../images/svgIcon/dinner-img.svg';
import SnacksImg from '../../../../images/svgIcon/snack-img.svg';

import {
  AddButton,
  Container,
  DairyLink,
  DairyList,
  ListTitle,
  TitleWrapper,
} from './Dairy.styled';
import { DairyItem } from './DairyItem.jsx/DairyItem';

export const Dairy = () => {
  return (
    <Section>
      <Container>
        <TitleWrapper>
          <h2>Dairy</h2>
          <DairyLink to={'/diary'}>See more</DairyLink>
        </TitleWrapper>
        <DairyList>
          <li>
            <ListTitle>
              <img src={BreakfastImg} alt="Breakfast icon" />
              <h3>Breakfast</h3>
            </ListTitle>
            <DairyItem />
          </li>
          <li>
            <ListTitle>
              <img src={LunchImg} alt="Lunch Icon" />
              <h3>Lunch</h3>
            </ListTitle>
            <DairyItem />
          </li>
          <li>
            <ListTitle>
              <img src={DinnerImg} alt="Dinner icon" />
              <h3>Dinner</h3>
            </ListTitle>
            <DairyItem />
          </li>
          <li>
            <ListTitle>
              <img src={SnacksImg} alt="Snacks icon" />
              <h3>Snack</h3>
            </ListTitle>

            <AddButton>
              <AddIcon alt="Add icon" />
              Record your meal
            </AddButton>
          </li>
        </DairyList>
      </Container>
    </Section>
  );
};
