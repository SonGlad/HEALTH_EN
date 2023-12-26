import {
  Container,
  Info,
  UserBlock,
  AvaImg,
  MenuBox,
  MenuButton,
  UserInfoContainer,
} from './UserMenu.styled';
import { ButtonsBlock } from './ButtonsBlock/ButtonsBlock';
import { ReactComponent as ArrowDown } from '../../../images/svgIcon/arrow-down.svg';
import { ReactComponent as MenuIcon } from '../../../images/svgIcon/menu.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import { logOut } from '../../../redux/Auth/auth-operations';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ReactComponent as CloseIcon } from '../../../images/icons-linear/close-circle.svg';
import { ReactComponent as SettingIcon2 } from '../../../images/icons-linear/setting-2.svg';
import { ReactComponent as LogoutIcon } from '../../../images/icons-linear/logout.svg';
import { closeModalGoal, closeModalUserMenu, closeModalWeight} from '../../../redux/Modal/modal-slice';
import { openModalUserMenu } from '../../../redux/Modal/modal-slice';



export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName, userAvatarURL } = useAuth();
  const refBackdrop = useRef(null);
  const refButtonArrowDown = useRef(null);
  const userInfoContainer = useRef(null);
  const [isOptionsListMenu, setIsOptionsListMenu] = useState(false);
  const [isOpenUserInfoContainer, setIsOpenUserInfoContainer] = useState(false);


  const handleClickArrowMenu = () => {
    if (isOpenUserInfoContainer) {
      dispatch(closeModalUserMenu());
    } else {
      dispatch(openModalUserMenu());
    }
  };


  const handleClickByIconMenu = event => {
    event.stopPropagation();
    setIsOptionsListMenu(prevState => !prevState);
    setIsOpenUserInfoContainer(false);
  };


  const onButtonClose = () => {
    setIsOptionsListMenu(!isOptionsListMenu);
  };


  const toggleShowOptionsMenu = () =>
    isOptionsListMenu ? 'info-options-active' : '';
  const toggleShowUserInfoContainer = () =>
    isOpenUserInfoContainer ? 'show-info-container' : '';
  const toggleRotateArrowButton = () =>
    isOpenUserInfoContainer ? 'arrow-svg-close' : '';


  const handleBackdropClick = useCallback(event => {
    if (refBackdrop.current && !refBackdrop.current.contains(event.target)) {
      setIsOptionsListMenu(false);
    }
    if (
      userInfoContainer.current &&
      !userInfoContainer.current.contains(event.target)
    ) {
      setIsOpenUserInfoContainer(false);
    }
  }, []);


  const handleClickButtonArrow = useCallback(
    event => {
      if (
        refButtonArrowDown.current &&
        refButtonArrowDown.current.contains(event.target)
      ) {
        event.stopPropagation();
        dispatch(closeModalGoal());
        dispatch(closeModalWeight());
        setIsOpenUserInfoContainer(prevState => !prevState);
        setIsOptionsListMenu(false);
      }
    },
    [dispatch]
  );


  const handleEscapeKey = useCallback(event => {
    if (event.key === 'Escape') {
      setIsOpenUserInfoContainer(false);
    }
  }, []);


  useEffect(() => {
    document.addEventListener('click', handleBackdropClick);
    document.addEventListener('click', handleClickButtonArrow);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('click', handleBackdropClick);
      document.removeEventListener('click', handleClickButtonArrow);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleClickButtonArrow, handleBackdropClick, handleEscapeKey]);


  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        dispatch(closeModalUserMenu());
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);


  return (
    <Container>
      <MenuBox className="menu-box">
        <MenuButton onClick={handleClickByIconMenu}>
          <MenuIcon className="menu-icon" width={16} height={16} />
        </MenuButton>
        <div
          ref={refBackdrop}
          className={`dropdownList ${toggleShowOptionsMenu()}`}
        >
          <ButtonsBlock />
          <button
            type="button"
            className="close-button"
            onClick={onButtonClose}
          >
            <CloseIcon className="close-modal-icon" width={'16px'} />
          </button>
        </div>
      </MenuBox>

      <Info>
        <div className="mega-div">
          <ButtonsBlock />
        </div>
        <UserBlock>
          <p className="user-name">{userName}</p>
          <button
            type="button"
            ref={refButtonArrowDown}
            onClick={handleClickButtonArrow}
            className="user-menu-btn"
          >
            <div className="for-user-avater">
              <AvaImg src={userAvatarURL} alt="avatar" />
            </div>
            <ArrowDown
              onClick={handleClickArrowMenu}
              className={`arrow-svg ${toggleRotateArrowButton()}`}
              width={14}
              height={14}
            />
          </button>
          <UserInfoContainer
            ref={userInfoContainer}
            className={`wrapper-user-menu ${toggleShowUserInfoContainer()}`}
          >
            <ul className="list-user-menu">
              <li className="item-user-menu">
                <NavLink
                  className="link-setting"
                  to="/settings"
                  onClick={() => setIsOpenUserInfoContainer(false)}
                >
                  <SettingIcon2 className="setting-icon" />
                  Setting
                </NavLink>
              </li>
              <li className="item-user-menu">
                <button
                  className="button-link-logout"
                  onClick={() => dispatch(logOut())}
                >
                  <LogoutIcon className="logout-icon" />
                  Log out
                </button>
              </li>
            </ul>
          </UserInfoContainer>
        </UserBlock>
      </Info>
    </Container>
  );
};

