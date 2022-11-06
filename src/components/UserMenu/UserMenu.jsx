import { useSelector, useDispatch } from 'react-redux';
import { getUserName, getUserEmail } from 'redux/authSlice';

import { logout } from 'redux/authSlice';
import defaultAvatar from './default-avatar.png';
import {
  UserContainer,
  ImageWrapper,
  WelcomeContainer,
  WelcomeMessage,
  Email,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const avatar = defaultAvatar;
  return (
    <UserContainer>
      <ImageWrapper>
        <img src={avatar} width="32" alt="User avatar" />
      </ImageWrapper>
      <WelcomeContainer>
        <WelcomeMessage>
          Welcome, <span>{userName}</span>
        </WelcomeMessage>
        <Email>{userEmail}</Email>
      </WelcomeContainer>
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </UserContainer>
  );
};
