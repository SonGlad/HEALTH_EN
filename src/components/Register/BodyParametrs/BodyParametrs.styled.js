import styled from "styled-components";
import BodyParametersMobile from "../../../images/images/BodyParametersMobile-min.png";
import BodyParametersTablet from "../../../images/images/BodyParametersTablet-min.png";
import BodyParametersComputert from "../../../images/images/BodyParametersComputert-min.png";

export const DivBodyParametrs = styled.div`
  padding-bottom: 24px;
  padding-top: 24px;

  @media only screen and (min-width: 834px) {
    padding-left: 200px;
    padding-right: 200px;
    padding-top: 40px;
    padding-bottom: 196px;
    justify-content: center;
    display: grid;
  }

  @media only screen and (min-width: 1440px) {
    padding-left: 116px;
    padding-right: 116px;
    padding-bottom: 66px;
    display: flex;
    gap: 104px;
  }

  .ImageContainet {
    justify-content: center;
    display: flex;
  }

  .ImgSingUp {
    background-image: url(${BodyParametersMobile});
    background-repeat: no-repeat;
    width: 300px;
    height: 302px;

    @media only screen and (min-width: 834px) {
      background-image: url(${BodyParametersTablet});
      width: 380px;
      height: 382px;
    }

    @media only screen and (min-width: 1440px) {
      background-image: url(${BodyParametersComputert});
      width: 592px;
      height: 594px;
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
    margin-top: 24px;
    @media only screen and (min-width: 1440px) {
      justify-content: flex-start;
    }
  }

  .DivInputContainet {
    gap: 24px;
    display: grid;
  }

  .LabelInput {
    color: ${(props) => props.theme.color.primary_white};
    font-size: 14px;
    line-height: 20px;

    @media only screen and (min-width: 1440px) {
      display: grid;
    }
  }

  .TextInput {
    width: 100%;
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

    @media only screen and (min-width: 1440px) {
      width: 212px;
    }
  }

  input::placeholder {
    color: ${(props) => props.theme.color.primary_grey};
  }

  .ButtonNext {
    border-radius: 12px;
    background: ${(props) => props.theme.color.primary_green_lite};
    padding: 8px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    width: 100%;
    margin-top: 40px;

    @media only screen and (min-width: 1440px) {
      width: 212px;
    }
  }

  .ButtonBack {
    color: ${(props) => props.theme.color.primary_grey};
    border: none;
    background-color: transparent;
    font-weight: 400;
    font-size: 14px;
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
    margin-top: 20px;

    @media only screen and (min-width: 834px) {
      display: flex;
      align-items: baseline;
      gap: 16px;
    }

    @media only screen and (min-width: 1440px) {
      width: 212px;
    }
  }
`;
