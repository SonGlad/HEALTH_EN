// import { Link, useLocation } from 'react-router-dom';
// import {
//   ActiveLink,
//   Container,
//   Content,
//   DefaultLink,
//   LogoBox,
//   Unauthorized,
//   AvatarImg,
// } from './AuthNav.styled';
// import { useEffect, useState } from 'react';
// import avatar from '../../../images/images/profile-circle.png';

// export const AuthNav = () => {
//   const location = useLocation();
//   const [currentURL, setCurrentURL] = useState(location.pathname);

//   useEffect(() => {
//     setCurrentURL(location.pathname);
//   }, [location]);
//   return (
//     <Container>
//       <Content>
//         <LogoBox>
//           <Link to={'/home'}>HealthyHub</Link>
//         </LogoBox>

//         {currentURL.endsWith('/singin') ? (
//           <Unauthorized>
//             <ActiveLink to={'/singin'}>Sing In</ActiveLink>
//             <p>/</p>
//             <DefaultLink to={'/singup'}>Sing Up</DefaultLink>
//             <AvatarImg src={avatar} alt="Your avatar" width={28} />
//           </Unauthorized>
//         ) : currentURL.endsWith('/singup') ? (
//           <Unauthorized>
//             <DefaultLink to={'/singin'}>Sing In</DefaultLink>
//             <p>/</p>
//             <ActiveLink to={'singup'}>Sing up</ActiveLink>
//             <AvatarImg src={avatar} alt="Your avatar" width={28} />
//           </Unauthorized>
//         ) : (
//           <Unauthorized>
//             <DefaultLink to={'singin'}>Sing In</DefaultLink>
//             <p>/</p>
//             <ActiveLink to={'singup'}>Sing Up</ActiveLink>
//             <AvatarImg src={avatar} alt="Your avatar" width={28} />
//           </Unauthorized>
//         )}
//       </Content>
//     </Container>
//   );
// };
import { NavLink } from 'react-router-dom';
import { AuthNavStyles, AvatarImg } from './AuthNav.styled';
import avatar from '../../../images/images/headreImg/profile-circle.png';

export const AuthNav = () => {
  return (
    <AuthNavStyles>
      <NavLink className="link" to="/signin">
        Sing In
      </NavLink>
      <p>/</p>
      <NavLink className="link" to="/singup">
        Sing Up
      </NavLink>
      <AvatarImg src={avatar} alt="Your avatar" width={28} />
    </AuthNavStyles>
  );
};
