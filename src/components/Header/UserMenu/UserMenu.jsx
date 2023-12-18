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
import avatar from '../../../images/images/headreImg/avatar-7236095.png';
import menu from '../../../images/images/headreImg/menu.svg';

export const UserMenu = () => {
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
          {'User'}
          <AvaImg src={avatar} alt="avatar" />
          <ArrowSvg src={arrowDown} alt="arrow down"></ArrowSvg>
        </UserBlock>
      </Info>
    </Container>
  );
};
