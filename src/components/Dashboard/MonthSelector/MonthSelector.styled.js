import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

  @media screen and (min-width: 834px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
  }

  h2 {
    display: flex;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  div {
    position: relative;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: flex;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.6;
    position: relative;

    @media screen and (min-width: 834px) {
      font-size: 30px;
      line-height: 1.2;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    margin-left: 6px;

    @media screen and (min-width: 834px) {
      margin-left: 12px;
    }
  }
  svg {
    width: 16px;
    height: 16px;
    stroke: ${props => props.theme.color.primary_white};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
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

export const List = styled.ul`
  &.hidden {
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    gap: 6px;
    width: 212px;
    height: 144px;
    border-radius: 12px;
    background: ${props => props.theme.color.primary_black_2};
    overflow-y: auto;
    position: absolute;
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
    visibility: hidden;
    opacity: 0;

    li {
      font-weight: 400;
      line-height: 20px;
      cursor: pointer;
    }

    p {
      color: ${props => props.theme.color.primary_grey};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.4;
      text-align: start;
      width: 100%;
      padding-left: 16px;

      &:hover {
        background: rgba(255, 255, 255, 0.03);
        color: ${props => props.theme.color.primary_green_lite};
      }

      &:focus {
        background: rgba(255, 255, 255, 0.03);
        color: ${props => props.theme.color.primary_green_lite};
      }
    }
  }

  &.active {
    z-index: 1;
    visibility: visible;
    opacity: 1;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
