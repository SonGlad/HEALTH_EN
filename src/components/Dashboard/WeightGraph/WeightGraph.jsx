import React from 'react';
import { Section } from 'components/Section/Section';
import { GraphWrapper, TitleWrapper, ValuesList } from './WeightGraph.styled';
import { nanoid } from 'nanoid';

//********************************** */ json with data
import statistics from '../../../utils/statistics';

// ********************************** waterValue
export const WeightGraph = () => {
  const weightData = statistics.data.weight;

  const validWeightData = weightData.filter(item => item.weight !== 0);
  const values = validWeightData.map(entry => entry.weight);

  const averageValue = Math.round(
    values.reduce((sum, value) => sum + value, 0) / values.length
  );

  return (
    <Section>
      <div>
        <TitleWrapper>
          <h2>Weights</h2>
          <p>
            Average value: <span>{averageValue} kg</span>
          </p>
        </TitleWrapper>
        <GraphWrapper>
          <div>
            <ValuesList>
              {/* add DATA ************************/}
              {weightData.map(item => (
                <li key={nanoid()}>
                  <p>{item.weight}</p>
                  <span>{item.date}</span>
                </li>
              ))}
            </ValuesList>
          </div>
        </GraphWrapper>
      </div>
    </Section>
  );
};
