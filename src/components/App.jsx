import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, Subtitle, ErrorMessage } from './App.styled';

import { useSelector } from 'react-redux';
import { errorMessage } from '../redux/contactsSlice';

export default function App() {
  const error = useSelector(errorMessage);

  return (
    <Container>
      {error !== null && <ErrorMessage>{error}</ErrorMessage>}
      <Title>Phonebook</Title>
      <Form />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </Container>
  );
}
