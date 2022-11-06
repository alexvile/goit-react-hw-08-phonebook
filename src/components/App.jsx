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
          <Route index element={<Home />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="contacts" element={<Phonebook />}></Route>
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </>
    //
    //   {error !== null && <ErrorMessage>{error}</ErrorMessage>}
  );
}
