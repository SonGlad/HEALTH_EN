import styled from "styled-components";
import YourGoalMobile from "../../../images/images/YourGoalMobile-min.png";
import YourGoalTablet from "../../../images/images/YourGoalTablet-min.png";
import YourGoalComputer from "../../../images/images/YourGoalComputer-min.png";

export const DivYourGoal = styled.div`
  padding-bottom: 24px;
  padding-top: 24px;

  @media only screen and (min-width: 834px) {
    padding-left: 158px;
    padding-right: 158px;
    padding-top: 40px;
    padding-bottom: 366px;
    justify-content: center;
    display: grid;
  }

  @media only screen and (min-width: 1440px) {
    padding-left: 116px;
    padding-right: 116px;
    padding-bottom: 86px;
    display: flex;
    gap: 104px;
  }

  .ImageContainet {
    justify-content: center;
    display: flex;
  }

  .ImgSingUp {
    background-image: url(${YourGoalMobile});
    background-repeat: no-repeat;
    width: 300px;
    height: 304px;

    @media only screen and (min-width: 834px) {
      background-image: url(${YourGoalTablet});
      background-repeat: no-repeat;
      width: 380px;
      height: 384px;
    }

    @media only screen and (min-width: 1440px) {
      background-image: url(${YourGoalComputer});
      background-repeat: no-repeat;
      width: 592px;
      height: 598px;
    }
  }

  .H2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;

    @media only screen and (min-width: 834px) {
      text-align: center;
      font-size: 30px;
      line-height: 36px;
    }
    @media only screen and (min-width: 1440px) {
      text-align: unset;
    }
  }

  .TitleText {
    color: ${(props) => props.theme.color.primary_grey};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 16px;

    @media only screen and (min-width: 834px) {
      text-align: center;
      font-size: 22px;
      line-height: 32px;
    }

    @media only screen and (min-width: 1440px) {
      text-align: unset;
    }
  }

  .TitleContainer {
    margin-top: 24px;

    @media only screen and (min-width: 834px) {
      margin-top: 60px;
    }

    @media only screen and (min-width: 1440px) {
      margin-top: 80px;
    }
  }

  .Form {
    @media only screen and (min-width: 834px) {
      justify-content: center;
      display: grid;
      padding: 0;
    }

    @media only screen and (min-width: 1440px) {
      justify-content: flex-start;
    }
  }

  .DivRadioButton {
    display: grid;
    margin-top: 24px;
    gap: 24px;

    @media only screen and (min-width: 834px) {
      display: flex;
      justify-content: center;
    }

    @media only screen and (min-width: 1440px) {
      display: grid;
      justify-content: flex-start;
      gap: 16px;
    }
  }

  .ButtonNext {
    border-radius: 12px;
    color: ${(props) => props.theme.color.primary_black_2};
    background: ${(props) => props.theme.color.primary_green_lite};
    padding: 8px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 20px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:active,
    &:hover {
      color: ${(props) => props.theme.color.primary_grey};
    }

    &:disabled {
      color: ${(props) => props.theme.color.primary_grey};
      pointer-events: none;
    }

    @media only screen and (min-width: 1440px) {
      width: 212px;
    }
  }

  .Input {
    position: relative;
    height: 12px;
    width: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;
    margin-right: 8px;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: ${(props) => props.theme.color.primary_black_2};
      border: 1px solid ${(props) => props.theme.color.primary_grey};
    }

    &:checked::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.primary_green_lite};
      transform: translate(-50%, -50%);
      visibility: visible;
    }
  }

  .LabelGoal {
    align-items: center;
    display: flex;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    width: 112px;
  }

  .ButtonBack {
    color: ${(props) => props.theme.color.primary_grey};
    border: none;
    background-color: transparent;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: transparent;
      color: ${(props) => props.theme.color.primary_green_lite};
    }
    &:active {
      background-color: transparent;
      color: ${(props) => props.theme.color.primary_green_lite};
    }
  }
`;
