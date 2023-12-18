import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 834px) {
    width: 100%;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: 8px;

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


export const UserBlock = styled.div`
  color: ${p => p.theme.color.white};
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;

  @media screen and (min-width: 834px) {
    font-size: 14px;
  }

  .user-menu-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    padding: 0;
    margin-left: 6px;
  }

`;

export const ArrowSvg = styled.img`
  width: 14px;
`;

export const AvaImg = styled.img`
  width: 24px;
  border-radius: 50%;

  @media screen and (min-width: 834px) {
    width: 28px;
  }
`;
