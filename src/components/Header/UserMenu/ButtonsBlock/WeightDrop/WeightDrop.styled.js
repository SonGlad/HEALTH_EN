import styled from 'styled-components';


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
`;

export const ModalTitle = styled.h3`
  color: ${props => props.theme.color.primary_white};
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
`;
export const ModalText = styled.p`
  color: ${props => props.theme.color.primary_grey};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
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
  margin-bottom: 12px;

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

  @media screen and (min-width: 835px) {
    width: 166px;
  }
`;