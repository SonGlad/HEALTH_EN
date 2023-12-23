import styled from 'styled-components';

export const NavigationStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
  .link {
    margin-top: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &:focus {
      color: ${p => p.theme.color.primary_green_lite};
    }
  }

  .link:hover .header-logo{
    color: ${p => p.theme.color.primary_green_lite};
    fill: ${(props) => props.theme.color.primary_green_lite};
  }

  .header-logo{
    fill: ${(props) => props.theme.color.primary_grey};
    stroke: inherit;
    width: 102px;
    height: 22px;
    transition: fill 0.25s;

    @media screen and (min-width: 835px) {
      width: 140px;
      height: 32px;
    }
  }
`;
