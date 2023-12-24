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

  .mega-div {
    display: none;

    @media screen and (min-width: 834px) {
      display: block;
      margin-left: auto;
      margin-right: 75px;
    }
    
    @media screen and (min-width: 1440px) {
    margin-right: 125px;
    }
  }
`;

export const MenuBox = styled.div`
  .dropdownList {
    position: absolute;
    width: 300px;
    height: auto;
    background-color: transparent;
    top: 60px;
    left: 0px;

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
  }
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
    top: 16px;
    right: 16px;
  }
  .close-modal-icon {
    stroke: ${props => props.theme.color.primary_grey};
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      stroke: ${props => props.theme.color.primary_green_lite};
    }
  }
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;

  @media screen and (min-width: 834px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 8px;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  .menu-icon {
    stroke: ${props => props.theme.color.primary_green_lite};

    &:hover,
    &:focus {
      stroke: ${props => props.theme.color.primary_white};
    }
  }
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

  .user-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    padding: 0;
    margin-left: 6px;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .for-user-avater {
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

  .arrow-svg {
    stroke: ${props => props.theme.color.primary_green_lite};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  }

  .arrow-svg-close {
    transform: rotate(180deg);
  }

  .user-menu-btn:hover > .arrow-svg,
  .user-menu-btn:focus > .arrow-svg {
    stroke: ${props => props.theme.color.primary_white};
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

export const UserInfoContainer = styled.div`
  position: absolute;
  width: 158px;
  height: auto;
  background-color: red;
  top: 54px;
  right: 0px;

  opacity: 0;
  visibility: hidden;
  height: 0;
  transform: scaleY(0);
  transition: opacity 0.5s ease,
    transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), visibility 0.5s ease;

  border-radius: 12px;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  flex-direction: column;

  @media screen and (min-width: 834px) {
    top: 80px;
  }
  &.show-info-container {
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
  }

  .list-user-menu {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: 24px;
    width: 100%;
    gap: 24px;
    background-color: ${props => props.theme.color.primary_black_2};
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);

    .item-user-menu {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.4;
      transition: color 0.3s ease;
    }

    .setting-icon,
    .logout-icon {
      margin-right: 8px;
      stroke: ${props => props.theme.color.primary_white};
    }

    .link-setting,
    .button-link-logout {
      display: flex;
      align-items: center;
      color: ${props => props.theme.color.primary_white};
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    
    .link-setting:hover,
    .link-setting:focus,
    .button-link-logout:hover,
    .button-link-logout:focus{
      color: ${(props) => props.theme.color.primary_green_lite};
    }
    .link-setting:hover > .setting-icon,
    .link-setting:focus > .setting-icon,
    .button-link-logout:hover > .logout-icon,
    .button-link-logout:focus > .logout-icon{
      stroke: ${(props) => props.theme.color.primary_green_lite};
    }


    .button-link-logout {
      background-color: transparent;
      border-color: transparent;
      cursor: pointer;
      padding: 0;
    }
    
  }
`;
