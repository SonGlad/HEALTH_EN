import {
  Container,
  Info,
  UserBlock,
  AvaImg,
  MenuBox,
  MenuButton,
} from './UserMenu.styled';
import { ButtonsBlock } from './ButtonsBlock/ButtonsBlock';
import {ReactComponent as ArrowDown} from "../../../images/svgIcon/arrow-down.svg"
import { ReactComponent as MenuIcon} from "../../../images/svgIcon/menu.svg";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import { logOut } from '../../../redux/Auth/auth-operations';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as CloseIcon } from '../../../images/icons-linear/close-circle.svg';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName, userAvatarURL } = useAuth();
  const refBackdrop = useRef(null);

  const [isOptionsListMenu, setIsOptionsListMenu] = useState(false);

  const handleClickByIconMenu = event => {
    event.stopPropagation();
    setIsOptionsListMenu(prevState => !prevState);
  };
  const onButtonClose = () => {
    setIsOptionsListMenu(!isOptionsListMenu);
  };

  const toggleShowOptionsMenu = () =>
    isOptionsListMenu ? 'info-options-active' : '';

  const handleBackdropClick = event => {
    if (refBackdrop.current && !refBackdrop.current.contains(event.target)) {
      setIsOptionsListMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleBackdropClick);

    return () => {
      document.removeEventListener('click', handleBackdropClick);
    };
  }, []);

  return (
    <Container>
      <MenuBox className="menu-box">
        <MenuButton onClick={handleClickByIconMenu}>
          <MenuIcon className='menu-icon' width={16} height={16}/>
        </MenuButton>
        <div ref={refBackdrop} className={`dropdownList ${toggleShowOptionsMenu()}`}>
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
          <p className='user-name'>{userName}</p>
          <button type='button' className='user-menu-btn'>
            <div className='for-user-avater'>
              <AvaImg src={userAvatarURL} alt="avatar" />
            </div>
            <ArrowDown className='arrow-svg' width={14} height={14}/>
          </button>
          <button onClick={() => dispatch(logOut())}>LOGOUT</button>
          <NavLink className="link" to="/settings">
            settings
          </NavLink>
        </UserBlock>
      </Info>
    </Container>
  );
};
