import styled from "styled-components";

export const WaterModalContainer = styled.div`
  width: 300px;
  height: 266px;
  padding-top: 16px;
  padding-right: 12px;
  padding-bottom: 24px;
  padding-left: 12px;
  text-align: center;

  border-radius: 12px;
  background: ${(props) => props.theme.color.primary_black_2};

  @media only screen and (min-width: 834px) {
    width: 338px;
    height: 280px;
    padding-top: 24px;
    padding-right: 40px;
    padding-left: 40px;
  }

  .H2 {
    color: ${(props) => props.theme.color.primary_white};
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    text-align: left;

    @media only screen and (min-width: 834px) {
      text-align: center;
      font-size: 29px;
    }
  }

  .Form {
    display: grid;
    justify-content: center;
  }

  .LabelInput {
    display: grid;
    text-align: left;
    flex-direction: column;
    width: 276px;
    margin-top: 24px;
    font-size: 14px;
    line-height: 20px;

    @media only screen and (min-width: 834px) {
      width: 212px;
    }
  }

  .water-input {
    margin-top: 12px;
    padding: 8px 10px;
    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.color.primary_green_lite};
    background: ${(props) => props.theme.color.primary_black_2};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${(props) => props.theme.color.primary_white};
    &:focus {
      outline: none;
      box-shadow: none;
    }

    &::placeholder {
      color: ${(props) => props.theme.color.primary_grey};
    }
  }

  .water-input[type="number"]::-webkit-inner-spin-button,
  .water-input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .ButtonConfirm {
    margin-top: 32px;
    border-radius: 12px;
    color: ${(props) => props.theme.color.primary_black_2};
    background: ${(props) => props.theme.color.primary_green_lite};
    padding: 8px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);


    &:active,
    &:hover,
    &:focus {
      color: ${(props) => props.theme.color.primary_grey};
    }
    &:disabled {
      color: ${(props) => props.theme.color.primary_grey};
      pointer-events: none;
    }
  }

  .ButtonCancel {
    margin-top: 16px;

    color: ${(props) => props.theme.color.primary_grey};
    border: none;
    background-color: transparent;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
    text-align: center;
    display: inline;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);


    &:active,
    &:hover,
    &:focus {
      background-color: transparent;
      color: ${(props) => props.theme.color.primary_green_lite};
    }
  }
`;
