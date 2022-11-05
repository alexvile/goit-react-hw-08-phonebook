import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateContact } from 'redux/contactsSlice';

export const EditContactForm = ({ contactName, contactNumber, contactId }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(contactName);
  const [number, setNumber] = useState(contactNumber);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
    // console.log();
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(login({ email, password }));
    console.log(e);
    // console.log({ name, number });
    // console.log(contactId);
    dispatch(updateContact({ id: contactId, name, number }));
    // resetForm();
  };
  return (
    <>
      <h1>Edit contact form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <br />
        <label>
          <span>Phone</span>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
