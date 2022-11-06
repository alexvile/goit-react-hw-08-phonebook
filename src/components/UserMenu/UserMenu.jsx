import { useSelector, useDispatch } from 'react-redux';
import { getUserName, getUserEmail } from 'redux/authSlice';

import { logout } from 'redux/authSlice';
import defaultAvatar from './default-avatar.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const avatar = defaultAvatar;
  return (
    <div>
      <img src={avatar} width="32" alt="User avatar" />
      <div>
        Welcome, <span>{userName}</span>
      </div>
      <p>{userEmail}</p>
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
