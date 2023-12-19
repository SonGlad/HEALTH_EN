import { Section } from 'components/Section/Section';
import { GraphWrapper, TitleWrapper } from './WeightGraph.styled';

export const WeightGraph = () => {
  return (
    <Section>
      <div>
        <TitleWrapper>
          <h2>Weights</h2>
          <p>
            Average value: <span>68 kg</span>
          </p>
        </TitleWrapper>
        <GraphWrapper>
          <div></div>
        </GraphWrapper>
      </div>
    </Section>
  );
};
