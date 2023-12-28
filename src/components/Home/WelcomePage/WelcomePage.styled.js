import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  min-width: 300px;
  margin: 0 auto;
  max-width: 320px;
  padding: 0 10px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* outline: 2px solid red;
  outline-offset: -2px; */

  @media screen and (min-width: 834px) {
    max-width: 834px;
    padding: 0 27px;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 34px;
    flex-direction: row;
    justify-content: center;
    gap: 104px;
  }
`;

export const Image = styled.img`
  width: 300px;
  margin: 24px 0 24px;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin: 40px 0 80px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    margin: 40px 0 72px;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: 834px) {
    margin-bottom: 268px;
  }

  @media screen and (min-width: 1440px) {
    margin: 120px 0 196px;
  }

  h1 {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 1.3;
    font-weight: 500;

    @media screen and (min-width: 834px) {
      font-size: 30px;
      line-height: 1.2;
    }
  }
  h2 {
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
    max-width: 410px;
    color: ${props => props.theme.color.primary_grey};

    @media screen and (min-width: 834px) {
      text-align: center;
      font-size: 22px;
      line-height: 1.5;
    }

    @media screen and (min-width: 1440px) {
      text-align: start;
    }
  }

  nav {
    display: flex;
    gap: 16px;
    margin-bottom: 40px;
    align-items: center;

    @media screen and (min-width: 834px) {
      justify-content: center;
      margin-bottom: 80px;
    }

    @media screen and (min-width: 1440px) {
      justify-content: start;
    }
  }

  ul {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 444px;
    align-items: flex-start;

    @media screen and (min-width: 834px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    @media screen and (min-width: 1440px) {
      flex-direction: column;
    }

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
    svg {
      width: 8px;
      height: 8px;
      fill: ${props => props.theme.color.primary_green_lite};
    }
  }
`;

export const SingInLink = styled(NavLink)`
  display: flex;
  width: 142px;
  padding: 8px 10px;
  border-radius: 12px;
  background: ${props => props.theme.color.primary_green_lite};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  justify-content: center;
  color: ${props => props.theme.color.primary_black_2};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 834px) {
    width: 212px;
  }

  &:hover {
    color: ${props => props.theme.color.primary_grey};
  }

  &:focus {
    color: ${props => props.theme.color.primary_grey};
  }
`;

export const SingUpLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  width: 122px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${props => props.theme.color.primary_white};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.color.primary_green_lite};
  }

  &:focus {
    color: ${props => props.theme.color.primary_green_lite};
  }
`;
