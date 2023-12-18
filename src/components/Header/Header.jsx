import { Container } from '../Container/Container';
import { HeaderStyled } from './Header.styled';
import { Navigation } from './Navigation/Navigation';
// import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';

export const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <Navigation />

        <UserMenu />
        {/* <AuthNav /> */}
      </HeaderStyled>
    </Container>
  );
};
