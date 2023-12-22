import styled from 'styled-components';

export const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.theme.color.secondary_color_grey_1};
  width: 48px;
  height: 48px;
  position: relative;
  div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    background-color: ${props => props.theme.color.primary_black_2};
    border-radius: 50%;
    padding: 8px 0;
  }
  p {
    color: ${props => props.theme.color.primary_grey};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  p {
    display: flex;
    gap: 4px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }
  span {
    color: ${props => props.theme.color.primary_grey};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    width: 36px;
  }
`;
