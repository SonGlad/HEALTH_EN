import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  padding-bottom: 60px;

  @media screen and (min-width: 834px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding-bottom: 40px;
  }
`;
