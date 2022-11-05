import { useSelector } from 'react-redux';
import { getUsername } from 'redux/authSlice';

export const UserMenu = () => {
  const userName = useSelector(getUsername);

  return (
    <div>
      <div>Welcome, {userName && <span>{userName}</span>}</div>
      <span>Logout</span>
    </div>
  );
};
