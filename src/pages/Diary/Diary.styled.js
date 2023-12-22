import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px 0 16px;

  @media screen and (min-width: 834px) {
    gap: 16px;
    padding: 24px 0 16px;
  }

  h1 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.3;

    @media screen and (min-width: 834px) {
      font-size: 30px;
      line-height: 1.2;
    }
  }
`;

export const BackLink = styled(NavLink)`
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
    stroke: ${props => props.theme.color.primary_grey};
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: 834px) {
      width: 24px;
      height: 24px;
    }

    @media screen and (min-width: 1440px) {
    }
  }

  &:hover {
    svg {
      stroke: ${props => props.theme.color.primary_green_lite};
    }
  }
  &:focus {
    svg {
      stroke: ${props => props.theme.color.primary_green_lite};
    }
  }
`;
