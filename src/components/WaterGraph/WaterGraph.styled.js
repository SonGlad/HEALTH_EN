import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    justify-content: start;
    gap: 40px;
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

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }
  span {
    color: ${props => props.theme.color.primary_grey};
    font-weight: 500;
    margin-left: 8px;
  }
`;

export const GraphWrapper = styled.div`
  width: 676px;
  height: 382px;
  border-radius: 12px;
  background: ${props => props.theme.color.primary_black_2};

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 676px;
  }
`;
