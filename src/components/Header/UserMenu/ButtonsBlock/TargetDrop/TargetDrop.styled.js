import styled from 'styled-components';


export const ModalWrapper = styled.div`
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  background-color: ${props => props.theme.color.primary_black_2};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

  .modal-title {
    color: ${props => props.theme.color.primary_white};
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 8px;
  }
  .modal-text {
    color: ${props => props.theme.color.primary_grey};
    font-weight: 400;
    font-size: 14px;
    max-width: 284px;
    margin-bottom: 16px;
  }
  .container {
    position: relative;
    padding: 24px 10px 0 10px;
    width: 300px;
    height: auto;
    @media screen and (min-width: 834px) {
      padding: 20px 84px 40px 24px;
      width: 392px;
      height: auto;
    }
    @media screen and (min-width: 1440px) {
      padding: 20px 84px 40px 24px;
      width: 392px;
      height: auto;
    }
  }
  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
  }
  .radio_input {
    position: absolute;
    appearance: none;
  }
  .container li label :hover {
    color: ${props => props.theme.color.primary_violet};
  }
  .container li input [type='radio']:checked + label {
    border: 1px solid ${props => props.theme.primary_violet};
    color: ${props => props.theme.color.primary_violet};
  }
  .img_border {
    width: 40px;
    height: 40px;
    padding: 10px;
    margin-right: 12px;
    border: 1px solid ${props => props.theme.color.primary_white};
    border-radius: 12px;
  }
  .img_border:hover {
    border: 1px solid ${props => props.theme.primary_violet};
  }
  .hover:hover {
    color: ${props => props.theme.color.primary_violet};
  }
  @media screen and (min-width: 834px) {
    top: 80px;
    width: 392px;
    padding-bottom: 0;
  }
  @media screen and (min-width: 1440px) {
  }
`;


export const ModalBtn = styled.button`
cursor: pointer;
  height: 36px;
  width: 166px;
  border: none;
  border-radius: 12px;
  background-color: ${props => props.theme.color.primary_green_lite};
  color: ${props => props.theme.color.primary_black};
  font-size: 14px;
  font-weight: 400;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);


  &:hover,
  &:focus {
    color: ${props => props.theme.color.primary_grey};
  }
`;
