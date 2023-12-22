import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  ul {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: 16px 22px 16px 12px;
    background: ${props => props.theme.color.primary_black_2};
    gap: 20px;
    width: 100%;

    @media screen and (min-width: 834px) {
      padding: 24px 138px 24px 40px;
      gap: 32px;
    }

    @media screen and (min-width: 1440px) {
      padding: 24px 86px 24px 40px;
    }
  }

  li {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h3 {
    color: ${props => props.theme.color.primary_grey};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 4px;
  }

  p {
    font-size: 34px;
    font-weight: 600;
    line-height: 1.1;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  span {
    color: ${props => props.theme.color.primary_grey};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    margin-left: 4px;
  }
`;
