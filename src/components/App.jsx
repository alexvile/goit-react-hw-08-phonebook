import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { errorMessage } from '../redux/contactsSlice';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, Subtitle, ErrorMessage } from './App.styled';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { Layout } from './Layout/Layout';

import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Phonebook from 'Pages/Phonebook/Phonebook';

export default function App() {
  const error = useSelector(errorMessage);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="phonebook" element={<Phonebook />}></Route>
        </Route>
      </Routes>
    </>
    // <Container>
    //   <ToastContainer autoClose={1250} />
    //   <SignUpForm />
    //   {error !== null && <ErrorMessage>{error}</ErrorMessage>}
    //   <Title>Phonebook</Title>
    //   <Form />
    //   <Subtitle>Contacts</Subtitle>
    //   <Filter />
    //   <ContactList />
    // </Container>
  );
}
