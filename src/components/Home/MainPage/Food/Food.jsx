import { Section } from 'components/Section/Section';
import { Container } from './Food.styled';
import { CaloriesChart } from './CaloriesChart/CaloriesChart';
import { CarbonohidratesChart } from './CarbonohidratesChart/CarbonohidratesChart';
import { ProteinChart } from './ProteinChart/ProteinChart';
import { FatChart } from './FatChart/FatChart';

export const Food = () => {
  return (
    <Section>
      <h2>Food</h2>
      <Container>
        <CaloriesChart />
        <ul>
          <li>
            <CarbonohidratesChart />
          </li>
          <li>
            <ProteinChart />
          </li>
          <li>
            <FatChart />
          </li>
        </ul>
      </Container>
    </Section>
  );
};
