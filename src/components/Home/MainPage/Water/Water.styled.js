import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border-radius: 12px;
  padding: 16px 22px 16px 12px;
  background: ${props => props.theme.color.primary_black_2};
  gap: 20px;
  position: relative;

  @media screen and (min-width: 834px) {
    padding: 24px 22px;
    gap: 40px;
    flex: 1 0 50%;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px 68px 24px 40px;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 12px;
    letter-spacing: 0em;

    @media screen and (min-width: 834px) {
      font-size: 18px;
      line-height: 1.3;
    }
  }
`;

export const Graph = styled.div`
  border-radius: 20px;
  border: 1px solid #292928;
  background-color: ${props => props.theme.color.primary_black};
  width: 80px;
  height: 192px;
  padding: 8px;
  padding-top: 24px;
`;

export const Percentage = styled.div`
  position: absolute;
  color: ${props => props.theme.color.primary_violet};
  height: 100%;
  margin-top: -22px;
  padding-left: 14px;
`;
export const Statistics = styled.div`
  color: ${props => props.theme.color.primary_violet};
  height: ${props => `calc(100% - ${props.percentage}%)`};
  text-align: center;
`;

export const StatisticsVisually = styled.div`
  border-radius: 20px;
  background-color: ${props => props.theme.color.primary_violet};
  width: 100%;
  height: ${props => `${props.percentage}%`};
`;

export const ClearButton = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  right: 12px;
  top: 12px;

  @media screen and (min-width: 834px) {
    right: 24px;
    top: 24px;
  }

  svg {
    width: 20px;
    stroke: ${props => props.theme.color.primary_green_lite};
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      stroke: ${props => props.theme.color.primary_lite_green};
    }

    &:focus {
      stroke: ${props => props.theme.color.primary_lite_green};
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-bottom: 16px;
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

export const LeftInfo = styled.p`
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
    transition: stroke color 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
