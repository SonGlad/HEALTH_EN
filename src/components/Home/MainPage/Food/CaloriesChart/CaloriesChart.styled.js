import styled from 'styled-components';

export const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.theme.color.secondary_color_grey_1};
  width: 168px;
  height: 168px;
  position: relative;
  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    background-color: ${props => props.theme.color.primary_black_2};
    border-radius: 50%;
  }
  p {
    font-size: 32px;
    font-weight: 500;
    line-height: 1.2;
  }
  span {
    color: ${props => props.theme.color.primary_grey};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    width: 56px;
  }
`;

// export const Span = styled.span`
//   display: flex;
//   color: ${props => props.theme.color.primary_grey};
//   font-size: 14px;
//   font-weight: 400;
//   line-height: 1.4;
//   width: 56px;
// `;
