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

  .ListContainer {
    margin-top: 16px;
  }

  .List{
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    grid-gap: 16px;
    align-items: center;
  }

  .Element{
display: flex;
padding: 8px 10px;
flex-direction: column;
align-items: flex-start;
    border: 1px solid ${(props) => props.theme.color.primary_green_lite};
    border-radius: 12px;
font-size: 14px;
font-weight: 400;
line-height: 20px;
color: ${(props) => props.theme.color.primary_grey};
  }

  .ButtonDelete {
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-image: url(${trash});
  }

  .ButtonAdd {
    margin-top: 40px;
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

    /* &:hover {
      background-color: transparent;
      color: ${(props) => props.theme.color.primary_grey};
    }
    &:active {
      background-color: transparent;
      color: ${(props) => props.theme.color.primary_grey};
    }
    &:disabled {
      background-color: transparent;
      color: ${(props) => props.theme.color.primary_green_lite};
      pointer-events: none;
    } */
  }

  .ImgAdd {
    width: 16px;
    height: 16px;
    background-image: url(${add});
  }

  .ButtonContainer{
    margin-top: 64px;
        display: grid;
    justify-content: center;

              @media only screen and (min-width: 834px) {
display: flex;
    justify-content: end;
    align-items: baseline;
    margin-top: 105px;
  }

  }

  .ButtonConfirm{
    width: 276px;
            border-radius: 12px;
    color: ${(props) => props.theme.color.primary_black_2};
    background: ${(props) => props.theme.color.primary_green_lite};
    padding: 8px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;

    &:active,
    &:hover {
      color: ${(props) => props.theme.color.primary_grey};
    }

          @media only screen and (min-width: 834px) {
width: 212px;
order: 2;
  }
  }

  .ButtonCancel{
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
