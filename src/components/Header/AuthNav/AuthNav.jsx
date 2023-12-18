import { NavLink } from 'react-router-dom';
import { AuthNavStyles, AvatarImg } from './AuthNav.styled';
import avatar from '../../../images/images/headreImg/profile-circle.png';



export const AuthNav = () => {
  return (
    <AuthNavStyles>
      <NavLink className="link" to="/signin">
        Sing In
      </NavLink>
      <span className='header-span'>/</span>
      <NavLink className="link" to="/singup">
        Sing Up
      </NavLink>
      <AvatarImg src={avatar} alt="Your avatar" width={28} />
    </AuthNavStyles>
  );
};
