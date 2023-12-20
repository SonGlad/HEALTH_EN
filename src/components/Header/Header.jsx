import { Container } from '../Container/Container';
import { HeaderStyled, ContainerForHeader } from './Header.styled';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNav } from './AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';


export const Header = () => {
  const {isLoggedIn} = useAuth();


  return (
    <HeaderStyled>
      <Container>
        <ContainerForHeader>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </ContainerForHeader>
      </Container>
    </HeaderStyled>
  );
};
