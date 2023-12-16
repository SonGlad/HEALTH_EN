import styled from 'styled-components';

import { ErrorMessage, Field, Form } from 'formik';

export const TitlePage = styled.h1`
  color: ${props => props.theme.color.primary_white};
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
export const BannerThumb = styled.div`
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
`;
export const FormFormik = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 60px;
    width: 491px;

    // & > :not(div[aria-labelledby='activity-head']) {
    //   width: calc((100% - 60px) / 2);
    // }
  }
`;
export const Label = styled.label`
  color: ${props => props.theme.color.primary_white};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  &[for='photo'] {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }
`;
export const Input = styled(Field)`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  background-color: ${props => props.theme.color.primary_black};
  color: ${props => props.theme.color.primary_white};

  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.color.primary_grey};

  &:hover {
    border-color: ${props => props.theme.color.primary_green_lite};
  }

  &[type='file'] {
    visibility: hidden;
    pointer-events: none;
    display: none;
  }
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${p => p.theme.color.primary_grey};
  }
`;
export const FileContainer = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;
export const Thumb = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-right: 12px;
  overflow: hidden;
`;

export const AvaImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const DownloadPhoto = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  & > img {
    width: 16px;
    height: 16px;
  }
`;
export const ErrorMsg = styled(ErrorMessage)`
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  color: #e74a3b;
`;
export const CancelButton = styled.button`
  background-color: ${props => props.theme.color.primary_black};
  color: ${props => props.theme.color.primary_white};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid transparent;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${p => p.theme.color.primary_green_lite};
  }

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`;

export const SaveButton = styled.button`
  background-color: ${p => p.theme.color.primary_green_lite};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  width: 212px;
  border: 1px solid ${p => p.theme.color.primary_green_lite};
  border-radius: 12px;
  padding: 8px;
  cursor: pointer;

  @media screen and (max-width: 834px) {
    width: 100%;
  }
`;
export const ButtonContainer = styled.div`
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
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const FormGroupLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
`;

export const WrapperRadioButton = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;
`;
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
    margin-top: 16px;
  }
`;
