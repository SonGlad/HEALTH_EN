import { Section } from 'components/Section/Section';
import { Container, GraphWrapper, TitleWrapper } from './CaloriesGraph.styled';

export const CaloriesGraph = () => {
  return (
    <Section>
      <Container>
        <TitleWrapper>
          <h2>Calories</h2>
          <p>
            Average value: <span>68 kg</span>
          </p>
        </TitleWrapper>
        <GraphWrapper />
      </Container>
    </Section>
  );
};
