import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 16px 12px;
  background: ${props => props.theme.color.primary_black_2};
  gap: 12px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 36px;
    padding-left: 40px;
    flex-direction: row;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 36px 86px 36px 40px;
    flex-direction: row;
    gap: 40px;
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
`;
