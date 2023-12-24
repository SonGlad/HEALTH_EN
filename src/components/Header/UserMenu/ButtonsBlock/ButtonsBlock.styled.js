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



  .target-dropdown{
    position: absolute;
    z-index: 2;
    top:80px;
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.20);


    @media screen and (min-width: 320px) and (max-width: 834px) {
      left: 0;
    }
    @media screen and (min-width: 834px) {
      top: 115px;
    }


    .target-close-btn{
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
      background-color: transparent;
    }

    .close-target-icon{
      stroke: ${props => props.theme.color.primary_white};
      transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .close-target-icon:hover,
    .close-target-icon:focus {
      stroke: ${props => props.theme.color.primary_green_lite};
    }
    
  }


  .weight-dropdown{
    position: absolute;
    z-index: 2;
    top: 165px;
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.20);


    @media screen and (min-width: 320px) and (max-width: 834px) {
      left: 0;
    }
    @media screen and (min-width: 834px) {
      top: 115px;
    }
    @media screen and (min-width: 1440px) {
      right: 0;
    }

    .weight-close-btn{
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
      background-color: transparent;
    }

    .close-weight-icon{
      stroke: ${props => props.theme.color.primary_white};
      transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

    }
    
    .close-weight-icon:hover,
    .close-weight-icon:focus {
      stroke: ${props => props.theme.color.primary_green_lite};
    }
    
  }
`;

export const InfoBlockTarget = styled.div`
  position: relative;
  background-color: inherit;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
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




export const InfoBlockWeight = styled.div`
  background-color: inherit;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
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
