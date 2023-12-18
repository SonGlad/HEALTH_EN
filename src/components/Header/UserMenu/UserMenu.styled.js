import styled from 'styled-components';



export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 8px;
`;

export const Info = styled.div`
  margin-left: 8px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 834px) {
    width: 513px;
  }
  @media screen and (min-width: 1440px) {
    width: 604px;
  }
`;

export const ArrowSvg = styled.img`
  width: 14px;
  margin-left: 12px;
`;
export const UserBlock = styled.div`
  color: ${p => p.theme.color.white};
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;

  @media screen and (min-width: 834px) {
    font-size: 14px;
  }
`;

export const AvaImg = styled.img`
  width: 24px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: -8px;

  @media screen and (min-width: 834px) {
    width: 28px;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;

  @media screen and (min-width: 834px) {
    display: none;
  }
`;


export const MenuImg = styled.img`
  width: 16px;
`;


export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;
