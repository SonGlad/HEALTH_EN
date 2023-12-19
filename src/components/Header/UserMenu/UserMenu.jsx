import {
  ArrowSvg,
  Container,
  Info,
  UserBlock,
  AvaImg,
  MenuBox,
  MenuImg,
  MenuButton,
} from './UserMenu.styled';
import { ButtonsBlock } from './ButtonsBlock/ButtonsBlock';
import arrowDown from '../../../images/images/headreImg/arrow-down.svg';
import menu from '../../../images/images/headreImg/menu.svg';
import { NavLink } from 'react-router-dom';



import { useDispatch } from 'react-redux';
import { useAuth } from "../../../hooks/useAuth";
import { logOut } from "../../../redux/Auth/auth-operations";



export const UserMenu = () => {
  const dispatch = useDispatch();
  const {userName, userAvatarURL} = useAuth();
  

  return (
    <Container>
      <MenuBox>
        <MenuButton>
          <MenuImg src={menu} alt="menu"></MenuImg>
        </MenuButton>
        <div classlist="dropdownList">
          <ButtonsBlock />
        </div>
      </MenuBox>

      <Info>
        <ButtonsBlock />
        <UserBlock>
          <p className='user-name'>{userName}</p>
          <button type='button' className='user-menu-btn'>
            <AvaImg src={userAvatarURL} alt="avatar" />
            <ArrowSvg src={arrowDown} alt="arrow down"></ArrowSvg>
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
