import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    justify-content: start;
    align-items: baseline;
    gap: 40px;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;

    @media screen and (min-width: 834px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }
  span {
    color: ${props => props.theme.color.primary_grey};
    font-weight: 500;
    margin-left: 8px;
  }
`;

export const GraphWrapper = styled.div`
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    width: 94px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: ${props => props.theme.color.primary_black_2};
  }

  div {
    width: 676px;
    height: 382px;
    padding: 24px 14px;
    border-radius: 12px;
    background: ${props => props.theme.color.primary_black_2};
    margin-bottom: 8px;

    @media screen and (min-width: 834px) {
      width: 780px;
      height: 430px;
    }

    @media screen and (min-width: 1440px) {
      width: 676px;
      height: 382px;
    }
  }
`;

export const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  opacity: 0;
  position: absolute;
  background: ${props => props.theme.color.primary_black_2};
  padding: 8px 6px;
  border-radius: 8px;
  width: 86px;
  height: 76px;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);

  p {
    font-size: 28px;
    font-weight: 500;
    line-height: 1.2;
  }
  span {
    color: ${props => props.theme.color.primary_grey};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }
`;
