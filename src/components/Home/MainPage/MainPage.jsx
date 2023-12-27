import { Section } from 'components/Section/Section';
import { ReactComponent as ArrowIcon } from '../../../images/svgIcon/arrow-right-icon.svg';
import { DailyGoal } from './DailyGoal/DailyGoal';
import { Water } from './Water/Water';
import { Food } from './Food/Food';
import { Dairy } from './Dairy/Dairy';
import { RecommendedFood } from './RecommendedFood/RecommendedFood';
import {
  CardWrapper,
  Container,
  DashboardLink,
  GoalItem,
  GoalsContainer,
  TitleWrapper,
} from './MainPage.styled';


export const MainPage = () => {


  return (
    <Section>
      <Container>
        <TitleWrapper>
          <h1>Today</h1>
          <DashboardLink to={'/dashboard'}>
            On the way to the goal
            <ArrowIcon alt="Arrow Icon" />
          </DashboardLink>
        </TitleWrapper>
        <GoalsContainer>
          <DailyGoal />
          <GoalItem>
            <Water />
          </GoalItem>
          <GoalItem>
            <Food />
          </GoalItem>
        </GoalsContainer>
        <CardWrapper>
          <Dairy />
          <RecommendedFood />
        </CardWrapper>
      </Container>
    </Section>
  );
};
