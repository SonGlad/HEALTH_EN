import { Section } from 'components/Section/Section';

import SnacksImg from '../../images/svgIcon/snack-img.svg';
import RecommendedFoodPhoto from '../../images/images/Ketogenic-diet.png'

import { Container, ContentWrapper,DesctopContainer,StyledImg,ProductsList } from './RecommendedFood.styled';

export const RecommendedFood = () => {
  return (
    <Section>
      <Container>
              <h2>Recommended food</h2>
              <DesctopContainer>
                  <StyledImg
          src={RecommendedFoodPhoto}
          alt="Profile Setting Photo"
        />
              {/* </DesctopContainer> */}
              <ProductsList>
        <ul>
          <li>
            <img src={SnacksImg} alt="Recommended food" />
            <ContentWrapper>
              <h3>Apple</h3>
              <p>
                100 g<span>52 calories</span>
              </p>
            </ContentWrapper>
                  </li>
                  <li>
            <img src={SnacksImg} alt="Recommended food" />
            <ContentWrapper>
              <h3>Strawberries</h3>
              <p>
                100 g<span>32 calories</span>
              </p>
            </ContentWrapper>
                  </li>
                  <li>
            <img src={SnacksImg} alt="Recommended food" />
            <ContentWrapper>
              <h3>Blueberries</h3>
              <p>
                100 g<span>57 calories</span>
              </p>
            </ContentWrapper>
                  </li>
                  <li>
            <img src={SnacksImg} alt="Recommended food" />
            <ContentWrapper>
              <h3>Spinach</h3>
              <p>
                100 g<span>23 calories</span>
              </p>
            </ContentWrapper>
                  </li>
                  <li>
            <img src={SnacksImg} alt="Recommended food" />
            <ContentWrapper>
              <h3>Tofu</h3>
              <p>
                100 g<span>80 calories</span>
              </p>
            </ContentWrapper>
                  </li>
                  <li>
            <img src={SnacksImg} alt="Recommended food" />
            <ContentWrapper>
              <h3>Quinoa</h3>
              <p>
                100 g<span>120 calories</span>
              </p>
            </ContentWrapper>
                  </li>
                  <li>
            <img src={SnacksImg} alt="Recommended food" />
            <ContentWrapper>
              <h3>Greek Yogurt</h3>
              <p>
                100 g<span>59 calories</span>
              </p>
            </ContentWrapper>
          </li>
          <li>
            <img src={SnacksImg} alt="Recommended food" />
            <ContentWrapper>
              <h3>Chicken Breast</h3>
              <p>
                100 g<span>165 calories</span>
              </p>
            </ContentWrapper>
          </li>
          <li>
            <img src={SnacksImg} alt="Recommended food" />
            <ContentWrapper>
              <h3>Vegetable Soup</h3>
              <p>
                100 g<span>59 calories</span>
              </p>
            </ContentWrapper>
          </li>
          <li>
            <img src={SnacksImg} alt="Recommended food" />
            <ContentWrapper>
              <h3>Buckwheat</h3>
              <p>
                100 g<span>340 calories</span>
              </p>
            </ContentWrapper>
          </li>
                  </ul>
              </ProductsList>
                </DesctopContainer>
      </Container>
    </Section>
  );
};
