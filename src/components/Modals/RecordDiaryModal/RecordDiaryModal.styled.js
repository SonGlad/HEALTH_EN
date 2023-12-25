import styled from "styled-components";
import breakfast from "../../../images/svgIcon/breakfast-icon.svg";
import trash from "../../../images/svgIcon/trash-modal.svg";
import add from "../../../images/svgIcon/add-modal.svg";

export const ModalContainer = styled.div`
  width: 300px;
  height: 546px;
  padding-top: 16px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 40px;
  border-radius: 12px;
  background: ${(props) => props.theme.color.primary_black_2};

  @media only screen and (min-width: 834px) {
    width: 708px;
    height: 408px;
    padding: 24px;
  }

  .H2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;

    @media only screen and (min-width: 834px) {
      font-size: 30px;
      line-height: 36px;
    }
  }

  .DinerContainer {
    margin-top: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .Img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-image: url(${breakfast});
  }

  .Title {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;

    @media only screen and (min-width: 834px) {
      font-size: 22px;
      line-height: 32px;
    }
  }

  .FormContainer {
    height: 252px;
    overflow-y: scroll;
    row-gap: 16px;
    display: grid;
    margin-top: 16px;
    @media only screen and (min-width: 834px) {
      height: 150px;
    }
  }

  .FormAddFood {
    /* margin-top: 16px; */
    grid-gap: 8px;
    row-gap: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media only screen and (min-width: 834px) {
      grid-gap: 12px;
    }
  }

  input {
    height: 36px;
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

    &::placeholder {
      color: ${(props) => props.theme.color.primary_grey};
    }
  }

  input[id="nameproduct"] {
    width: 276px;
    @media only screen and (min-width: 834px) {
      width: 255px;
    }
  }

  input[id="carbonoh"] {
    width: 276px;
    @media only screen and (min-width: 834px) {
      width: 100px;
    }
  }

  input[id="protein"] {
    width: 276px;
    @media only screen and (min-width: 834px) {
      width: 86px;
    }
  }

  input[id="fat"] {
    width: 120px;
    @media only screen and (min-width: 834px) {
      width: 61px;
    }
  }

  input[id="calories"] {
    width: 120px;
    @media only screen and (min-width: 834px) {
      width: 78px;
    }
  }

  .ButtonDelete {
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-image: url(${trash});

    &:hover {
      filter: invert(50%);
    }
    &:active {
      filter: invert(50%);
    }
  }

  .ButtonAdd {
    width: 144px;
    margin-top: 24px;
    display: flex;
    gap: 6px;

    color: ${(props) => props.theme.color.primary_green_lite};
    border: none;
    background-color: transparent;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    cursor: pointer;
    align-items: center;

    &:hover {
      filter: invert(50%);
    }
    &:active {
      filter: invert(50%);
    }
  }

  .ImgAdd {
    width: 16px;
    height: 16px;
    background-image: url(${add});
  }

  .ButtonContainer {
    margin-top: 60px;
    display: grid;
    justify-content: center;

    @media only screen and (min-width: 834px) {
      display: flex;
      justify-content: end;
      align-items: baseline;
      margin-bottom: 0px;
    }
  }

  .ButtonConfirm {
    width: 276px;
    border-radius: 12px;
    color: ${(props) => props.theme.color.primary_black_2};
    background: ${(props) => props.theme.color.primary_green_lite};
    padding: 8px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    border: none;

    &:active,
    &:hover {
      color: ${(props) => props.theme.color.primary_grey};
    }

    @media only screen and (min-width: 834px) {
      width: 212px;
      order: 2;
    }
  }

  .ButtonCancel {
    margin-top: 16px;

    color: ${(props) => props.theme.color.primary_grey};
    border: none;
    background-color: transparent;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
    text-align: center;
    display: inline;

    &:hover {
      background-color: transparent;
      color: ${(props) => props.theme.color.primary_green_lite};
    }
    &:active {
      background-color: transparent;
      color: ${(props) => props.theme.color.primary_green_lite};
    }
    &:disabled {
      background-color: transparent;
      color: ${(props) => props.theme.color.primary_grey};
      pointer-events: none;
    }

    @media only screen and (min-width: 834px) {
      width: 212px;
      order: 1;
    }
  }
`;
