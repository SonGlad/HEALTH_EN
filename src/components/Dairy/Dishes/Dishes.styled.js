import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;

  .number-list {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
    gap: 40px;
    margin-right: 16px;

    @media screen and (min-width: 834px) {
      gap: 32px;
    }
  }

  .dish {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-grow: 1;

    @media screen and (min-width: 834px) {
      gap: 32px;
    }

    .list-item {
      display: flex;
    }

    .dish-title {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.4;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: baseline;
      flex-grow: 1;
      gap: 6px;

      @media screen and (min-width: 834px) {
        flex-direction: row;
      }
    }

    .nutrients-wrapper {
      display: flex;
      justify-content: end;
      gap: 12px;
      @media screen and (min-width: 834px) {
        gap: 32px;
      }

      span {
        display: flex;
        color: ${props => props.theme.color.primary_grey};
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;

        @media screen and (min-width: 834px) {
          display: none;
          gap: 0px;
        }
      }

      .value {
        display: flex;
        gap: 6px;
        color: ${props => props.theme.color.primary_white};
        /* width: 30px; */
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;

        @media screen and (min-width: 834px) {
          width: 80px;
        }
      }
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
  cursor: pointer;
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
    color: ${props => props.theme.color.primary_grey};
    & svg {
      stroke: ${props => props.theme.color.primary_grey};
    }
  }

  &:focus {
    color: ${props => props.theme.color.primary_grey};
    & svg {
      stroke: ${props => props.theme.color.primary_grey};
    }
  }
`;

export const EditButton = styled.button`
  display: flex;
  /* align-items: center; */
  cursor: pointer;
  padding: 0;
  gap: 6px;
  color: ${props => props.theme.color.primary_grey};
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 16px;
    height: 16px;
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

  @media screen and (min-width: 834px) {
    top: 32px;
    right: 14px;
  }
`;
