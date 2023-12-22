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
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    padding: 0;
    margin-left: 6px;
    transition: stroke 1000ms cubic-bezier(0.4, 0, 0.2, 1);

    .for-user-avater{
      width: 24px;
      height: 24px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 4px;

      @media screen and (min-width: 834px) {
        width: 28px;
        height: 28px;
      }
    }

    .arrow-svg{
      stroke: ${(props) => props.theme.color.primary_green_lite};
    }

  }
  .user-menu-btn:hover .arrow-svg,
  .user-menu-btn:focus .arrow-svg {
    stroke: ${(props) => props.theme.color.primary_white};
  }
`;

export const AvaImg = styled.img`
 display: block;
 width: 100%;
 height: 100%;
 object-fit: cover;
`;

export const ArrowSvg = styled.img`
  width: 14px;
`;