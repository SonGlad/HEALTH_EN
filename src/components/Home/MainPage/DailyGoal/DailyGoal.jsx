import { Section } from 'components/Section/Section';
import { ReactComponent as BubbleIcon } from '../../../../images/icons-linear/bubble.svg';
import { ReactComponent as BottleIcon } from '../../../../images/icons-linear/milk.svg';
import { Container } from './DailyGoal.styled';
import { useData } from "../../../../hooks/useUserData";



export const DailyGoal = () => {
  const {dailyCalories, dailyWater} = useData();


  return (
    <Section>
      <Container>
        <h2>Daily goal</h2>
        <ul>
          <li>
            <BubbleIcon alt="Bubbles" />
            <div>
              <h3>Calories</h3>
              <p>{dailyCalories}</p>
            </div>
          </li>
          <li>
            <BottleIcon alt="Bottle" />
            <div>
              <h3>Water</h3>
              <p>
                {dailyWater}<span>ml</span>
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </Section>
  );
};
