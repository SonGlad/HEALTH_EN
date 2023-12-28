import styled from "styled-components";
import trash from "../../../images/svgIcon/trash-modal.svg";
import add from "../../../images/svgIcon/add-modal.svg";


export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    height: 270px;
    overflow-y: scroll;
    row-gap: 40px;
    display: grid;
    margin-top: 16px;

    @media only screen and (min-width: 834px) {
      height: 190px;
      display: flex;
      flex-direction: column;
    }
  }

  .FormAddFood {
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

  .rec-diar-mod-inp[type="number"]::-webkit-inner-spin-button,
  .rec-diar-mod-inp[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .ButtonDelete {
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-image: url(${trash});  
    transition: filter 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      filter: invert(50%);
    }
    &:active {
      filter: invert(50%);
    }
  }

  .ButtonAdd {
    width: 144px;
    margin-bottom: 15px;
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
    transition: filter 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media only screen and (min-width: 834px) {
      height: 20px;
      margin-bottom: 18px;
    }

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
    margin-top: auto;
    display: grid;
    justify-content: center;

    @media only screen and (min-width: 834px) {
      display: flex;
      justify-content: end;
      align-items: center;
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
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media only screen and (min-width: 834px) {
      margin-top: 0px;
    }

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

  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #fff;
  }
`;
