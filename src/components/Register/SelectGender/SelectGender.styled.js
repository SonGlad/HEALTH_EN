import styled from 'styled-components';
import SelectGenderMobile from '../../../images/images/SelectGenderMobile-min.png';
import SelectGenderTablet from '../../../images/images/SelectGenderTablet-min.png';
import SelectGenderComputer from '../../../images/images/SelectGenderComputer-min.png';
import error from '../../../images/svgIcon/error.svg';
import correct from '../../../images/svgIcon/correct.svg';

export const DivSelectGender = styled.div`
  padding-bottom: 24px;
  padding-top: 24px;

  @media only screen and (min-width: 834px) {
    padding-left: 200px;
    padding-right: 200px;
    padding-top: 40px;
    padding-bottom: 228px;
    justify-content: center;
    display: grid;
  }

  @media only screen and (min-width: 1440px) {
    padding-left: 116px;
    padding-right: 116px;
    padding-bottom: 90px;
    display: flex;
    gap: 104px;
  }

  .ImageContainet {
    justify-content: center;
    display: flex;
  }

  .ImgSingUp {
    background-image: url(${SelectGenderMobile});
    background-repeat: no-repeat;
    width: 300px;
    height: 288px;

    @media only screen and (min-width: 834px) {
      background-image: url(${SelectGenderTablet});
      width: 380px;
      height: 366px;
    }

    @media only screen and (min-width: 1440px) {
      background-image: url(${SelectGenderComputer});
      width: 592px;
      height: 570px;
    }
  }

  .DivGenderContainer {
    @media only screen and (min-width: 1440px) {
      padding-right: 70px;
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
    color: ${props => props.theme.color.primary_grey};
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
    @media only screen and (min-width: 1440px) {
      justify-content: flex-start;
    }
  }

  .RadioButtonsContainer {
    display: flex;
    gap: 16px;
    margin-top: 12px;

    @media only screen and (min-width: 1440px) {
      display: grid;
    }
  }

  .DivRadioButton {
    margin-top: 24px;

    @media only screen and (min-width: 834px) {
      display: block;
    }

    @media only screen and (min-width: 1440px) {
      display: grid;
      justify-content: flex-start;
    }
  }

  .LabelInput {
    margin-top: 24px;
    color: ${props => props.theme.color.primary_white};
    font-size: 14px;
    line-height: 20px;
  }

  .DivInput {
    position: relative;
  }

  input[type='text'] {
    width: 100%;
    margin-top: 12px;
    padding: 8px 10px;
    border-radius: 12px;
    border: 1px solid ${props => props.theme.color.primary_green_lite};
    background: ${props => props.theme.color.primary_black_2};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${props => props.theme.color.primary_white};
    &:focus {
      outline: none;
      box-shadow: none;
    }

    @media only screen and (min-width: 1440px) {
      width: 212px;
    }
  }

  .ErrorInput {
    border: 1px solid #e74a3b;
    width: 100%;
    margin-top: 12px;
    padding: 8px 10px;
    border-radius: 12px;
    background: ${props => props.theme.color.primary_black_2};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${props => props.theme.color.primary_white};
    &:focus {
      outline: none;
      box-shadow: none;
    }

    @media only screen and (min-width: 1440px) {
      width: 212px;
    }
  }

  .SuccessInput {
    border: 1px solid #3cbc81;
    width: 100%;
    margin-top: 12px;
    padding: 8px 10px;
    border-radius: 12px;
    background: ${props => props.theme.color.primary_black_2};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${props => props.theme.color.primary_white};
    &:focus {
      outline: none;
      box-shadow: none;
    }

    @media only screen and (min-width: 1440px) {
      width: 212px;
    }
  }

  .ImgError {
    position: absolute;
    right: 10px;
    top: 72%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${error});

    @media only screen and (min-width: 1440px) {
      top: 79%;
    }
  }

  .ImgCorrect {
    position: absolute;
    right: 10px;
    top: 72%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${correct});

    @media only screen and (min-width: 1440px) {
      top: 79%;
    }
  }

  .ErrorText {
    position: absolute;
    margin-top: 4px;
    margin-left: 10px;
    color: #e74a3b;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;

    @media only screen and (min-width: 1440px) {
      max-width: 200px;
    }
  }

  .SuccessText {
    position: absolute;
    margin-top: 4px;
    margin-left: 10px;
    color: #3cbc81;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;

    @media only screen and (min-width: 1440px) {
      max-width: 200px;
    }
  }

  input::placeholder {
    color: ${props => props.theme.color.primary_grey};
  }

  .ButtonNext {
    border-radius: 12px;
    background: ${props => props.theme.color.primary_green_lite};
    padding: 8px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 20px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:active,
    &:hover {
      color: ${props => props.theme.color.primary_grey};
    }

    &:disabled {
      color: ${props => props.theme.color.primary_grey};
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
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: ${props => props.theme.color.primary_black_2};
      border: 1px solid ${props => props.theme.color.primary_grey};
    }

    &:checked::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: ${props => props.theme.color.primary_green_lite};
      transform: translate(-50%, -50%);
      visibility: visible;
    }
  }

  .LabelGenderButton {
    color: ${props => props.theme.color.primary_white};
    font-size: 14px;
    line-height: 20px;
  }

  .LabelGender {
    align-items: center;
    display: flex;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    width: 140px;
  }

  .ButtonBack {
    color: ${props => props.theme.color.primary_grey};
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
      color: ${props => props.theme.color.primary_green_lite};
    }
    &:active {
      background-color: transparent;
      color: ${props => props.theme.color.primary_green_lite};
    }

    @media only screen and (min-width: 1440px) {
      width: 212px;
    }
  }
`;
