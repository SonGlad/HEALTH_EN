import { Section } from 'components/Section/Section';
import { ReactComponent as AddIcon } from '../../../../images/icons-linear/add.svg';
import { ReactComponent as ClearIcon } from '../../../../images/icons-linear/trash.svg';

import {
  AddButton,
  ClearButton,
  Container,
  Graph,
  InfoWrapper,
  LeftInfo,
  // Percentage,
  // Statistics,
  // StatisticsVisually,
  TotalInfo,
} from './Water.styled';

//замінити на дані % води з бека в змінну randomStatistic.
// function generateRandomNumber() {
//   return Math.floor(Math.random() * 101);
// }
// const randomStatistic = generateRandomNumber();
//*

export const Water = () => {
  return (
    <Section>
      <h2>Water</h2>
      <Container>
        <Graph>
          <Statistics percentage={randomStatistic} />
          <StatisticsVisually percentage={randomStatistic}>
            <Percentage>{randomStatistic}%</Percentage>
          </StatisticsVisually>
        </Graph>
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
