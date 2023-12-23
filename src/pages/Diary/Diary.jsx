import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { BackLink, Title } from './Diary.styled';
import { ReactComponent as ArrowIcon } from '../../images/icons-linear/arrow-left.svg';
import { FoodInfo } from 'components/Dairy/FoodInfo';

const DiaryPage = () => {
  return (
    <Section>
      <Container>
        <Title>
          <BackLink to={'/main'}>
            <ArrowIcon alt="Arrow Icon" />
          </BackLink>
          <h1>Dairy</h1>
        </Title>
        <FoodInfo />
      </Container>
    </Section>
  );
};

export default DiaryPage;
