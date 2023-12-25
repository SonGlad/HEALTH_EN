import { Section } from 'components/Section/Section';
import { Container, ContentWrapper, FoodLink } from './RecommendedFood.styled';
import { ReactComponent as ArrowIcon } from '../../../../images/icons-linear/arrow-right.svg';
import SnacksImg from '../../../../images/svgIcon/snack-img.svg';
import { getAllRecommendedFood } from '../../../../redux/Data/data-operations';
import { useDispatch } from 'react-redux';
import { useData } from '../../../../hooks/useUserData';
import { useEffect, useState } from 'react';


export const RecommendedFood = () => {
  const { recommendedFood } = useData();
  const dispatch = useDispatch();
  const [shuffledFood, setShuffledFood] = useState([]);


  useEffect(() => {
    dispatch(getAllRecommendedFood());
  
  }, [dispatch]);


  useEffect(() => {
    const shuffled = [...recommendedFood].sort(() => Math.random() - 0.5).slice(0, 4);
    setShuffledFood(shuffled);
  }, [recommendedFood]);


  return (
    <Section>
      <Container>
        <h2>Recommended food</h2>
        <ul>
          {shuffledFood.map(({_id, amount, calories, img, name}) =>(
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
          <ArrowIcon className="arrow-see-more" alt="Arrow Icon" />
        </FoodLink>
      </Container>
    </Section>
  );
};
