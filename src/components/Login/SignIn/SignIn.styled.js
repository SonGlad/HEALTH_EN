import styled from 'styled-components';
import login_mobile from '../../../images/images/login_mobile-min.png';
import login_tablet from '../../../images/images/login_tablet-min.png';
import login_computer from '../../../images/images/login_computer-min.png';
import eye from '../../../images/svgIcon/eye.svg';
import eye_off from '../../../images/svgIcon/eye-off.svg';
import error from '../../../images/svgIcon/error.svg';
import correct from '../../../images/svgIcon/correct.svg';

export const DivSingIn = styled.div`
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

  .ImgSingIn {
    background-image: url(${login_mobile});
    background-repeat: no-repeat;
    width: 300px;
    height: 296px;

    @media only screen and (min-width: 834px) {
      background-image: url(${login_tablet});
      background-repeat: no-repeat;
      width: 380px;
      height: 376px;
    }

    @media only screen and (min-width: 1440px) {
      background-image: url(${login_computer});
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 24px;
    width: 100%;

    @media only screen and (min-width: 834px) {
      width: 380px;
    }

    @media only screen and (min-width: 1440px) {
      width: 212px;
    }
  }

  .InputContainer {
    position: relative;
    margin-bottom: 20px;
  }

  .ButtonNext {
    margin-top: 20px;
    margin-bottom: 14px;
    border-radius: 12px;
    background: ${props => props.theme.color.primary_green_lite};
    padding: 8px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      color: ${props => props.theme.color.primary_grey};
    }

    @media only screen and (min-width: 834px) {
      margin-bottom: 20px;
    }
  }

  .link-color {
    color: ${props => props.theme.color.primary_grey};
  }

  .link {
    margin: 0 auto;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      color: ${props => props.theme.color.primary_green_lite};
    }
  }

  input {
    position: relative;
    padding: 8px 10px;
    border-radius: 12px;
    border: 1px solid ${props => props.theme.color.primary_green_lite};
    background: ${props => props.theme.color.primary_black_2};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;

    width: 100%;
    color: ${props => props.theme.color.primary_white};
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  input::placeholder {
    color: ${props => props.theme.color.primary_grey};
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

  .ShowPassword {
    display: none;
    position: absolute;
    right: 10px;
    top: 18px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${eye_off});
  }

  .HidePassword {
    display: none;
    position: absolute;
    right: 10px;
    top: 18px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${eye});
  }

  .InputContainer:hover .ShowPassword,
  .InputContainer:hover .HidePassword {
    display: block;
  }

  .InputContainer:hover input[name='password'] {
    border: 1px solid ${props => props.theme.color.primary_green_lite};
  }

  .InputContainer[id='password']:hover .ImgError,
  .InputContainer[id='password']:hover .ImgCorrect,
  .InputContainer[id='password']:hover .ErrorText,
  .InputContainer[id='password']:hover .SuccessText {
    display: none;
  }

  .DivContainerSingUp {
    margin-top: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media only screen and (min-width: 834px) {
      justify-content: flex-start;
      align-items: baseline;
      gap: 16px;
      margin-top: 222px;
    }

    @media only screen and (min-width: 1440px) {
      padding-left: 0px;
      margin-top: 184px;
    }
  }

  .SingUpText {
    color: ${props => props.theme.color.primary_grey};
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;

    @media only screen and (min-width: 1440px) {
      font-size: 14px;
    }
  }

  .LinkToSingUp {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;
