import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 12px 12px 16px 12px;
  background: ${props => props.theme.color.primary_black_2};
  gap: 20px;
  width: 100%;

  .water-cons-cont{
    height: 192px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media screen and (min-width: 834px) {
    padding: 24px 22px;
    gap: 40px;
    flex: 1 0 50%;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px 24px 24px 40px;
  }

  h3 {
    font-size: 15px;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 12px;
    letter-spacing: 1px;

    @media screen and (min-width: 834px) {
      font-size: 18px;
      line-height: 1.3;
    }
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  gap: 6px;
  border-radius: 20px;
  border: 1px solid #292928;
  background: ${props => props.theme.color.primary_black_2};
  min-width: 80px;
  height: 192px;
  padding: 8px;
  

  p {
    color: ${props => props.theme.color.primary_violet};
    height: ${props => props.height}%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    position: absolute;
    top: 520px;

    @media screen and (min-width: 834px) {
      top: 350px;
    }
    @media screen and (min-width: 1440px) {
      top: 340px;
    }
  }
`;

export const ColoredArea = styled.div`
  border-radius: 20px;
  background: ${props => props.theme.color.primary_violet};
  box-shadow: 0px 4px 8px 0px rgba(255, 255, 255, 0.12),
    0px 4px 8px 0px rgba(0, 0, 0, 0.12) inset;
  width: 100%;
  height: ${props => props.height}%;
  transition: height 0.5s ease-in-out;
`;


export const ClearButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  margin-bottom: 6px;
  margin-left: auto;
  padding: 0;

  @media screen and (min-width: 834px) {
    margin-bottom: 13px;
  }


  svg {
    width: 20px;
    stroke: ${props => props.theme.color.primary_green_lite};
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      stroke: ${props => props.theme.color.primary_white};
    }

    &:focus {
      stroke: ${props => props.theme.color.primary_white};
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
    justify-content: left;
  }
`;

export const TotalInfo = styled.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.2;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    margin-bottom: 0;
  }

  span {
    color: ${props => props.theme.color.primary_grey};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    margin-left: 7px;
  }
`;

export const LeftInfo = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  gap: 4px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0;
  }

  p {
    display: flex;
    color: ${props => props.theme.color.primary_grey};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
  }

  span {
    color: ${props => props.theme.color.primary_grey};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }
`;

export const AddButton = styled.button`
  cursor: pointer;
  display: flex;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  border: none;
  background: ${props => props.theme.color.primary_green_lite};
  color: ${props => props.theme.color.primary_black};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  width: 166px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 16px;
    stroke: ${props => props.theme.color.primary_black};
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${props => props.theme.color.primary_grey};
    & svg {
      stroke: ${props => props.theme.color.primary_grey};
    }
  }

  &:focus {
    color: ${props => props.theme.color.primary_grey};
    & svg {
      stroke: ${props => props.theme.color.primary_grey};
    }
  }
`;
