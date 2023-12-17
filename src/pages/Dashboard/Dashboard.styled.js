import styled from 'styled-components';

export const Title = styled.h1`
  opacity: 0;
  position: absolute;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;

  @media screen and (min-width: 834px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
