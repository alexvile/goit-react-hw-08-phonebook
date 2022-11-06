import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getIsRefreshingUser } from 'redux/authSlice';
import { useSelector } from 'react-redux';

export const Layout = () => {
  const isRefreshingUser = useSelector(getIsRefreshingUser);
  return isRefreshingUser ? (
    <Loader />
  ) : (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
