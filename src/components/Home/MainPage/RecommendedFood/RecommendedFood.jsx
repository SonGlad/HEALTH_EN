import { Section } from 'components/Section/Section';

import { ReactComponent as ArrowIcon } from '../../../../images/icons-linear/arrow-right.svg';
import SnacksImg from '../../../../images/svgIcon/snack-img.svg';

import { Container, ContentWrapper, FoodLink } from './RecommendedFood.styled';

export const RecommendedFood = () => {
  return (
    <Section>
      <Container>
        <h2>Recommended food</h2>
        <ul>
          <li>
            <img src={SnacksImg} alt="Recommended food" />
            <ContentWrapper>
              <h3>Title</h3>
              <p>
                100 g<span>200 calories</span>
              </p>
            </ContentWrapper>
          </li>
          <li>
            <img src={SnacksImg} alt="Recommended food" />
            <ContentWrapper>
              <h3>Title</h3>
              <p>
                100 g<span>200 calories</span>
              </p>
            </ContentWrapper>
          </li>
          <li>
            <img src={SnacksImg} alt="Recommended food" />
            <ContentWrapper>
              <h3>Title</h3>
              <p>
                100 g<span>200 calories</span>
              </p>
            </ContentWrapper>
          </li>
          <li>
            <img src={SnacksImg} alt="Recommended food" />
            <ContentWrapper>
              <h3>Title</h3>
              <p>
                100 g<span>200 calories</span>
              </p>
            </ContentWrapper>
          </li>
        </ul>
        <FoodLink to={'/recommended-food'}>
          See more
          <ArrowIcon className="arrow-see-more" alt="Arrow Icon" />
        </FoodLink>
      </Container>
    </Section>
  );
};
