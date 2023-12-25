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

  form{
    width: 100%;
    @media screen and (min-width: 834px) {
      width: 166px;
    }
  }

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    max-width: 145px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .radio_input {
    position: absolute;
    appearance: none;
  }

  .img_border {
    width: 40px;
    height: 40px;
    padding: 10px;
    margin-right: 12px;
    border: 1px solid ${props => props.theme.color.secondary_color_grey_1};
    border-radius: 12px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hover:hover .label,
  .hover:focus .label{
    color: ${props => props.theme.color.primary_violet};
  }
  .hover:hover .label > .img_border,
  .hover:focus .label > .img_border {
    border-color: ${props => props.theme.color.primary_violet};
  }
  .label > .radio_input:checked + .img_border {
    border-color: ${props => props.theme.color.primary_violet};
  }
  .label > .radio_input:checked ~ .label-text{
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
  width: 100%;
  height: 36px;
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
