import styled from 'styled-components';
import register_mobile from '../../../images/images/register_mobile-min.png';
import register_tablet from '../../../images/images/register_tablet-min.png';
import register_computer from '../../../images/images/register_computer-min.png';
import error from '../../../images/svgIcon/error.svg';
import correct from '../../../images/svgIcon/correct.svg';
import eye from '../../../images/svgIcon/eye.svg';
import eye_off from '../../../images/svgIcon/eye-off.svg';

export const DivSingUp = styled.div`
  padding-bottom: 40px;
  padding-top: 24px;

  @media only screen and (min-width: 834px) {
    padding-bottom: 60px;
    padding-top: 40px;
    justify-content: center;
    display: grid;
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    gap: 104px;
  }

  .ImageContainet {
    justify-content: center;
    display: flex;
  }

  .ImgSingUp {
    background-image: url(${register_mobile});
    background-repeat: no-repeat;
    width: 300px;
    height: 296px;

    @media only screen and (min-width: 834px) {
      background-image: url(${register_tablet});
      background-repeat: no-repeat;
      width: 380px;
      height: 376px;
    }

    @media only screen and (min-width: 1440px) {
      background-image: url(${register_computer});
      background-repeat: no-repeat;
      width: 592px;
      height: 588px;
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
      font-size: 22px;
      line-height: 32px;
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
    display: grid;
    margin-top: 24px;
    gap: 20px;

    @media only screen and (min-width: 834px) {
      padding-left: 24px;
      padding-right: 24px;
    }

    @media only screen and (min-width: 1440px) {
      padding-left: 0px;
      padding-right: 220px;
    }
  }

  .ButtonNext {
    margin-top: 12px;
    border-radius: 12px;
    color: ${props => props.theme.color.primary_black_2};
    background: ${props => props.theme.color.primary_green_lite};
    padding: 8px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:active,
    &:hover {
      color: ${props => props.theme.color.primary_grey};
    }

    &:disabled {
      color: ${(props) => props.theme.color.primary_grey};
      pointer-events: none;
    }
  }

  .DivInput {
    position: relative;
  }

  input {
    position: relative;
    width: 100%;
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
  }

  .ErrorInput {
    border: 1px solid #e74a3b;
  }

  .SuccessInput {
    border: 1px solid #3cbc81;
  }

  .ImgError {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${error});
  }

  .ImgCorrect {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${correct});
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
    position: absolute; //add
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

  .DivInput:hover .ShowPassword,
  .DivInput:hover .HidePassword {
    display: block;
  }

  .DivInput:hover input[name='password'] {
    border: 1px solid ${props => props.theme.color.primary_green_lite};
  }

  .DivInput[id='password']:hover .ImgError,
  .DivInput[id='password']:hover .ImgCorrect,
  .DivInput[id='password']:hover .ErrorText,
  .DivInput[id='password']:hover .SuccessText {
    display: none;
  }

  .ShowPassword {
    display: none;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${eye_off});
  }

  .HidePassword {
    display: none;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${eye});
  }

  input::placeholder {
    color: ${props => props.theme.color.primary_grey};
  }

  .DivContainerSingIn {
    margin-top: 48px;

    @media only screen and (min-width: 834px) {
      display: flex;
      align-items: baseline;
      gap: 16px;
      margin-top: 206px;
      padding-left: 24px;
    }

    @media only screen and (min-width: 1440px) {
      padding-left: 0px;
      margin-top: 168px;
    }
  }

  .SingInText {
    color: ${props => props.theme.color.primary_grey};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  .LinkToSingIn {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-top: 16px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:active,
    &:hover {
      color: ${props => props.theme.color.primary_green_lite};
    }
  }
`;
