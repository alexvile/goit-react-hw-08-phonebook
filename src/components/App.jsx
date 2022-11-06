// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { fetchCurrentUser } from 'redux/authSlice';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { errorMessage } from '../redux/contactsSlice';
// import { Container, Title, Subtitle, ErrorMessage } from './App.styled';
import { Layout } from './Layout/Layout';
// import Home from '../Pages/Home/Home';
// import Register from '../Pages/Register/Register';
// import Login from '../Pages/Login/Login';
// import Phonebook from 'Pages/Phonebook/Phonebook';

import { lazy } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const Home = lazy(() => import('../Pages/Home/Home'));
const Register = lazy(() => import('../Pages/Register/Register'));
const Login = lazy(() => import('../Pages/Login/Login'));
const Phonebook = lazy(() => import('../Pages/Phonebook/Phonebook'));

export default function App() {
  const dispatch = useDispatch();
  // const error = useSelector(errorMessage);
  useEffect(() => {
    console.log('fethcing current user');
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {/* <ToastContainer autoClose={1250} /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </>
    //
    //   {error !== null && <ErrorMessage>{error}</ErrorMessage>}
  );
}
