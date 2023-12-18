import styled from 'styled-components';

export const NavigationStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: 700;
    color: ${p => p.theme.color.primary_grey};
    font-size: 16px;
    transition: color 0.25s;

    /* &:hover,
    &:focus {
      color: ${p => p.theme.color.primary_green_lite};
    } */

    @media screen and (min-width: 835px) {
      font-size: 22px;
    }
  }

  .link.active {
    color: ${p => p.theme.color.primary_green_lite};
  }
`;
