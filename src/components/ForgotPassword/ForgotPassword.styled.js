import styled from 'styled-components';
import login_mobile from '../../images/images/login_mobile-min.png';
import login_tablet from '../../images/images/login_tablet-min.png';
import login_computer from '../../images/images/login_computer-min.png';

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
    color: ${props => props.theme.color.primary_grey};
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
    align-items: center;
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

  .Button {
    padding: 8px 10px;
    border-radius: 12px;
    background: ${props => props.theme.color.primary_green_lite};
    width: 100%;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
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
    @media only screen and (min-width: 834px) {
      margin-top: 0;
    }
  }
`;
export const SingInText = styled.p`
  font-size: 14px;
  color: ${props => props.theme.color.primary_grey};
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const Attention = styled.p`
  color: #e74a3b;
  text-align: left;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  padding-top: 4px;
  padding-bottom: 14px;
`;
export const Label = styled.label`
  padding: 8px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 300px;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.color.primary_green_lite};
  background: ${props => props.theme.color.primary_black_2};
  &.input-error {
    border-color: #e74a3b;
  }
  @media screen and (min-width: 834px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Input = styled.input`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: transparent;
  width: 100%;
  border: none;
  color: ${props => props.theme.color.primary_white};

  &:focus {
    outline: none;
  }
`;
