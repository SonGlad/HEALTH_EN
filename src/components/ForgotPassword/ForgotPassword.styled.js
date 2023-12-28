import styled from "styled-components";
import login_mobile from "../../images/images/login_mobile-min.png";
import login_tablet from "../../images/images/login_tablet-min.png";
import login_computer from "../../images/images/login_computer-min.png";
import error from "../../images/svgIcon/error.svg";
import correct from "../../images/svgIcon/correct.svg";

export const DivForgotPassword = styled.div`
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
    color: ${(props) => props.theme.color.primary_grey};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 16px;

    @media only screen and (min-width: 834px) {
      font-size: 22px;
      line-height: 32px;
      text-align: center;
      width: 544px;
    }
    @media screen and (min-width: 1440px) {
      text-align: left;
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
    margin-top: 24px;
    gap: 40px;

    @media only screen and (min-width: 834px) {
      max-width: 380px;
      margin-left: auto;
      margin-right: auto;
    }

    @media only screen and (min-width: 1440px) {
      margin-left: 0;
      margin-right: 0;
      max-width: 212px;
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
  }

  .ErrorInput {
    border: 1px solid #e74a3b;
  }

  .SuccessInput {
    border: 1px solid #3cbc81;
  }

  .ImgError {
    position: absolute;
    right: 12px;
    top: 19px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${error});
  }

  .ImgCorrect {
    position: absolute;
    right: 12px;
    top: 19px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${correct});
  }

  .ErrorText {
    margin-top: 4px;
    margin-bottom: -18px;
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
    margin-top: 4px;
    margin-bottom: -18px;
    margin-left: 10px;
    color: #3cbc81;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;

    @media only screen and (min-width: 1440px) {
      max-width: 200px;
    }
  }

  .Button {
    padding: 8px 10px;
    border-radius: 12px;
    background: ${(props) => props.theme.color.primary_green_lite};
    cursor: pointer;
    width: 100%;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus,
    &:hover {
      color: ${(props) => props.theme.color.primary_grey};
    }
  }

  @media only screen and (min-width: 834px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 1440px) {
  }

  .DivContainerSingIn {
    margin-top: 56px;

    @media only screen and (min-width: 834px) {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-top: 286px;
      margin-left: -65px;
    }

    @media only screen and (min-width: 1440px) {
      margin-left: 0px;
      margin-top: 248px;
      justify-content: flex-start;
    }
  }

  .LinkToSingIn {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-top: 16px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus,
    &:hover {
      color: ${(props) => props.theme.color.primary_green_lite};
    }

    @media only screen and (min-width: 834px) {
      margin-top: 0;
    }
  }
`;

export const SingInText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.color.primary_grey};
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
