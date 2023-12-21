import styled from 'styled-components';
import login_mobile from '../../../images/images/login_mobile-min.png';
import login_tablet from '../../../images/images/login_tablet-min.png';
import login_computer from '../../../images/images/login_computer-min.png';

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
    display: grid;
    margin-top: 24px;
    gap: 20px;

    @media only screen and (min-width: 834px) {
      padding-left: 24px;
      padding-right: 24px;
    }

    @media only screen and (min-width: 1440px) {
      padding-left: 0px;
      padding-right: 232px;
    }
  }

  .Button {
    margin-top: 12px;
    border-radius: 12px;
    background: ${props => props.theme.color.primary_green_lite};
    padding: 8px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
  }

  .Input {
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

  input::placeholder {
    color: ${props => props.theme.color.primary_grey};
  }

  .DivContainerSingUp {
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

  .SingUpText {
    color: ${props => props.theme.color.primary_grey};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  .LinkToSingUp {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-top: 16px;
  }
`;
