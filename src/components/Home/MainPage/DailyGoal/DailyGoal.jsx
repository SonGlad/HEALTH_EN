import { Section } from 'components/Section/Section';
import bubbleIcon from '../../../../images/svgIcon/bubble-icon.svg';
import bottleIcon from '../../../../images/svgIcon/bottle-icon.svg';
import { Container } from './DailyGoal.styled';

export const DailyGoal = () => {
  return (
    <Section>
      <Container>
        <h2>Daily goal</h2>
        <ul>
          <li>
            <img src={bubbleIcon} alt="Bubbles" />
            <div>
              <h3>Calories</h3>
              <p>1700</p>
            </div>
          </li>
          <li>
            <img src={bottleIcon} alt="Bottle" />
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
