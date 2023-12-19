import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
    margin-right: 16px;

    @media screen and (min-width: 834px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media screen and (min-width: 834px) {
      flex-direction: row;
      align-items: center;
    }
  }
  img {
    width: 36px;
    height: 36px;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
    width: 100px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 16px;
`;

export const DairyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const DairyLink = styled(NavLink)`
  color: ${props => props.theme.color.primary_grey};
  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.color.primary_green_lite};
  }

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 1.8;
  }
`;

export const ListTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 8px;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.color.primary_green_lite};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 16px;
    height: 16px;
    stroke: ${props => props.theme.color.primary_green_lite};
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${props => props.theme.color.primary_green_lite};
    & svg {
      stroke: ${props => props.theme.color.primary_green_lite};
    }
  }

  &:focus {
    color: ${props => props.theme.color.primary_lite_green};
    & svg {
      stroke: ${props => props.theme.color.primary_lite_green};
    }
  }
`;
