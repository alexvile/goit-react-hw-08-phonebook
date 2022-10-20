import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import {
  add,
  remove,
  setFilter,
  getContacts,
  getFilter,
} from '../redux/contactsSlice';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, Subtitle } from './App.styled';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const pushDataToArr = contact => {
    dispatch(add(contact));
  };

  const formSubmitHandler = data => {
    //  check the same contact
    const normalizedName = data.name.toLowerCase();

    const isTheSame = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isTheSame) {
      alert(`${isTheSame.name} is already in contacts`);
      return;
    }

    data.id = nanoid();
    pushDataToArr(data);
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const deleteContact = toDeleteId => {
    dispatch(remove(toDeleteId));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form onSubmit={formSubmitHandler} />

      <Subtitle>Contacts</Subtitle>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        filteredContacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}
