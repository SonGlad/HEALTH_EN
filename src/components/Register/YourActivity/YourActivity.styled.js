import styled from 'styled-components';
import YourActivityMobile from '../../../images/images/YourActivityMobile-min.png';
import YourActivityTablet from '../../../images/images/YourActivityTablet-2-min.png';
import YourActivityComputer from '../../../images/images/YourActivityComputer-3-min.png';

export const DivYourActivity = styled.div`
  padding: 24px 0px;

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
    margin-bottom: 24px;

    @media only screen and (min-width: 834px) {
      margin-bottom: 60px;
    }
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
      padding-top: 120px;
      padding-right: 100px;
    }
  }

  .H2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;

    margin-bottom: 16px;

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
    margin-bottom: 24px;
  }

  .FormRadioButton {
    @media only screen and (min-width: 834px) {
      justify-content: center;
      padding: 0;
    }

    @media only screen and (min-width: 1440px) {
      justify-content: flex-start;
    }
  }

  .Input {
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
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: ${props => props.theme.color.primary_green_lite};
      transform: translate(-50%, -50%);
      visibility: visible;
    }
  }

  .LabelActivity {
    position: relative;

    align-items: center;
    display: flex;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;

    margin-bottom: 16px;
    padding-left: 8px;
  }

  .LabelActivity:last-of-type {
    margin-bottom: 24px;
  }

  .ButtonSingUp {
    display: flex;
    justify-content: center;
    border-radius: 12px;
    color: ${props => props.theme.color.primary_black_2};
    background: ${props => props.theme.color.primary_green_lite};
    padding: 8px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    width: 100%;
    margin-bottom: 16px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:active,
    &:hover {
      color: ${(props) => props.theme.color.primary_grey};
    }
    &:disabled {
      color: ${(props) => props.theme.color.primary_grey};
      pointer-events: none;
    }

    @media only screen and (min-width: 834px) {
      width: 360px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
    }

    @media only screen and (min-width: 1440px) {
      width: 212px;
      margin-left: 0px;
    }

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
      color: ${(props) => props.theme.color.primary_green_lite};

    }

    @media only screen and (min-width: 1440px) {
      width: 212px;
    }

  }
`;
