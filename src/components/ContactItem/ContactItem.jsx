import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { deleteContact } from '../../redux/contactsSlice';
import { isLoading } from '../../redux/contactsSlice';
import { Card, CardText, DeleteBtn } from './ContactItem.styled';
import Modal from 'components/Modal/Modal';
import { EditContactForm } from 'components/EditContactForm/EditContactForm';

const ContactItem = ({ id, name, number }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const isPending = useSelector(isLoading);

  const removeContact = (toDeleteId, name) => {
    dispatch(deleteContact(toDeleteId));
    toast.success(`Contact "${name}" has been succesfully deleted`);
  };

  return (
    <Card>
      <CardText>
        <span>{name}: </span>
        <span>{number}</span>
      </CardText>
      <button type="button" onClick={toggleModal}>
        Edit
      </button>
      <DeleteBtn
        type="button"
        disabled={isPending}
        onClick={() => removeContact(id, name)}
      >
        Delete
      </DeleteBtn>

      {modal && (
        <Modal onClose={toggleModal}>
          <div>
            <h1>MODAL</h1>
            <EditContactForm
              contactName={name}
              contactNumber={number}
              contactId={id}
            />
            <button onClick={toggleModal}>close</button>
          </div>
        </Modal>
      )}
    </Card>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
