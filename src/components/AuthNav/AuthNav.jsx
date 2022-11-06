import { NavLink } from 'react-router-dom';
import { List } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <List>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </List>
  );
};
