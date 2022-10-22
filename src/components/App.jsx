// import { useSelector } from 'react-redux';
// import { getContacts, getFilter } from '../redux/contactsSlice';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, Subtitle } from './App.styled';

export default function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </Container>
  );
}
