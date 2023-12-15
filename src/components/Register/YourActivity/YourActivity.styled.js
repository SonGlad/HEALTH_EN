import styled from "styled-components";
import YourActivityMobile from "../../../images/images/YourActivityMobile-min.png";
import YourActivityTablet from "../../../images/images/YourActivityTablet-2-min.png";
import YourActivityComputer from "../../../images/images/YourActivityComputer-3-min.png";

export const DivYourActivity = styled.div`
  padding-bottom: 24px;
  padding-top: 24px;

  @media only screen and (min-width: 834px) {
    padding-left: 145px;
    padding-right: 145px;
    padding-top: 40px;
    padding-bottom: 186px;
    justify-content: center;
    display: grid;
  }

  @media only screen and (min-width: 1440px) {
    padding-left: 116px;
    padding-right: 116px;
    padding-bottom: 62px;
    display: flex;
    gap: 104px;
  }

  .ImageContainet {
    justify-content: center;
    display: flex;
  }

  .ImgSingUp {
    background-image: url(${YourActivityMobile});
    background-repeat: no-repeat;
    width: 300px;
    height: 290px;

    @media only screen and (min-width: 834px) {
      background-image: url(${YourActivityTablet});
      width: 380px;
      height: 384px;
    }

    @media only screen and (min-width: 1440px) {
      background-image: url(${YourActivityComputer});
      width: 592px;
      height: 598px;
    }
  }

  .DivActivityContainer {
    @media only screen and (min-width: 1440px) {
      padding-right: 100px;
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
      padding-left: 64px;
      padding-right: 64px;
    }

    @media only screen and (min-width: 1440px) {
      text-align: unset;
      padding: 0;
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
      gap: 16px;
    }
  }

  .LabelLast {
    padding-left: 2px;
  }

  .DivButtonSingUp {
    @media only screen and (min-width: 834px) {
      padding-right: 39px;
      padding-left: 39px;
    }

    @media only screen and (min-width: 1440px) {
      padding: 0;
    }
  }

  .ButtonSingUp {
    border-radius: 12px;
    background: ${(props) => props.theme.color.primary_green_lite};
    padding: 8px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    width: 100%;
    margin-top: 24px;

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

  .LabelActivity {
    align-items: center;
    display: flex;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    gap: 8px;
  }

  .ButtonBack {
    color: ${(props) => props.theme.color.primary_grey};
    border: none;
    background-color: transparent;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
    &:hover {
      background-color: transparent;
      color: ${(props) => props.theme.color.primary_grey};
    }
    &:active {
      background-color: transparent;
      color: ${(props) => props.theme.color.primary_grey};
    }
    &:disabled {
      background-color: transparent;
      color: ${(props) => props.theme.color.primary_grey};
      pointer-events: none;
    }
  }

  .DivButtonBack {
    justify-content: center;
    display: flex;
    margin-top: 16px;

    @media only screen and (min-width: 834px) {
      display: flex;
      align-items: baseline;
      gap: 20px;
      margin-top: 20px;
    }

    @media only screen and (min-width: 1440px) {
      width: 212px;
    }
  }
`;
