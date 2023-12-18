import { NavLink } from 'react-router-dom';
import { NavigationStyles } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationStyles>
      <NavLink className="link link-styled" to="/home">
        HealthyHub
      </NavLink>
    </NavigationStyles>
  );
};
