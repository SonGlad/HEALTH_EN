import { Section } from 'components/Section/Section';
import { Container, GraphWrapper, TitleWrapper } from './WaterGraph.styled';

export const WaterGraph = () => {
  return (
    <Section>
      <Container>
        <TitleWrapper>
          <h2>Waters</h2>
          <p>
            Average value: <span>1700 ml</span>
          </p>
        </TitleWrapper>
        <GraphWrapper />
      </Container>
    </Section>
  );
};
