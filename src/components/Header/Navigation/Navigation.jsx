import { NavLink } from 'react-router-dom';
import { NavigationStyles } from './Navigation.styled';
import {ReactComponent as HeaderLogo} from "../../../images/svgIcon/HealthyHub.svg"



export const Navigation = () => {
  return (
    <NavigationStyles>
      <NavLink className="link" to="/home">
        <HeaderLogo className='header-logo' width="102" height="22"/>
      </NavLink>
    </NavigationStyles>
  );
};
