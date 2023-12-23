import styled from 'styled-components';

export const InfoOptions = styled.div`
  display: flex;

  @media screen and (max-width: 833px) {
    width: 300px;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
    flex-direction: column;
    background-color: ${props => props.theme.color.primary_black_2};
  }


  padding: 24px;
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  background-color: ${props => props.theme.color.primary_black_2};
  border-radius: 12px;
  @media screen and (min-width: 834px) {
    margin-left: auto;
    margin-right: 73px;
    display: flex;
    box-shadow: none;
    border-radius: none;
  }
  
  @media screen and (min-width: 834px) {
    margin-right: 124px;

`;

export const InfoBlock = styled.div`
  .dropdownTarget {
    position: absolute;
    width: 300px;
    height: auto;
    background-color: transparent;
    top: 60px;
    z-index: 2;

    opacity: 0;
    visibility: hidden;
    height: 0;
    transform: scaleY(0);
    transition: opacity 0.5s ease,
      transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), visibility 0.5s ease;
    &.info-options-active {
      opacity: 1;
      visibility: visible;
      transform: scaleY(1);
    }
    @media screen and (min-width: 834px) {
      top: 116px;
    }
  }

  .dropdownWeight {
    position: absolute;
    width: 300px;
    height: auto;
    background-color: transparent;
    top: 0;
    z-index: 2;

    opacity: 0;
    visibility: hidden;
    height: 0;
    transform: scaleY(0);
    transition: opacity 0.5s ease,
      transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), visibility 0.5s ease;
    &.info-options-active-weigth {
      opacity: 1;
      visibility: visible;
      transform: scaleY(1);
    }
    @media screen and (min-width: 834px) {
      /* top: 116px; */
    }
  }
  .close-button-weight {
    display: none;
  }

  @media screen and (min-width: 834px) {
    .close-button-weight {
      display: flex;
      border-radius: 50%;
      border: none;
      background-color: transparent;
      align-items: center;
      outline: none;
      justify-content: center;
      cursor: pointer;
      position: absolute;
      top: 125px;
      right: -9px;
      z-index: 3;
    }
  }
  .close-button {
    display: none;
  }
  @media screen and (min-width: 834px) {
    .close-button {
      display: flex;
      border-radius: 50%;
      border: none;
      background-color: transparent;
      align-items: center;
      outline: none;
      justify-content: center;
      cursor: pointer;
      position: absolute;
      top: 18px;
      right: -74px;
      z-index: 3;
    }
  }
  .close-modal-icon {
    stroke: ${props => props.theme.color.primary_grey};
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      stroke: ${props => props.theme.color.primary_green_lite};
    }
  }
  background-color: inherit;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  position: relative;

  margin-bottom: 12px;

  &:nth-child(1) {
    margin-bottom: 40px;
  }


  @media screen and (min-width: 834px) {
    display: flex;
    &:nth-child(1) {
      margin-right: 40px;
      margin-bottom: 0px;
    }
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    &:nth-child(1) {
      margin-right: 80px;
      margin-bottom: 0px;
    }
  }
`;
export const IconContainer = styled.div`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.01);
  border: 1px solid ${props => props.theme.color.primary_grey};
  border-radius: 12px;
  width: 48px;
  height: 48px;
  margin-right: 12px;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3px 0 3px 0;
`;

export const InfoBlockName = styled.p`
  color: ${p => p.theme.color.primary_white};
  font-size: 14px;
  font-weight: 600;
`;
export const InfoBlockText = styled.p`
  color: ${p => p.theme.color.primary_white};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const ArrowSvg = styled.img`
  width: 14px;
  margin-left: 12px;
`;

export const WeightKg = styled.span`
  color: ${p => p.theme.color.gray};
  font-size: 14px;
  font-weight: regular;
  margin-left: 4px;
  margin-right: 6px;
`;
export const EditSvg = styled.img`
  width: 16px;
`;
export const CloseBtn = styled.button`
  border: none;
  background-color: inherit;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
`;
