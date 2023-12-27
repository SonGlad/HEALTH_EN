import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

  @media screen and (min-width: 834px) {
    padding: 24px 0 16px;
  }

  div {
    position: relative;
    display: flex;
  }

  button {
    cursor: pointer;
    min-width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${props => props.theme.color.primary_white};
    border: none;
    padding: 0;
    gap: 6px;
    display: flex;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.6;
    position: relative;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 10px;

    &:hover, &:focus{
      color:${props => props.theme.color.primary_green_lite};
    }

    @media screen and (min-width: 834px) {
      gap: 12px;
      font-size: 30px;
      line-height: 1.2;
    }
    svg {
      width: 16px;
      height: 16px;
      stroke: ${props => props.theme.color.primary_white};
      transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
      transform: rotate(0deg);
    }
    &:hover {
      svg {
        stroke: ${props => props.theme.color.primary_green_lite};
      }
    }
    &:focus {
      svg {
        stroke: ${props => props.theme.color.primary_green_lite};
        transform: rotate(-180deg);
      }
    }
  }

  h2 {
    display: flex;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
  }

  li {
    color: ${props => props.theme.color.primary_grey};
    font-size: 14px;
    font-style: normal;
    text-align: start;
    width: 100%;
    padding-left: 16px;
    font-weight: 400;
    line-height: 1.4;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background: rgba(255, 255, 255, 0.03);
      color: ${props => props.theme.color.primary_green_lite};
    }

    &:focus {
      background: rgba(255, 255, 255, 0.03);
      color: ${props => props.theme.color.primary_green_lite};
    }

    &:last-child {
      margin-bottom: 10px;
    }
  }

  .list {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    margin-top: 14px;
    gap: 6px;
    width: 212px;
    height: 144px;
    border-radius: 12px;
    background: ${props => props.theme.color.primary_black_2};
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
    overflow-y: auto;
    position: absolute;
    opacity: 1;
    transform-origin: left top;
    transform: scaleX(0) scaleY(0);

    @media screen and (min-width: 834px) {
      margin-top: 16px;
    }
  }

  .select .list {
    height: 0px;
    top: 25%;
    z-index: -1;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .select .open {
    height: 144px;
    /* top: 50%; */
    top: 25px;
    z-index: 1;
    visibility: visible;
    opacity: 1;
    transform: scaleX(1) scaleY(1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  *::-webkit-scrollbar {
    display: none;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }

  *::-moz-scrollbar {
    display: none;
  }
`;

export const BackLink = styled(NavLink)`
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 7px;
    stroke: ${props => props.theme.color.primary_grey};
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: 834px) {
      width: 24px;
      height: 24px;
      margin-right: 6px;
    }

    @media screen and (min-width: 1440px) {
      margin-right: 12px;
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
