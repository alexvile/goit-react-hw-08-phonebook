import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authSlice';

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log({ name, email, password });
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <>
      <h1>SIGN UP</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input name="name" type="text" value={name} onChange={handleChange} />
        </label>
        <br />
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <span>Password</span>
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
