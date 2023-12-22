import { Section } from 'components/Section/Section';
import {
  Container,
  Image,
  SingInLink,
  SingUpLink,
  Wrapper,
} from './WelcomePage.styled';

import welcomeImage from '../../../images/images/main-page-img-desc.png';
import { ReactComponent as Icon } from '../../../images/icons-linear/ellipse.svg';

export const WelcomePage = () => {
  return (
    <Section>
      <Container>
        <Image src={welcomeImage} alt="Welcome Page" />
        <Wrapper>
          <h1>Set goals and achieve them</h1>
          <h2>The service will help you set goals and follow them.</h2>
          <nav>
            <SingInLink to={'/signin'}>Sign in</SingInLink>
            <SingUpLink to={'/signup'}>Sign up</SingUpLink>
          </nav>
          <ul>
            <li>
              <Icon alt="icon" />
              <p>Set goals</p>
            </li>

            <li>
              <Icon alt="icon" />
              <p>Watch your calories</p>
            </li>

            <li>
              <Icon alt="icon" />
              <p>Keep track of your water intake</p>
            </li>

            <li>
              <Icon alt="icon" />
              <p>Control your weight</p>
            </li>
          </ul>
        </Wrapper>
      </Container>
    </Section>
  );
};
