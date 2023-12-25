import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  h2 {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 16px;

    @media screen and (min-width: 834px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 16px;

    & > :nth-last-child(-n + 2) {
      display: none;
    }

    @media screen and (min-width: 834px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
      & > :nth-last-child(-n + 2) {
        display: flex;
      }
    }

    @media screen and (min-width: 1440px) {
      font-size: 22px;
      line-height: 1.5;
      width: 676px;
    }
  }

  li {
    border-radius: 12px;
    background: ${props => props.theme.color.primary_black_2};
    display: flex;
    align-items: center;
    padding: 20px 24px;
    gap: 20px;

    @media screen and (min-width: 834px) {
      width: calc((100% - 20px) / 2);
    }

    img {
      width: 46px;
      height: 46px;
    }
  }
`;

export const ContentWrapper = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 2px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }

  span {
    color: ${props => props.theme.color.primary_grey};
    font-weight: 500;
    margin-left: 6px;
  }
`;

export const FoodLink = styled(NavLink)`
  display: flex;
  color: ${props => props.theme.color.primary_grey};
  text-align: right;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  align-items: center;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 110px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
  }

  svg {
    width: 16px;
    height: 16px;
    margin-left: 6px;
    stroke: ${props => props.theme.color.primary_grey};
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${props => props.theme.color.primary_green_lite};
    & svg {
      stroke: ${props => props.theme.color.primary_green_lite};
    }
  }

  &:focus {
    color: ${props => props.theme.color.primary_green_lite};
    & svg {
      stroke: ${props => props.theme.color.primary_green_lite};
    }
  }
`;

// export const FoodLink = styled(NavLink)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: ${props => props.theme.color.primary_grey};
//   font-size: 14px;
//   font-weight: 500;
//   text-align: center;
//   width: 140px;
//   height: 22px;

//   @media screen and (min-width: 834px) {
//     font-size: 16px;
//   }

//   &::after {
//     content: '\u2192';
//     font-size: 22px;
//     margin-left: 18px;
//     opacity: 0;
//     transform: translateX(-20px);
//     transition: opacity 0.3s, transform 0.3s;
//     animation: arrowAnimation 2s infinite;
//   }

//   &:hover {
//     color: ${props => props.theme.color.primary_green_lite};

//     &::after {
//       opacity: 1;
//       transform: translateX(0);
//     }
//   }

//   @keyframes arrowAnimation {
//     0%,
//     100% {
//       opacity: 0;
//       transform: translateX(-20px);
//     }
//     50% {
//       opacity: 1;
//       transform: translateX(0);
//     }
//   }
// `;
