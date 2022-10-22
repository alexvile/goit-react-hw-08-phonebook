import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/contactsSlice';

import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const reduxFilter = useSelector(getFilter);

  const normalizedFilter = reduxFilter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
};
export default ContactList;
