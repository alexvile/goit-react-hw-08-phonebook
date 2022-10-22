import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/contactsSlice';

import { Card, CardText, DeleteBtn } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = toDeleteId => {
    dispatch(remove(toDeleteId));
  };

  return (
    <Card>
      <CardText>
        <span>{name}: </span>
        <span>{number}</span>
      </CardText>
      <DeleteBtn type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteBtn>
    </Card>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
