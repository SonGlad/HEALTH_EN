import styled from 'styled-components';


export const MealsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 40px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding-bottom: 52px;

   .order-one{
      order: 1;
    }
    .order-two{
      order: 3;
    }
    .order-three{
      order: 2;
    }
    .order-four{
      order: 4;
    }
  }

  div {
    @media screen and (min-width: 1440px) {
      flex: 1;
    }
  }
`;

export const MealsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 12px;
  padding-right: 74px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    margin-bottom: 6px;
    align-items: center;
    padding-right: 86px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: 6px;
    align-items: center;
    padding-right: 74px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;

    @media screen and (min-width: 834px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }
`;

export const TotalNutrients = styled.ul`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
    gap: 20px;
  }
`;
export const NutrientsItem = styled.li`
  display: flex;
  gap: 20px;
  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
  }
`;

export const ItemTitle = styled.p`
  display: flex;
  gap: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  span {
    color: ${props => props.theme.color.primary_grey};
    font-size: 14px;
    font-weight: 500;
    width: 36px;
  }
`;

export const DishesWrapper = styled.div`
  border-radius: 12px;
  background: ${props => props.theme.color.primary_black_2};
  padding: 16px 12px;
  overflow-y: auto;
  height: 240px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 834px) {
    padding: 32px 14px;
  }
`;

export const Numbers = styled.ul`
  gap: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    gap: 32px;
  }

  li {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
  }
`;
