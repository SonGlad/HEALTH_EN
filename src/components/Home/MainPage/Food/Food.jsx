import { Section } from 'components/Section/Section';
import { Container, Graph, ItemGraph, ItemWrapper } from './Food.styled';

export const Food = () => {
  return (
    <Section>
      <h2>Food</h2>
      <Container>
        <Graph></Graph>
        <ul>
          <li>
            <ItemGraph></ItemGraph>
            <div>
              <h3> Carbonohidrates</h3>
              <ItemWrapper>
                <p>
                  Goal: <span>170</span>
                </p>
                <p>
                  left:<span>8</span>
                </p>
              </ItemWrapper>
            </div>
          </li>
          <li>
            <ItemGraph></ItemGraph>
            <div>
              <h3> Protein</h3>
              <ItemWrapper>
                <p>
                  Goal:<span>170</span>
                </p>
                <p>
                  left:<span>8</span>
                </p>
              </ItemWrapper>
            </div>
          </li>
          <li>
            <ItemGraph></ItemGraph>
            <div>
              <h3> Fat</h3>
              <ItemWrapper>
                <p>
                  Goal:<span>170</span>
                </p>
                <p>
                  left:<span>8</span>
                </p>
              </ItemWrapper>
            </div>
          </li>
        </ul>
      </Container>
    </Section>
  );
};
