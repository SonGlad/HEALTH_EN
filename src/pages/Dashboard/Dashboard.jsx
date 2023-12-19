import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { CaloriesGraph } from 'components/Dashboard/CaloriesGraph/CaloriesGraph';
import { WaterGraph } from 'components/Dashboard/WaterGraph/WaterGraph';
import { WeightGraph } from 'components/Dashboard/WeightGraph/WeightGraph';
import { ContentWrapper } from './Dashboard.styled';
import { MonthSelector } from 'components/Dashboard/MonthSelector/MonthSelector';

const DashboardPage = () => {
  return (
    <Section>
      <Container>
        <MonthSelector />
        <ContentWrapper>
          <CaloriesGraph />
          <WaterGraph />
          <WeightGraph />
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default DashboardPage;
