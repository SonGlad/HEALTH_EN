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
import { initialDataUserInfo } from '../../../redux/Auth/auth-operations';
import { getUserDailyCurrentData } from "../../../redux/Data/data-operations";
import { getAllRecommendedFood } from '../../../redux/Data/data-operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from "../../../hooks/useAuth";


export const MainPage = () => {
  const dispatch = useDispatch();
  const {isInitial,} = useAuth();


  useEffect(() => {
    if (isInitial) {
      dispatch(initialDataUserInfo());
      dispatch(getUserDailyCurrentData());
      dispatch( getAllRecommendedFood());
    }
  }, [dispatch, isInitial]);


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
