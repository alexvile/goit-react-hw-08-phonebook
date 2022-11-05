import { useSelector } from 'react-redux';
import { errorMessage } from '../redux/contactsSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, Subtitle, ErrorMessage } from './App.styled';
import { SignUpForm } from './SignUpForm/SignUpForm';

export default function App() {
  const error = useSelector(errorMessage);

  return (
    <Container>
      <ToastContainer autoClose={1250} />
      <SignUpForm />
      {error !== null && <ErrorMessage>{error}</ErrorMessage>}
      <Title>Phonebook</Title>
      <Form />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </Container>
  );
}
