import { Section } from 'components/Section/Section';
import { GraphWrapper, TitleWrapper } from './CaloriesGraph.styled';

export const CaloriesGraph = () => {
  return (
    <Section>
      <div>
        <TitleWrapper>
          <h2>Calories</h2>
          <p>
            Average value: <span>1700 cal</span>
          </p>
        </TitleWrapper>
        <GraphWrapper>
          <div></div>
        </GraphWrapper>
      </div>
    </Section>
  );
};
