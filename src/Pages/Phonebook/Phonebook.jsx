import AddContactForm from 'components/AddContactForm/AddContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
const Phonebook = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <AddContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
export default Phonebook;
