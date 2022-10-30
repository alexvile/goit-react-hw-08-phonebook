import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { isLoading } from '../../redux/contactsSlice';

import { Card, CardText, DeleteBtn } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isPending = useSelector(isLoading);

  const removeContact = toDeleteId => {
    dispatch(deleteContact(toDeleteId));
  };

  return (
    <Card>
      <CardText>
        <span>{name}: </span>
        <span>{number}</span>
      </CardText>
      <DeleteBtn
        type="button"
        disabled={isPending}
        onClick={() => removeContact(id)}
      >
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
