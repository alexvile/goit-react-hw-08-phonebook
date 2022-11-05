import { useSelector, useDispatch } from 'react-redux';
import { getUsername } from 'redux/authSlice';

import { logout } from 'redux/authSlice';
import defaultAvatar from './default-avatar.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUsername);
  const avatar = defaultAvatar;
  return (
    <div>
      <img src={avatar} width="32" alt="User avatar" />
      <div>
        Welcome, <span>{userName}</span>
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};
