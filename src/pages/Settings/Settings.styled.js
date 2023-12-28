import styled from "styled-components";
import eye from "../../images/svgIcon/eye.svg";
import eye_off from "../../images/svgIcon/eye-off.svg";
import error from "../../images/svgIcon/error.svg";
import correct from "../../images/svgIcon/correct.svg";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;

  @media screen and (min-width: 834px) {
    margin-top: 20px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: start;
    justify-content: center;
    gap: 160px;
    margin-top: 24px;
  }

  .BannerThumb {
    width: 300px;
    margin-bottom: 24px;

    @media screen and (min-width: 834px) {
      width: 380px;
      margin: auto;
      margin-bottom: 24px;
    }

    @media screen and (min-width: 1440px) {
      width: 536px;
      margin: 0;
    }
  }

  .FormFormik {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    width: 100%;

    @media screen and (min-width: 834px) {
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: 60px;
      width: 491px;

      -webkit-box-pack: justify;
      -webkit-box-align: start;
      -ms-flex-pack: justify;
      -ms-flex-align: start;
    }
  }

  .Label {
    position: relative;
    color: ${(props) => props.theme.color.primary_white};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    &[for="photo"] {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    }
  }

  input {
    position: relative;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    background-color: ${(props) => props.theme.color.primary_black};
    color: ${(props) => props.theme.color.primary_white};

    padding: 8px 10px;
    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.color.primary_grey};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus,
    &:active {
      border-color: ${(props) => props.theme.color.primary_green_lite};
      border: 1px solid ${(props) => props.theme.color.primary_green_lite};
      outline: none;
      box-shadow: none;
    }

    &[type="file"] {
      visibility: hidden;
      pointer-events: none;
      display: none;
    }
    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::placeholder {
      color: ${(p) => p.theme.color.primary_grey};
    }

    @media screen and (min-width: 834px) {
      width: 212px;
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
    right: 14px;
    top: 50px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${error});
  }

  .ImgCorrect {
    position: absolute;
    right: 14px;
    top: 50px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${correct});
  }

  .ErrorText {
    margin-top: -10px;
    margin-bottom: -16px;
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
    margin-top: -10px;
    margin-bottom: -16px;
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
    top: 50px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${eye_off});
  }

  .HidePassword {
    display: none;
    position: absolute;
    right: 10px;
    top: 50px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${eye});
  }

  .Label:hover .ShowPassword,
  .Label:hover .HidePassword {
    display: block;
  }

  .Label:hover input[name="confirmPassword"],
  .Label:hover input[name="newPassword"] {
    border: 1px solid ${(props) => props.theme.color.primary_green_lite};
  }

  .Label[id="password"]:hover .ImgError,
  .Label[id="password"]:hover .ImgCorrect,
  .Label[id="password"]:hover .ErrorText,
  .Label[id="password"]:hover .SuccessText {
    display: none;
  }

  .FileContainer {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;

    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }

  .Thumb {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    margin-right: 12px;
    overflow: hidden;
  }

  .AvaImg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .DownloadPhoto {
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    display: flex;
    align-items: center;
    gap: 6px;

    & > .download-svg {
      width: 16px;
      height: 16px;
      stroke:  ${(props) => props.theme.color.primary_green_lite};
    }
  }

  .label-for-avatar{
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .label-for-avatar:hover .DownloadPhoto,
  .label-for-avatar:focus .DownloadPhoto{
    color: ${(props) => props.theme.color.primary_green_lite};
  }

  .label-for-avatar:hover .DownloadPhoto > .download-svg,
  .label-for-avatar:focus .DownloadPhoto > .download-svg {
    stroke: ${(props) => props.theme.color.primary_white};
  }
  

  .FormGroup {
    display: flex;
    flex-direction: column;

    & > label {
      font-size: 13px;
      font-weight: 400;
      line-height: 20px;

      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }
  }

  .FormGroupLabel {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 12px;
  }

  .WrapperRadioButton {
    display: flex;
    gap: 16px;
    height: 100%;
  }

  .ButtonContainer {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 40px;

    @media screen and (min-width: 834px) {
      flex-direction: row;
      margin-bottom: 174px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 72px;
    }
  }

  .SaveButton {
    background-color: ${(p) => p.theme.color.primary_green_lite};
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    width: 212px;
    border: 1px solid ${(p) => p.theme.color.primary_green_lite};
    border-radius: 12px;
    padding: 8px;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: ${(props) => props.theme.color.primary_grey};
    }

    @media screen and (max-width: 834px) {
      width: 100%;
    }
  }

  .CancelButton {
    background-color: ${(props) => props.theme.color.primary_black};
    color: ${(props) => props.theme.color.primary_grey};
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    width: 100%;
    padding: 8px 12px;
    border: 1px solid transparent;
    border-radius: 12px;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: ${(props) => props.theme.color.primary_green_lite};
    }

    @media screen and (min-width: 834px) {
      width: 212px;
    }
  }
`;

export const TitlePage = styled.h1`
  color: ${(props) => props.theme.color.primary_white};
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  padding-top: 16px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
  }
`;
