import { styled } from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 19px 0;

  /* background-color: ${p => p.theme.color.primary_black_2}; */
  @media screen and (min-width: 834px) {
    padding: 34px 0;
  }
`;
