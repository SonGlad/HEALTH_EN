import styled from 'styled-components';

export const DishesWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 16px;

  @media screen and (min-width: 834px) {
    gap: 32px;
    justify-content: space-between;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 6px;

    @media screen and (min-width: 834px) {
      flex-direction: row;
    }
  }
`;

export const DishTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  width: 260px;
`;

export const Nutrients = styled.ul`
  display: flex;
  gap: 12px;

  @media screen and (min-width: 834px) {
    margin-left: 110px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 32px;
  }

  li {
    display: flex;
    @media screen and (min-width: 1440px) {
      gap: 32px;
    }
  }

  div {
    display: flex;
    gap: 6px;
  }
  p {
    color: ${props => props.theme.color.primary_grey};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;

    @media screen and (min-width: 834px) {
      display: none;
    }
  }
  span {
    color: ${props => props.theme.color.primary_white};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;

    @media screen and (min-width: 834px) {
      width: 80px;
    }
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.color.primary_white};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 16px;
    height: 16px;
    stroke: ${props => props.theme.color.primary_white};
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
