import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { add, delete1 } from '../redux/contactsSlice';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, Subtitle } from './App.styled';

export default function App() {
  const All = useSelector(state => state.contacts);
  console.log(All);

  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);

  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const pushDataToArr = contact => {
  //   setContacts(prevState => [contact, ...prevState]);
  // };
  const pushDataToArr = contact => {
    dispatch(add(contact));
    console.log(add(contact));
  };

  const formSubmitHandler = data => {
    // console.log(data);
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
    setFilter(e.currentTarget.value);
  };

  const deleteContact = toDeleteId => {
    // setContacts(prevState =>
    //   prevState.filter(contact => contact.id !== toDeleteId)
    // );
    dispatch(delete1(toDeleteId));
    console.log(delete1(toDeleteId));
    console.log(contacts);
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  // console.log(add({ name: 'asdsad', phone: 234234324 }));
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
