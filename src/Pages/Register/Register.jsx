import { useSelector } from 'react-redux';

import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { errorMessageAuth } from 'redux/authSlice';
import { Error } from 'components/Error/Error';

const Register = () => {
  const error = useSelector(errorMessageAuth);
  return (
    <>
      {error ? (
        <Error addMessage={<span>This email is already used</span>}>
          {error}
        </Error>
      ) : (
        <SignUpForm />
      )}
    </>
  );
};
export default Register;
