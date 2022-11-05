import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/phonebook">Phonebook</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
