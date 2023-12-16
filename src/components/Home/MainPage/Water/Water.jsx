import { Section } from 'components/Section/Section';
import { ReactComponent as AddIcon } from '../../../../images/svgIcon/add-icon.svg';
import { ReactComponent as ClearIcon } from '../../../../images/svgIcon/clear-icon.svg';

import {
  AddButton,
  ClearButton,
  Container,
  Graph,
  InfoWrapper,
  LeftInfo,
  TotalInfo,
} from './Water.styled';

export const Water = () => {
  return (
    <Section>
      <h2>Water</h2>
      <Container>
        <Graph></Graph>
        <div>
          <h3>Water consumption</h3>
          <ClearButton>
            <ClearIcon alt="Clear icon" />
          </ClearButton>
          <InfoWrapper>
            <TotalInfo>
              1050 <span>ml</span>
            </TotalInfo>
            <LeftInfo>
              left:<p>400</p>
              <span>ml</span>
            </LeftInfo>
          </InfoWrapper>

          <AddButton>
            <AddIcon alt="Add icon" />
            Add water intake
          </AddButton>
        </div>
      </Container>
    </Section>
  );
};
