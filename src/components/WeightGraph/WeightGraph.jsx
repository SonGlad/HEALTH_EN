import { Section } from 'components/Section/Section';
import { Container, GraphWrapper, TitleWrapper } from './WeightGraph.styled';

export const WeightGraph = () => {
  return (
    <Section>
      <Container>
        <TitleWrapper>
          <h2>Weights</h2>
          <p>
            Average value: <span>68 kg</span>
          </p>
        </TitleWrapper>
        <GraphWrapper />
      </Container>
    </Section>
  );
};
