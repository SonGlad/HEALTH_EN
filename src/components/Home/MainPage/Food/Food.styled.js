import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 16px 12px;
  background: ${props => props.theme.color.primary_black_2};
  gap: 12px;
  position: relative;

  @media screen and (min-width: 834px) {
    padding: 36px 40px;
    flex-direction: row;
    gap: 40px;
    flex-basis: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media screen and (min-width: 834px) {
      gap: 14px;
    }
  }
  li {
    display: flex;
    gap: 12px;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 2px;
  }

  p {
    display: flex;
    gap: 4px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }
  span {
    color: ${props => props.theme.color.primary_grey};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    width: 36px;
  }
`;

export const Graph = styled.div`
  border-radius: 50%;
  width: 168px;
  height: 168px;
  background: ${props => props.theme.color.primary_green_lite};
`;

export const ItemGraph = styled.div`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background: ${props => props.theme.color.primary_green_lite};
`;

export const ItemWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
