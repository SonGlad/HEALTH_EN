import { Section } from 'components/Section/Section';
import { ReactComponent as BubbleIcon } from '../../../../images/icons-linear/bubble.svg';
import { ReactComponent as BottleIcon } from '../../../../images/icons-linear/milk.svg';
import { Container } from './DailyGoal.styled';

export const DailyGoal = () => {
  return (
    <Section>
      <Container>
        <h2>Daily goal</h2>
        <ul>
          <li>
            <BubbleIcon alt="Bubbles" />
            <div>
              <h3>Calories</h3>
              <p>1700</p>
            </div>
          </li>
          <li>
            <BottleIcon alt="Bottle" />
            <div>
              <h3>Water</h3>
              <p>
                1500<span>ml</span>
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </Section>
  );
};
