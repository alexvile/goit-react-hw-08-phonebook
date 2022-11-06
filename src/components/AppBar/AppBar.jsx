import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/authSlice';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import Toolbar from '@mui/material/Toolbar';
// import { Header, Navigation } from './AppBar.styled';

import AppBarMiui from '@mui/material/AppBar';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <AppBarMiui position="static">
      <Toolbar>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          )}
        </ul>
        {!isLoggedIn && <AuthNav />}
      </Toolbar>
      {isLoggedIn && <UserMenu />}
    </AppBarMiui>
  );
};
