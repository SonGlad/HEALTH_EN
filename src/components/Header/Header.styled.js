import { styled } from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: ${p => p.theme.color.primary_black_2};
`;

export const ContainerForHeader = styled.div`
  display: flex;
  padding: 19px 0;
  width: 100%;
  //position for the "accordion" of the mobile menu
  position: relative;

  @media screen and (min-width: 834px) {
    padding: 34px 0;
  }
`;
