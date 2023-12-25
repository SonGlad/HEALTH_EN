import { Section } from 'components/Section/Section';

import SnacksImg from '../../images/svgIcon/snack-img.svg';
import RecommendedFoodPhoto from '../../images/images/Ketogenic-diet.png'

import { Container, ContentWrapper,DesctopContainer,StyledImg,ProductsList } from './RecommendedFood.styled';
import { useData } from '../../hooks/useUserData';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllRecommendedFood } from '../../redux/Data/data-operations';

export const RecommendedFood = () => {
  const { recommendedFood } = useData()
  const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllRecommendedFood());
    
  }, [dispatch]);
  return (
    <Section>
      <Container>
        <h2>Recommended food</h2>
        <DesctopContainer>
          <StyledImg
          src={RecommendedFoodPhoto}
          alt="Profile Setting Photo"
          />
          <ProductsList>
            <ul>
            {recommendedFood.map(({_id, amount, calories, img, name}) =>(
              <li key={_id}>
                  <img src={img} alt="Recommended food" onError={(e) => {
                e.target.onerror = null; 
                e.target.src = SnacksImg; 
              }}/>
                <ContentWrapper>
                  <h3>{name}</h3>
                  <p>
                    {amount}<span>{calories} calories</span>
                  </p>
                </ContentWrapper>
              </li>))}
            </ul>
          </ProductsList>
        </DesctopContainer>
      </Container>
    </Section>
  );
};
