import styled from 'styled-components';
import error from "../../../../../images/svgIcon/error.svg";
import correct from "../../../../../images/svgIcon/correct.svg";


export const ModalWrapper = styled.div`
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  background-color: ${props => props.theme.color.primary_black_2};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  z-index: 2;
  @media screen and (min-width: 834px) {
    width: 392px;
    padding-bottom: 0;
  }
`;

export const Modal = styled.div`
  padding: 24px 10px 0 10px;
  width: 300px;
  height: auto;
  @media screen and (min-width: 835px) {
    padding: 20px 24px 40px 24px;
    width: 392px;
    height: auto;
  }
  @media screen and (min-width: 1440px) {
    padding: 20px 24px 40px 24px;
    width: 392px;
    height: auto;
  }


  .ErrorInput {
    border: 1px solid #e74a3b;
  }

  .SuccessInput {
    border: 1px solid #3cbc81;
  }

  .ImgError {
    position: absolute;
    right: 20px;
    top: 142px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${error});

    @media only screen and (min-width: 834px) {
      right: 54%;
      top: 139px;
    }
  }

  .ImgCorrect {
    position: absolute;
    right: 20px;
    top: 142px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${correct});

    @media only screen and (min-width: 834px) {
      right: 54%;
      top: 139px;
    }
  }

  .ErrorText {
    margin-top: -14px;
    margin-bottom: 0px;
    margin-left: 10px;
    color: #e74a3b;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;

    @media only screen and (min-width: 834px) {
      max-width: 200px;
      margin-top: 4px;
      margin-bottom: -18px;
    }
  }

  .SuccessText {
    margin-top: -14px;
    margin-bottom: 0px;
    margin-left: 10px;
    color: #3cbc81;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;

    @media only screen and (min-width: 834px) {
      max-width: 200px;
      margin-top: 4px;
      margin-bottom: -18px;
    }
  }
`;

export const ModalTitle = styled.h3`
  color: ${props => props.theme.color.primary_white};
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const ModalText = styled.p`
  color: ${props => props.theme.color.primary_grey};
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 14px;
  }  
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
`;

export const DateText = styled.p`
  color: ${props => props.theme.color.primary_white};
  font-size: 14px;
  font-weight: 400;
`;

export const DateDay = styled.p`
  color: ${props => props.theme.color.primary_grey};
  font-size: 14px;
  font-weight: 500;
`;

export const WeightForm = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 835px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const WeightFormInput = styled.input`
  outline: none;
  height: 36px;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.color.primary_green_lite};
  background-color: ${props => props.theme.color.primary_black_2};
  padding: 8px 10px;
  color: ${props => props.theme.color.primary_grey};
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  margin-bottom: 14px;

  @media screen and (min-width: 835px) {
    width: 166px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 166px;
    margin-bottom: 0;
  }

`;

export const WeightFormBtn = styled.button`
  cursor: pointer;
  height: 36px;
  border-radius: 12px;
  border: none;
  background-color: ${props => props.theme.color.primary_green_lite};
  color: ${props => props.theme.color.primary_black_2};
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover, &:focus{
  color: ${props => props.theme.color.primary_grey};
  }
  &:disabled {
    color: ${(props) => props.theme.color.primary_grey};
    pointer-events: none;
  }

  @media screen and (min-width: 835px) {
    width: 166px;
  }
`;