import { Container } from '../Container/Container';
import { HeaderStyled, ContainerForHeader } from './Header.styled';
import { Navigation } from './Navigation/Navigation';
// import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <ContainerForHeader>
          <Navigation />

          <UserMenu />
          {/* <AuthNav /> */}
        </ContainerForHeader>
      </Container>
    </HeaderStyled>
  );
};
