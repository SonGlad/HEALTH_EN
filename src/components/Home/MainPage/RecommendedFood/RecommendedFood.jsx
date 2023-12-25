import { Section } from 'components/Section/Section';

import { ReactComponent as ArrowIcon } from '../../../../images/icons-linear/arrow-right.svg';
import SnacksImg from '../../../../images/svgIcon/snack-img.svg';

import { Container, ContentWrapper, FoodLink } from './RecommendedFood.styled';
import { useDispatch } from 'react-redux';
import { useData } from '../../../../hooks/useUserData';
import { useEffect } from 'react';
import { getAllRecommendedFood } from '../../../../redux/Data/data-operations';

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
        <ul>
          {recommendedFood.slice(0, 4).map(({_id, amount, calories, img, name}) =>(
          <li key={_id}>
              <img src={img} alt="Recommended food" onError={(e) => {
                e.target.onerror = null;
                e.target.src = SnacksImg;
              }} />
            <ContentWrapper>
              <h3>{name}</h3>
              <p>
                {amount}<span>{calories} calories</span>
              </p>
            </ContentWrapper>
          </li>))}
          
        </ul>
        <FoodLink to={'/recommended-food'}>
          See more
          <ArrowIcon alt="Arrow Icon" />
        </FoodLink>
      </Container>
    </Section>
  );
};
