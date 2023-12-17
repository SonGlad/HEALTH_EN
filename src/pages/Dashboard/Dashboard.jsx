import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { CaloriesGraph } from 'components/CaloriesGraph/CaloriesGraph';
import { WaterGraph } from 'components/WaterGraph/WaterGraph';
import { WeightGraph } from 'components/WeightGraph/WeightGraph';
import { MonthSelector } from './MonthSelector/MonthSelector';
import { ContentWrapper, Title } from './Dashboard.styled';

const DashboardPage = () => {
  return (
    <Section>
      <Container>
        <Title>DASHBOARD</Title>
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
