import { Section } from 'components/Section/Section';
import { GraphWrapper, TitleWrapper } from './WaterGraph.styled';

export const WaterGraph = () => {
  return (
    <Section>
      <div>
        <TitleWrapper>
          <h2>Waters</h2>
          <p>
            Average value: <span>1700 ml</span>
          </p>
        </TitleWrapper>
        <GraphWrapper>
          <div></div>
        </GraphWrapper>
      </div>
    </Section>
  );
};
